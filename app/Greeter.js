var config = require('./config.json');

// Greeter.js
module.exports = function() {
  var greet = document.createElement('div');
  greet.textContent = "Hi 你好，我是anlu!";
  return greet;
};

