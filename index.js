const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hai may man');
});

app.listen(3000);
