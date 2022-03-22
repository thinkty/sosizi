const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 9000;
const publicPath = path.join(__dirname, '..', '/dist');
const imagePath = path.join(__dirname, '..', '/images');
const iconPath = path.join(__dirname, '..', '/icons');
const pointsPath = path.join(__dirname, '/points.json');

app.use(express.static(publicPath));

// Main react application
app.get('/', (req, res) => {
  console.log(req.params);
  res.sendFile(path.join(publicPath, 'index.html'))
});

// Icons
app.get('/icons/:picId', (req, res) => {
  const picId = req.params.picId;
  console.log('Requesting icon: ', picId);

  res.sendFile(path.join(iconPath, picId));
});

// Images
app.get('/images/:picId', (req, res) => {
  const picId = req.params.picId;
  console.log('Requesting pic: ', picId);

  res.sendFile(path.join(imagePath, picId));
});

// Delivery Points
app.get('/points', (req, res) => {
  console.log('Requesting delivery points...');

  res.header("Content-Type",'application/json');
  res.sendFile(pointsPath);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});