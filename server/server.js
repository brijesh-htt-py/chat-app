const path = require('path');
const express  = require('express');

// publicPath for public dir
const publicPath = path.join(__dirname, "/../public");

var app = express();

const port = process.env.PORT || 3000

// setup for static public dir
app.use(express.static(publicPath));


app.listen(port, function(){
    console.log(`Starting development server at http://127.0.0.1:${port}`)
});
 