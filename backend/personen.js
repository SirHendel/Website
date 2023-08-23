//news.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Niki Hendel',
      bildUrl: 'http://localhost:4000/images/NikiHendel.jpg',
      lebensabschnitt: 'Ne coole socke.',
    },
    {
      id: 2,
      name: 'Alex Stiwi',
      bildUrl: 'http://localhost:4000/images/AlexanderStiwi.jpg',
      lebensabschnitt: 'Montana black fan',
    },
    {
      id: 3,
      name: 'Patrick scheps',
      bildUrl: 'http://localhost:4000/images/PatrickSChepser.jpg',
      lebensabschnitt: 'Ist Klein',
    },
  ]); 
});

module.exports = router;