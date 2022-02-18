const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const publicPath = path.join(__dirname, '..', '/dist');
const imagePath = path.join(__dirname, '..', '/images');

app.use(express.static(publicPath));

// Main react application
app.get('/', (req, res) => {
  console.log(req.params);
  res.sendFile(path.join(publicPath, 'index.html'))
});

// Images
app.get('/images/:picId', (req, res) => {
  const picId = req.params.picId;
  console.log('Requesting pic: ', picId);

  res.sendFile(path.join(imagePath, picId));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});