///intTest
var api = require('./api_wrapper');

const asynchronousFunction = callback => {
    return api.queryChatGPT().then(response => {
      callback(response)
    })
}


const callback = r => {
    var result = r;
    console.log(result);
    //stop loading and display result
}

asynchronousFunction(callback)
console.log("loading...");




