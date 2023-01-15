const { Configuration, openAIApi, OpenAIApi } = require("openai");
// require('dotenv').config();

const configuration = new Configuration({
    // apiKey: process.env.OPEN_AI_APIKEY,
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

exports.queryChatGPT = async function (prompt) {
    const gptResponse = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 2048,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    })

    return gptResponse["data"]["choices"][0]["text"];
}
