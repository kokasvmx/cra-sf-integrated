
request = require('request'),
module.exports = {

  get: function(req, res){
    var instanceUrl = global['instanceUrl'];
    var accessToken = global['accessToken'];
    var uri = instanceUrl + req.param('url');
    var authorization = 'Bearer ' + accessToken;
    request(
      {
        url: uri,
        headers: {
          'Authorization': authorization
        }
      },
      function(err, response, body) {
        res.send(body);
      },
    );
  },

  post: function(req, res){

  }

}