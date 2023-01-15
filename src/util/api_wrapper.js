const { Configuration, OpenAIApi } = require("openai");
// const { Configuration, openAIApi, OpenAIApi } = require("openai");
// require('dotenv').config();

var configuration = new Configuration({
    apiKey: "",
});
var openai = new OpenAIApi(configuration);

// exports.setToken = function (token) {
//     configuration = new Configuration({
//         // apiKey: process.env.OPEN_AI_APIKEY,
//         apiKey: token,
//     });
//     openai = new OpenAIApi(configuration);
// }

// exports.queryChatGPT = async function (prompt) {
//     const gptResponse = await openai.createCompletion({
//         model: "text-davinci-003",
//         prompt: prompt,
//         temperature: 0.7,
//         max_tokens: 2048,
//         top_p: 1,
//         frequency_penalty: 0,
//         presence_penalty: 0,
//     })

//     return gptResponse["data"]["choices"][0]["text"];
// }


function setToken (token) {
    configuration = new Configuration({
        // apiKey: process.env.OPEN_AI_APIKEY,
        apiKey: token,
    });
    openai = new OpenAIApi(configuration);
}

async function queryChatGPT (prompt) {
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

export {setToken, queryChatGPT};
