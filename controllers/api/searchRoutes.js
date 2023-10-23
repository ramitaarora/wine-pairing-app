<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const lowlineAI = require('lowline.ai');
const Pairing = require('../models/pairing');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

router.get('/search', async (req, res) => {
  const searchTerm = await getUserInput('Enter a search term: ');
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
  const searchTerm = await getUserInput('Enter a search term: ');
  const recommendedPairing = await searchPairings(searchTerm);

  res.json({ recommendedPairing });
});

const getUserInput = (question) => {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
};

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
=======
const router = require('express').Router();
const { Food, Wine, Pairing, User } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/search', (req, res) => {
    res.render('searchResults');
});

module.exports = router;
>>>>>>> 6e7fce2f18762138d76851c5827ffd7565aa4fe2
