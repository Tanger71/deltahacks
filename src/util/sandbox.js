///intTest

const api_wrapper= require('./api_wrapper.js');

const lessonPlan = api_wrapper.queryChatGPT().then(res => {
    return res;
});

const printedLessonPlan = function() {
    lessonPlan.then((res) => {
        console.log(res);
    });
}

console.log(printedLessonPlan);