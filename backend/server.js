const express = require('express');
const cors = require('cors');
const news = require('./news.js');
const path = require('path'); // Import the 'path' module
const personen = require('./personen.js');



const app = express();

app.use(cors({
  origin: 'http://localhost:3000' // Deine Frontend-Domain hier eintragen
}));

app.use('/images', express.static(path.join(__dirname, 'images')));

app.use('/news', news);
app.use('/personen', personen);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});