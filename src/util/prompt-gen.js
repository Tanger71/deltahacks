function checkChars(topic) {
    //if (!topic) {throw new Error("User cannot input an empty string.")}
    let allowedChars = /^[a-z]+$/i.test(topic);
    if (allowedChars) {throw new Error("User used invalid characters.")}
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
    prompt += " in steps?";

    return prompt;
}