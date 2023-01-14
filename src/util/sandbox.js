var api = require('./api_wrapper');

const asynchronousFunction = callback => {
    return api.queryChatGPT().then(response => {
        callback(response);
    });
}


const callback = r => {
    //remove loading spinner
    /// Do stuff with response HERE
    var result = r;

    //add react obj to screen
    console.log(result);
}

asynchronousFunction(callback)
console.log("loading...");
// add loading spinner
