const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/aposteme-ui'));

app.get('/*', function(req, res) {
  res.sendFile(__dirname + '/dist/aposteme-ui/index.html');
});

// app.listen(4200);

app.listen(process.env.PORT || 4200);
