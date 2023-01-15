function responseParse (input) {

    const steps = input.split('\n');

    const filteredSteps = steps.filter(sentence => sentence != '');

    for (var i = 0; i < filteredSteps.length; i++) {
        if (i <= 9) {
            filteredSteps[i] = filteredSteps[i].slice(3, filteredSteps[i].length);
        }
        else {
            filteredSteps[i] = filteredSteps[i].slice(5, filteredSteps[i].length);
        }
    }

    return filteredSteps;
}

exports.packageResponse = function (p, list) {
    var pack = {};
    pack.prompt = p;
    pack.list = responseParse(list);
    return pack;
}