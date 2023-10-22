const express = require('express');
const router = express.Router();
const lowlineAI = require('lowline.ai');
const Pairing = require('../models/pairing');

// lowlineAI.init({ apiKey: 'YOUR_API_KEY' });

router.get('/search', async (req, res) => {
  const searchTerm = req.query.term;
  const pairings = await Pairing.findAll({
    where: {
      food: {
        [Op.like]: `%${searchTerm}%`,
      },
    },
  });

  res.json({ pairings });
});

router.post('/search', async (req, res) => {
  const searchTerm = req.body.term;
  const recommendedPairing = await searchPairings(searchTerm);

  res.json({ recommendedPairing });
});

const searchPairings = async (searchTerm) => {
  const foodList = ['steak', 'salmon', 'pasta', 'salad', 'cheese'];
  const wineList = ['cabernet sauvignon', 'pinot noir', 'chardonnay', 'sauvignon blanc', 'riesling'];

  const recommendedFood = await lowlineAI.recommendFromList({
    count: 1,
    search_term: searchTerm,
    search_items: foodList,
  });

  const recommendedWine = await lowlineAI.recommendFromList({
    count: 1,
    search_term: searchTerm,
    search_items: wineList,
  });

  const pairing = {
    food: recommendedFood.result[0],
    wine: recommendedWine.result[0],
  };

  return pairing;
};

module.exports = router;
