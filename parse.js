const request = require('request')
const cheerio = require('cheerio')

request(
  'https://index.minfin.com.ua/ua/markets/fuel/reg/lvovskaya',
  (error, response, html) => {
    if (!error && response.statusCode == 200) {
      const $ = cheerio.load(html)

      const siteHeading = $(
        '#tm-table > table > tbody > tr:nth-child(7) > td:nth-child(3)'
      )
      var parseFuel = parseFloat(siteHeading.text())
      console.log(parseFuel)
    }
  }
)

// fetch('https://index.minfin.com.ua/ua/markets/fuel/reg/lvovskaya/', {
//   mode: 'no-cors',
//   method: 'GET',
//   headers: {
//     Accept: 'application/html',
//   },
// })
//   .then(function (response) {
//     // When the page is loaded convert it to text
//     console.log(response)
//     return response.text()
//   })
//   .then(function (html) {
//     // Initialize the DOM parser
//     var parser = new DOMParser()

//     // Parse the text
//     var doc = parser.parseFromString(html, 'text/html')
//     console.log(html)
//     // You can now even select part of that html as you would in the regular DOM
//     // Example:
//     var docArticle = doc.getElementsByTagName('article')
//     console.log(doc)
//     console.log(docArticle)
//   })
//   .catch(function (err) {
//     console.log('Failed to fetch page: ', err)
//   })
