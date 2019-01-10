const request = require('request');
// request('http://www.google.com', function (error, response, body) {
//     console.log('error:', error); // Print the error if one occurred
//     console.log('body:', body); // Print the HTML for the Google homepage.
// });   

const requestPromise = (url) =>{
    return new Promise((resolve,reject)=>{
        request(url, function (error, response, body) {
            if(error) reject(); // Print the error if one occurred
            else resolve(body); // Print the HTML for the Google homepage.
        }); 
    })
    .then((body)=>{
        console.log('body:', body)
    },err =>{
        console.log('error:', error)
    })
     
}

requestPromise('http://motherfuckingwebsite.com/');