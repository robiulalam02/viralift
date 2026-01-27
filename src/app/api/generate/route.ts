import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

export const maxDuration = 60;
export const dynamic = 'force-dynamic';

const redis = new Redis({
    url: process.env.UPSTASH_REDIS_REST_URL!,
    token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

const ratelimit = new Ratelimit({
    redis: redis,
    limiter: Ratelimit.slidingWindow(5, "1 h"),
    analytics: true,
    prefix: "@upstash/ratelimit",
});

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function POST(req: Request) {
    try {
        const { topic, platform } = await req.json(); // Platform added here

        const cleanedTopic = topic?.trim().replace(/[.\-_]/g, "");
        if (!topic || cleanedTopic.length < 3) {
            return NextResponse.json({ error: "Topic is too vague." }, { status: 400 });
        }

        const ip = req.headers.get("x-forwarded-for")?.split(',')[0] ?? "127.0.0.1";
        const { success } = await ratelimit.limit(ip);
        if (!success) return NextResponse.json({ error: "Quota exceeded." }, { status: 429 });

        const model = genAI.getGenerativeModel({
            model: "gemini-2.5-flash",
            generationConfig: { responseMimeType: "application/json", temperature: 0.7 }
        });

        // PLATFORM SPECIFIC PROMPT LOGIC
        const persona = {
            youtube: "YouTube SEO Expert focusing on High CTR and Search Discovery.",
            instagram: "Instagram Growth Hacker focusing on Viral Hooks and Engagement.",
            facebook: "Facebook Marketing Specialist focusing on Shareability and Community Interaction."
        }[platform as 'youtube' | 'instagram' | 'facebook'] || "Social Media Expert";

        const prompt = `
            You are a ${persona}.
            USER TOPIC: "${topic}"

            STRICT RULE: If the topic is invalid, return: {"error": "INVALID_CONTENT"}.

            Generate:
            1. 5 Viral ${platform === 'youtube' ? 'Titles' : 'Captions/Hooks'}.
            2. 3 short visual overlay texts (max 4 words).
            3. 20 relevant tags/keywords.
            4. 5 trending hashtags.

            Return ONLY this JSON:
            {
                "titles": [],
                "thumbnailTexts": [],
                "tags": "",
                "hashtags": ""
            }
        `;

        const result = await model.generateContent(prompt);
        const data = JSON.parse(result.response.text());

        if (data.error === "INVALID_CONTENT") {
            return NextResponse.json({ error: "Invalid topic for this platform." }, { status: 400 });
        }

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: "Server error." }, { status: 500 });
    }
}