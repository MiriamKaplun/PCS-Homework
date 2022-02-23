const app = require('connect')();

app.use(require('./logger'));

app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.use('/index.html', (req, res, next) => {
  res.end('<h1>This is the PCS home page</h1>');
});

app.use('/aboutus.html', (req, res, next) => {
  res.end('<h2>PCS is a great organization</h2>');
});

app.use('/makeError', (req, res, next) => {
  throw new Error('This is a custom error');
});

app.use(require('./queryParser'));

app.use((req, res, next) => {
  if (req.searchParams.get('magicWord') === 'please') {
    next();
  } else {
    res.end('<h1>You didnt ask politely</h1>')
  }
});

app.use('/sayHello', (req, res, next) => {

  const name = req.searchParams.get('name') || 'stranger';

  res.end(`Hellooooo, ${name}`);
});

app.use('/sayGoodbye', (req, res, next) => {

  const name = req.searchParams.get('name') || 'stranger';
  res.end(`Gooooodbye, ${name}`);

});

app.use((error, req, res, next) => {
  res.statusCode = error.statusCode || 500;
  res.write(`OOPS - ${error.message}`);
  next(error);
});

app.use((error, req, res, next) => {
  res.end(`Second handler - ${error.message}`);
});

app.listen(80);