function responseParse (input, isLesson) {

    const steps = input.split('\n');

    const filteredSteps = steps.filter(sentence => sentence !== '');    

    if (isLesson && filteredSteps[0].charAt(0) >= '0' && filteredSteps[0].charAt(0) <= '9') {
        for (var i = 0; i < filteredSteps.length; i++) {
            if (i < 9) {
                filteredSteps[i] = filteredSteps[i].slice(3, filteredSteps[i].length);
            }
            else {
                filteredSteps[i] = filteredSteps[i].slice(4, filteredSteps[i].length);
            }
        }
    }

    return filteredSteps;
}

exports.packageLessonResponse = function (p, list) {
    var pack = {};
    var isLesson = true
    pack.prompt = p;
    pack.list = responseParse(list, isLesson);
    return pack;
}


exports.packageStepResponse = function (p, list) {
    var pack = {};
    var isLesson = true
    pack.prompt = p;
    pack.list = responseParse(list, isLesson);
    return pack;
}