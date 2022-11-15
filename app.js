const express = require('express');
const app = express();
const { getTopics } = require('./controllers/topics-controllers');
const { getArticles } = require('./controllers/articles-controllers');

app.get('/api/topics', getTopics);
app.get('/api/articles', getArticles);

//Route not found errors
app.all('/*', (req, res) => {
    res.status(404).send({ msg: 'Route not found' });
  });
  

//Status 500 errors
app.use((err, req, res, next) => {
    console.log(err, '<< unhandled error')
    res.sendStatus(500);
});

module.exports = app;
  