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
}

getImagesFrom('https://en.wikipedia.org/wiki/Ceratosaurus')
  .then(imageUrls => {
    console.log(imageUrls);
  })
  .catch(err => {
    console.log(err);
  })