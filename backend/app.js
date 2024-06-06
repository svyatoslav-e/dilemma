const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI({
    organization: process.env.OPENAI_ORGANIZATION_ID,
    apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo-16k",
    });

    console.log(completion.choices[0]);

    return completion.choices[0];
}



const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

app.post('/api/openai', async (req, res) => {
    const prompt = req.body.prompt;
    try {
        const response = await main();
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
