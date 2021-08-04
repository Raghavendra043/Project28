const express = require('express');

const {routes} = require('./routes/index');
const dotenv = require('dotenv');
const app = express();

dotenv.config();
app.use(express.urlencoded({ extended: true }));

app.set('host', process.env.HOST || 'http://localhost');
app.set('port', process.env.PORT || 9000);

app.use(routes);

app.listen(app.get('port'), () => {
  console.log('info', `App is running at ${app.get('host')}:${app.get('port')}`);
});

module.exports = app;