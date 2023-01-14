const { Configuration, openAIApi, OpenAIApi } = require("openai");
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_APIKEY,
});
const openai = new OpenAIApi(configuration);

exports.queryChatGPT = async function() {
    let topic = "swim";

    const gptResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `How would I teach someone to ${topic}?`,
        temperature: 0.7,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

    return gptResponse["data"]["choices"][0]["text"];
}