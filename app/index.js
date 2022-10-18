const express = require('express');
const path = require('path');


// Constants
const PORT = 8000;
const HOST = 'localhost';

// App
const app = express();
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(PORT, () => {
  console.log(`\nGilded Rose started up at http://localhost:${PORT}`);
});
