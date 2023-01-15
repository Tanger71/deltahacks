//// prompt-gen ////
// var promptGen = require('./prompt-gen');

// console.log(promptGen.generate("golf"));


//// api-wrapper ////

// var api = require('./api_wrapper');

// asynchronousFunction = callback => {
//     return api.queryChatGPT().then(response => {
//       callback(response)
//     })
// }

// const callback = r => {
//     //remove loading spinner
//     /// Do stuff with response HERE
//     var result = r;

//     //add react obj to screen
//     console.log(result);
// }

// asynchronousFunction(callback)
// console.log("loading...");
// // add loading spinner

//// chatGPT ////

var chatGPT = require('./chatGPT');

const callback = r => {
    //remove loading spinner
    /// Do stuff with response HERE
    var result = r;

    //add react obj to screen
    console.log(result);
}

chatGPT.getStep(callback, "play league", "Emphasize the importance of adaptation and flexibility, to be able to change strategies and adapt to different situations in the game")
console.log("loading...");
// add loading spinner



