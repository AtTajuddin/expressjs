const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(isWeather);
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

function isWeather(req, res, next) {
  req.visitorWeather = false;
  if (req.visitorWeather) {
    res.send('Please datang deui kadie, can hujan euy');
  } else {
    next();
  }
}

app.get('/', (req, res) => {
  res.render('home', {
    isRaining: true,
    pets: [
      { name: 'poky', species: 'kucing' },
      { name: 'simon', species: 'kelinci' },
    ],
  });
});

app.get('/about', (req, res) => {
  res.send('this is mu ABOUT');
});

app.post('/result', (req, res) => {
  if (req.body.color.trim().toUpperCase() === 'BLUE') {
    res.send('Selamat anda benar!');
  } else {
    res.send('anda tidak beruntung');
  }
});
app.get('/result', (req, res) => {
  res.send(' naha di tulis langsung ka die?');
});

app.listen(3000);
