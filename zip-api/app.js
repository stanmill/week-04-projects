const express = require('express');
const app = express();

const zipdb = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  const zipcode = zipdb.byZip.zipcode;
  req.json(zipcode);
  res.send(`the zipcode is ${zipcode}`);
});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const cityname = zipdb.byCity.cityname;
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
