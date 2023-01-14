///intTest

const api_wrapper= require('./api_wrapper.js');
api_wrapper.queryChatGPT().then(res => {
    console.log(res);
});