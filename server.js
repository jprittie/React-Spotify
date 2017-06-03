const express = require('express');
const request = require('request'); 
const app = express();

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

const spotifykeys = require('./spotifykeys.json');
const client_id = spotifykeys.client_id; // Your client id
const client_secret = spotifykeys.client_secret; // Your secret

// application requests authorization
const authOptions = {
  url: 'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  },
  form: {
    grant_type: 'client_credentials'
  },
  json: true
};


app.get('/search/:q', (req, res) => {
 
  console.log(req.params.q);
  const albumName = req.params.q;

  if (!albumName) {
    res.json({
      error: 'Missing required parameter `searchTerm`',
    });
    return;
  }


  request.post(authOptions, function(error, response, body) {
    if (!error && response.statusCode === 200) {

//fetch(`https://api.spotify.com/v1/search?q=album:${searchTerm}&type=album`)

      // use the access token to access the Spotify Web API
      const token = body.access_token;
      const options = {
        url: 'https://api.spotify.com/v1/search?q=album:lemonade&type=album',
        headers: {
          'Authorization': 'Bearer ' + token
        },
        json: true
      };
      request.get(options, function(error, response, body) {
        console.log(body);
      });
    }
  });

}); 


app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});