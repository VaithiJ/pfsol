var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://rpc.api-pump.fun/king',
  'headers': {
    'x-api-key': '915e966f-4823-456b-a0c9-f9488f2c68ee'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});