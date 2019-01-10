// -- Dependencies
const cheerio = require('cheerio');
const url = require('url');


const getImagesInPagePromisified = ((urll, html) => {
   return new Promise((resolve, reject) => {
       const arrayOfImages = [];
       const $ = cheerio.load(html);

       $('img').map((i, e) => {
           const imgURL = url.resolve(urll, $(e).attr('src'));
           arrayOfImages.push(imgURL);
       });

       if(arrayOfImages.length === 0) reject()
       else resolve(arrayOfImages);
       
   })
})

// ----- Promisified
// getImagesInPagePromisified('url', 'html')
//    .then(imageUrls => {
//        console.log(imageUrls);
//    },err =>{
//        console.log('arg not valid')
//    })


module.exports = {
    getImagesInPagePromisified
}