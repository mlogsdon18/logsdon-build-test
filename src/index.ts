import express from 'express';
import path from 'path';

// Constants
const PORT = 8000;
const HOST = 'localhost';

// App
const app = express();
app.use(express.static(path.join(__dirname, 'app')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\nApplication started up at http://${HOST}:${PORT}`);
});
