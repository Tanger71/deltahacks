const { Configuration, openAIApi, OpenAIApi } = require("openai");
// require('dotenv').config();

const configuration = new Configuration({
    // apiKey: process.env.OPEN_AI_APIKEY,
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

exports.queryChatGPT = async function(prompt) {

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
