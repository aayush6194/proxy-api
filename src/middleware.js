let cors  = require('cors');
let bodyParser = require('body-parser');

//Cors and Parsers
const InitMiddleWare = (app) => {
    app.use(cors());
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
  
  //Access Control
  app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, email, authtoken, Accept");
        res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
        next();
    });
  
  }
  
module.exports = InitMiddleWare ;