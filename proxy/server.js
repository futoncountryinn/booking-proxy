const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path');
const app = express();
const port = 3000;
const cors = require('cors');
const axios = require('axios');

app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server running at: ${port}`);
});

app.get('/reservation', (req, res) => {
  const url = `http://load-balancer-1-2135754840.us-east-2.elb.amazonaws.com/reservation`;
  axios.get(url).then((response) => {res.send(response.data)});
});

app.post('/reservation', (req, res) => {
  const url = `http://load-balancer-1-2135754840.us-east-2.elb.amazonaws.com/reservation`;
  axios.post(url).then((response) => {res.send(response.data)});
});