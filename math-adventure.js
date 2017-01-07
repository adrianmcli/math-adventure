const shop = require('workshopper-adventure')({
  name: 'Math Adventure',
  appDir: __dirname,
});

shop.addAll([
  'HELLO WORLD',
]);

module.exports = shop;
