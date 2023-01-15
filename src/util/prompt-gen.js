function checkChars(topic) {
    if (!topic) {throw new Error("User cannot input an empty string.")}
    const allowedChars = new RegExp(/^[A-Za-z]+$/);
    if (allowedChars.test(topic)) {throw new Error("User used invalid characters.")}
    return 0;
}

function checkTopic(topic) {
    return 0;
}


function checkvalid (topic) {
    (checkChars(topic));
    (checkTopic(topic));
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