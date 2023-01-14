const { Configuration, openAIApi } = require("openai");
require('dotenv').config({path : '../.env'});

const configuration = new Configuration({
   apiKey: process.env.OPEN_AI_APIKEY,
});

exports.queryChatGPT = function() {
    console.log("Hello World!")
}
