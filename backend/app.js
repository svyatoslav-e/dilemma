const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const OpenAI = require("openai");

const openai = new OpenAI({
    organization: process.env.OPENAI_ORGANIZATION_ID,
    apiKey: process.env.OPENAI_API_KEY,
});


const app = express();
const port = 3000;

app.use(cors());

app.use(bodyParser.json());

async function main(messages) {
    const completion = await openai.chat.completions.create({
        messages,
        model: "gpt-3.5-turbo",
    });

    console.log(completion.choices[0]);

    return completion.choices[0];
}

app.post('/api/openai', async (req, res) => {
    const { messages } = req.body;

    try {
        const resp  = await main(messages);

        res.json(resp);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
