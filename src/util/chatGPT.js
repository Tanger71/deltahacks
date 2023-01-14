var promptGen = require('./prompt-gen');
var api = require('./api_wrapper');

exports.getLesson = async function (callback, topic){

    var prompt = promptGen.generate(topic);

    return api.queryChatGPT(prompt).then(response => {
        callback(response)
      });
}
