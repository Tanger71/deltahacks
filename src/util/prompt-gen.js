function checkChars(topic){
    return 0;
}

function checkTopic(topic){
    return 0;
}

function checkValid (topic) {
    if (checkChars(topic)) throw new Error('Invalid Chars');
    if (checkTopic(topic)) throw new Error('Invalid topic');
}


/**
 * @param topic str
 * 
 * @returns str that is prompt
 */
exports.generate = function (topic) {
    checkValid(topic);

    var prompt = "";
    prompt += "How would I teach someone to ";
    prompt += topic
    prompt += " in steps?";

    return prompt;
}