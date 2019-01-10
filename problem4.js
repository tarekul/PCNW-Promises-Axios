/*
Create an Express server that takes in the following request:

GET http://localhost:3000/getImagesFromPage/?url=[PASS IN URL]
And the page responds with a JSON response holding all the image URLs from that page.
*/

const express = require('express')
const app = express();

const port = 8001;

const axios = require('axios');

// axios.get('http://motherfuckingwebsite.com/')
//     .then(response =>{
//         console.log(response)
//     })
//     .catch(err =>{
//         console.log(err)
//     })

const getImageUrls = require('./problem1.js')

getImagesFrom = (url) =>{
    return axios.get(url)
    .then((response)=>{
        return getImageUrls.getImagesInPagePromisified(url,response.data)
    })
    .then(imageUrls => {
        console.log(imageUrls);
      })
      .catch(err => {
        console.log(err);
      })
}

getit = () =>{
    app.get(`/getImagesFromPage`,(res,req)=>{
        let url = res.query.url
        return getImagesFrom(url);
    })

    app.listen(port,()=>{
        console.log(`Listening at port: ${port}`)
    })
}

getit()
