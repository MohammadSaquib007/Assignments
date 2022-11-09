const express = require('express');
var bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { connect} = require('mongoose');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connect("mongodb+srv://saquib:Saquib123@mohammadsaquib.f3sxbno.mongodb.net/test"
, {
   useNewUrlParser: true 
}
).then( () => {console.log( "MongoDb is connected")}  )
.catch( err => console.log(err))
app.use('/', route);
app.listen(process.env.PORT || 3000, function() {
console.log('Express app running on port ' + (process.env.PORT || 3000))});