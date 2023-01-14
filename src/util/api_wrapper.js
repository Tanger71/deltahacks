const { Configuration, OpenAIApi } = require("openai");
require('dotenv').config();

console.log(JSON.stringify(process.env.OPEN_AI_APIKEY));

const configuration = new Configuration({
   apiKey: process.env.OPEN_AI_APIKEY,
});

const openai = new OpenAIApi(configuration);

exports.queryChatGPT = async function() {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "how do i teach someone golfing?",
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    return response;
}
