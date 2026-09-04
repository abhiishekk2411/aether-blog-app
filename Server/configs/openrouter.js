import OpenAI from "openai";

const openRouter = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
    defaultHeaders: {
        "HTTP-Referer": process.env.SITE_URL || "http://localhost:5173", 
        "X-Title": "Aether Blog Admin", 
    }
});

export default openRouter;