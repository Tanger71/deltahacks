var promptGen = require('./prompt-gen');
var parseResponse = require('./parse-response');
var api = require('./api_wrapper');

exports.getLesson = async function (callback, topic){

    var prompt = promptGen.generate(topic);

    var r = await api.queryChatGPT(prompt);
    
    callback(parseResponse.packageResponse(prompt, r));

}
