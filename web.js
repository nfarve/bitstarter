var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var output = fs.readFileSync('index.html');
    var string = output.toString; 
    response.send(string);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
