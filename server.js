const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.listen(3000, ()=>{
    console.log("App listen to port 3000!!");
})