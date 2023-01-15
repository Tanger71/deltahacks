var promptGen = require('./prompt-gen');
var parseResponse = require('./parse-response');
var api = require('./api_wrapper');

/**
 * 
 * @param function callback to recieve JSON obj when its ready
 * @param str topic to generate prompt with
 */
exports.getLesson = async function (callback, topic){

    var prompt = promptGen.generate(topic);

    var r = await api.queryChatGPT(prompt);

    callback(parseResponse.packageResponse(prompt, r));
}