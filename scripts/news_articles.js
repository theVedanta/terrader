// import os from 'os';
const express = require('express');
require("dotenv").config();
const { Configuration, OpenAIApi } = require("openai");

const app = express();
app.use(express.json());

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post('/generateNews', async (req, res) => {
    try {
        const response = await openai.createCompletion({
            model: "gpt-3.5-turbo",
            prompt: `Hello World!`,
            maxTokens: 25,
            temperature: 0.6,
        });

        return res.status(200).json({
            success: true,
            data: response.data.choices[0].text
        });

    } catch (err) {
        return res.status(400).json({
            success: false,
            error: error.response ? error.response.data : "There was an issue on the server side",
        });
    }
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port ${port}`));