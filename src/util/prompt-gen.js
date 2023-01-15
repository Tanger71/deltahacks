function checkChars(topic) {
    if (!topic) {throw new Error("User cannot input an empty string.")}
    let allowedChars = /^[a-z]+$/i.test(topic);
    if (!allowedChars) {throw new Error("User used invalid characters.")}
    return 0;
}

function checkTopic(topic) {
    return 0;
}


function checkValid (topic) {
    checkChars(topic);
    checkTopic(topic);
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
    prompt += topic;
    prompt += " in a numbered list? each beginning with the word 'Teach'";

    return prompt;
}

/**
 * @param topic str
 * 
 * @returns str that is prompt
 */
exports.generateStep = function (topic, step) {
    checkValid(topic);

    var prompt = "";
    prompt += "In " + topic;
    prompt += ", How do I ";
    prompt += step;
    prompt += "?";

    return prompt;
}