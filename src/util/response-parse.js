exports.responseParse = function(input) {
    const steps = input.split('\n');

    const filteredSteps = steps.filter(sentence => sentence != '');

    return filteredSteps;
}