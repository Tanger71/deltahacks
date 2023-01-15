var promptGen = require('./prompt-gen');
var parseResponse = require('./parse-response');
var api = require('./api_wrapper');

// var module = new Module();
// var exports = module.exports;

// /**
//  * 
//  * @param function callback to recieve JSON obj when its ready
//  * @param str topic to generate prompt with
//  */

// exports.getLesson = async function (callback, topic){

//     var prompt = promptGen.generate(topic);

//     var r = await api.queryChatGPT(prompt);

//     callback(parseResponse.packageLessonResponse(prompt, r));
// }


// /**
//  * 
//  * @param function callback to recieve JSON obj when its ready
//  * @param str topic to generate prompt with
//  */
// exports.getStep = async function (callback, topic, step){

//     var prompt = promptGen.generateStep(topic, step);

//     var r = await api.queryChatGPT(prompt);

//     callback(parseResponse.packageStepResponse(prompt, r));
// }

// exports.setToken = function (token){
//     api.setToken(token);
// }


async function getLesson (callback, topic){

    var prompt = promptGen.generate(topic);

    var r = await api.queryChatGPT(prompt);

    callback(parseResponse.packageLessonResponse(prompt, r));
}

/**
 * 
 * @param function callback to recieve JSON obj when its ready
 * @param str topic to generate prompt with
 */
async function getStep (callback, topic, step){

    var prompt = promptGen.generateStep(topic, step);

    var r = await api.queryChatGPT(prompt);

    callback(parseResponse.packageStepResponse(prompt, r));
}

function setToken (token){
    api.setToken(token);
}

export {setToken, getStep, getLesson};