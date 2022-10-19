const express = require('express');
const path = require('path');


// Constants
const PORT = 8000;
const HOST = 'localhost';

// App
const app = express();
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
  console.log(path.join(__dirname, 'html/index.html'));
  res.sendFile(path.join(__dirname, 'html/index.html'));
});

app.listen(PORT, () => {
  console.log(`\nApplication started up at http://${HOST}:${PORT}`);
});
