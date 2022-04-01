const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const Mongo = require("mongodb");
const MongoClient = Mongo.MongoClient;
const uri =
  'mongodb://localhost:27017';
const client = new MongoClient(uri);

let posts;
let users;

app.use(async (req, res, next) => {
  await client.connect();
  const database = client.db('blog2');
  posts = database.collection('posts');
  users = database.collection('users');
  next();
});

app.use(require('cors')({
  origin: 'http://localhost:3000',
}));

app.post('/register', async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return next(new Error('Username and password are required'));
  }

  bcrypt.hash(req.body.password, 10, async (err, hash) => {
    if (err) {
      return next(err);
    }

    const duplicate = await users.findOne({username: req.body.username})
    if (duplicate){
      return next(new Error('Username already exists'));
    }


    const newUser = {
      username: req.body.username,
      password: hash
    }

    await users.insertOne(newUser);

    res.status(201)
      .send(newUser);
  });

});

//app.post('/login', require('./login'));


app.route('/posts')
  .get(async (req, res, next) => {
    const thePosts = await posts.find().toArray();
    res.send(thePosts);
  })
  .post(async (req, res, next) => {
    const newPost = {
      title: req.body.title,
      body: req.body.body,
      author: 'Joe',
      date: new Date()
    };

    await posts.insertOne(newPost);

    res.status(201)
      //.location(`/posts/${newPost._id}`)
      .send(newPost);
  });

app.post('/posts/:id/comments', async (req, res, next) => {
  const newComment = {
    body: req.body.body,
    author: 'Kamala',
    date: new Date()
  };

  const result = await posts.updateOne({ _id: Mongo.ObjectId(req.params.id) }, { $push: { comments: newComment } });

  if (!result.modifiedCount) {
    return res.status(404).send('Not found');
  }

  res.status(201)
    //.location(`/posts/id/${newComment._id}`)
    .send(newComment);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const e = new Error('Not Found');
  e.status = 404;
  next(e);
});

// error handler
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(8080);
