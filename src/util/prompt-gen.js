function checkChars(topic){
    return 0;
}

function checkTopic(topic){
    return 0;
}


function checkvalid (topic) {
    if (checkChars(topic)) throw new Error('Invalid Chars');
    if (checkTopic(topic)) throw new Error('Invalid topic');
}


/**
 * @param topic str
 * 
 * @returns str that is prompt
 */
exports.generate = function (topic) {
    var prompt = "How would I teach someone to ";

    checkvalid(topic);

    prompt += topic + "?";
    return prompt;
}