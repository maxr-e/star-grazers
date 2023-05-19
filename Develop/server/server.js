const express = require('express');
const NodeGeocoder = require('node-geocoder'); //Locationiq API through node-geocoder
const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

const options = {
  provider: 'locationiq',
  apiKey: 'pk.24edc7d82d89ef6dc454dc971e52963b', //for Locationiq API
};
const geocoder = NodeGeocoder(options);

// Using callback
app.post('/api/location', async (req, res) => {
  const address = req.body.address;
  const locationData = await geocoder.geocode(address);
  res.json(locationData);
});


app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});


//Locationiq API notes:
//Access Token 1 :'pk.24edc7d82d89ef6dc454dc971e52963b'

//OPTION -->
// const axios = require('axios');
// const params = {
  //   access_key: 'somone.elses.key',
  //   query: '1600 Pennsylvania Ave NW'
  // }
  
  // axios.get('https://api.positionstack.com/v1/forward', {params})
  //   .then(response => {
    //     console.log(response.data);
//   }).catch(error => {
  //     console.log(error);
  //   });
  //<--OPTION
  
// output for front end :
  //  res.json:locationdata [0]
  //  latitude,
  //  longitude
  //  [
    //    {
      //      latitude: 48.8698679,
      //      longitude: 2.3072976,
      //      country: 'France',
      //      countryCode: 'FR',
      //      city: 'Paris',
      //      zipcode: '75008',
      //      streetName: 'Champs-Élysées',
      //      streetNumber: '29',
      //      administrativeLevels: {
        //        level1long: 'Île-de-France',
        //        level1short: 'IDF',
        //        level2long: 'Paris',
        //        level2short: '75'
//      },
//      provider: 'locationid'
//    }
//  ];

//OPTION-->
//In your ExpressJS app on nodejs, do the following with your routes.
// app.all('/', function(req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "*");
  //   res.header("Access-Control-Allow-Headers", "X-Requested-With");
  //   next()
  // });
  // app.get('/', function(req, res, next) {
  //   // Handle the get for this route
  // });
  // app.post('/', function(req, res, next) {
  //   // Handle the post for this route
  // })
  //<-- OPTION