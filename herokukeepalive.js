const axios = require('axios');

//Incognito
setInterval(function() {
    axios.get("https://incognito-app.herokuapp.com");
}, 1000);

//The Grammar Games
setInterval(function() {
    axios.get("https://the-grammar-games.herokuapp.com");
}, 300000);

//Portfolio
setInterval(function() {
    axios.get("https://mikeydevs.herokuapp.com");
}, 300000);