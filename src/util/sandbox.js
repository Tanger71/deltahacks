///intTest

var api = require('./api_wrapper');

api.queryChatGPT().then(r => { 
    console.log(r.data.choices[0].text); 
});


console.log("yeo");