var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

const MongoClient = require("mongodb").MongoClient;
const uri =
  'mongodb+srv://miriamb:Baskin22@cluster0.qxxma.mongodb.net/blog?retryWrites=true&w=majority';
const client = new MongoClient(uri);
async function run() {
  try {
    await client.connect();

    const postsCollection = client.db('blog').collection('posts');

    await showCollections(postsCollection);

    await listDatabases();

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

async function listDatabases() {
  const results = await client.db().admin().listDatabases();
  //results.databases.forEach(async db => {
  await asyncForEach(results.databases, async db => {
    console.log(`${db.name}`);

    await showCollections(db.name);
  });
}

async function showCollections(dbName) {
  const collections = await client.db(dbName).listCollections().toArray();
  collections.forEach(collection => {
    console.log(`\t ${collection.title}`);
  });
}

// added after class - show 5 documents from collection, match optional filter, sort optional sort
async function show5Listings(collection, filter, sort) {
  const results = await collection.find(filter).sort(sort).limit(5).toArray();
  results.forEach(r => {
    // this code is specific to airbnb data. Should probably pass in a callback instead...
    console.log(`${r.name} - ${r.price} - ${r.summary}\n\n`);
  });
}

module.exports = app;
