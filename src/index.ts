import express from 'express';
import { pageContent } from './pages/index';

// Constants
const PORT = 8080;
const HOST = 'localhost';

// App
const app = express();
app.use('/', express.static('dist'));

app.get('/', (req, res) => {
  res.write(pageContent);
});

app.listen(PORT, () => {
  console.log(`\nApplication started up at http://${HOST}:${PORT}`);
});
