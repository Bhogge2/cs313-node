const express = require('express');
const getRate = require('./util/getRate');
const appExpress = express();

appExpress.set('port', (process.env.PORT || 5000));
appExpress.use(express.static(__dirname + '/public'));
appExpress.set('views', __dirname + '/views');
appExpress.set('view engine', 'ejs');

appExpress.get('/', function(request, response) {
  response.render('pages/index.ejs');
});

appExpress.get('/results', getRate)

appExpress.listen(appExpress.get('port'), function() {
  console.log('Node app is running on port', appExpress.get('port'));
});