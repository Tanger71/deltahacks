function responseParse (input) {
    const steps = input.split('\n');

    const filteredSteps = steps.filter(sentence => sentence != '');

    return filteredSteps;
}

exports.packageResponse = function (p, list) {
    var pack = {};
    pack.prompt = p;
    pack.list = responseParse(list);
    return pack;
}