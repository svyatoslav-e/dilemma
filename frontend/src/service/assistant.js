import OpenAI from "openai";

const openai = new OpenAI({
    organization: import.meta.env.VITE_OPENAI_ORGANIZATION_ID,
    project: '$PROJECT_ID',
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
});

export default openai;
