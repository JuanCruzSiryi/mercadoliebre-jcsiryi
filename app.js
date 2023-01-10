const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.get('/', function(req, res){
    let htmlPath = path.resolve(__dirname, "./views/home.html");
    res.sendFile(htmlPath);
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`)
});