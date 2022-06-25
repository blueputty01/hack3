const express = require('express');
const cors = require('cors');

const app = express();

//Middleware
app.use(express.json());
app.use(cors());

//handle production
if (process.env.NODE_ENV === 'production') {
  //static folder
  app.use(express.static(__dirname + '/public/'));
  //handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`server started on port ${port}`));
