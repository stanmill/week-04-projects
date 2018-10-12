const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const { byZip } = require('./zipData');
const { byCity } = require('./zipData');

const PORT = process.env.PORT || 8000;


// console.log(zipdb.byCity);


app.get('/', (req, res) => {
  res.json({test: 'Yay'});
});


app.get('/zip/:zipcode', (req, res) => {
  // fill in...
  console.log('we are here in the zipcode endpoint')
  console.log(req.params)
  const zipcode = req.params.zipcode;
  const data = byZip[zipcode];

  res.json({
    message: 'Success',
    data
  })

});


app.get('/city/:cityname', (req, res) => {
  // fill in...
  const cityname = req.params.cityname;
  const data = byCity[cityname];

  res.json({
    message: 'success',
    data
  })
});


app.listen(PORT, () => {
  console.log(`zip-api is up and running on ${PORT}`);
});
