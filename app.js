var express = require('express'),
  oauth2 = require('salesforce-oauth2'),
  logger = require('morgan'),
  server = require('./server.js');

var callbackUrl = 'http://localhost:3000/oauth/callback',
  consumerKey =
    '3MVG9JZ_r.QzrS7jcijyU6XYYRWDp_u85CBPwif..D8tAjOb7P.LPcSF2bYL3egRlDwrf2HAR55u4bp0S0KjW',
  consumerSecret = '6981024604634838447';

var app = express();
app.get('/', function(request, response) {
  var uri = oauth2.getAuthorizationUrl({
    redirect_uri: callbackUrl,
    client_id: consumerKey,
    scope: 'api',
  });
  return response.redirect(uri);
});

app.use(express.static(__dirname + '/build'));

app.get('/get', function(req, res) {
  server.get(req, res);
});

app.get('/oauth/callback', function(req, resp) {
  var authorizationCode = req.param('code');

  oauth2.authenticate(
    {
      redirect_uri: callbackUrl,
      client_id: consumerKey,
      client_secret: consumerSecret,
      code: authorizationCode,
    },
    function(error, payload) {
      console.log(error);
      debugger;
      global['instanceUrl'] = payload.instance_url;
      global['accessToken'] = payload.access_token;

      console.log(payload);
      return resp.redirect('/index.html');
    },
  );
});
app.listen(3000, function() {
  console.log('Listening on 3000');
});
