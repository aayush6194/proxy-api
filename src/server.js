let helper = require('./helper');
let express = require('express');
let middleware = require('./middleware');
let app = express();
let config = require('./config');

app.listen(config.port);
middleware(app);

app.all('*', async function(req, res) {
  let { method, headers : header, body, url } = req;
  let result = await helper({
    method: method,
    jsonBody: body,
    header : {},
    testUrl : 'https://github.com',
    route : url
  });
res.send(result);
 });


console.log(('Your App is Running on Port : ' + config.port));

app.use(
  (err, req, res, next) => {
    console.log(err);
    res.status(400).send({ success: false, message: err.message || err });
  }
);
