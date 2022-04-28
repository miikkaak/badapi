const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

let port = 8081;
app.listen(port, () => {
	console.log('Server is running on port ' + port);
});

app.get('/', function(req, res){
    res.json({"message": "Bad API to demonstrate no security. Methods: get = '/', get = '/gen', post = '/'"});
});

require("./app/routes.js")(app);