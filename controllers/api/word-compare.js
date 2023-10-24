// // const express = require('express');
// // const router = express.Router();
// // const lowlineAI = require('lowline.ai');
// // const Pairing = require('../../models');
// // const readline = require('readline');

// // const rl = readline.createInterface({
// //   input: process.stdin,
// //   output: process.stdout
// // });

// // router.get('/ai-search', async (req, res) => {
// //   const searchTerm = await getUserInput('Enter a search term: ');
// //   const pairings = await Pairing.findAll({
// //     where: {
// //       food: {
// //         [Op.like]: `%${searchTerm}%`,
// //       },
// //     },
// //   });
// //   res.json({ pairings });
// // });

// // router.post('/ai-search', async (req, res) => {
// //   const searchTerm = await getUserInput('Enter a search term: ');
// //   const recommendedPairing = await searchPairings(searchTerm);
// //   res.json({ recommendedPairing });
// // });

// // const getUserInput = (question) => {
// //   return new Promise((resolve) => {
// //     rl.question(question, (answer) => {
// //       resolve(answer);
// //     });
// //   });
// // };

// const searchPairings = async (searchTerm) => {
//   const foodList = ['steak', 'salmon', 'pasta', 'salad', 'cheese'];
//   const wineList = ['cabernet sauvignon', 'pinot noir', 'chardonnay', 'sauvignon blanc', 'riesling'];
//   const recommendedFood = await lowlineAI.recommendFromList({
//     count: 1,
//     search_term: searchTerm,
//     search_items: foodList,
//   });

//   const recommendedWine = await lowlineAI.recommendFromList({
//     count: 1,
//     search_term: searchTerm,
//     search_items: wineList,
//   });

//   const pairing = {
//     food: recommendedFood.result[0],
//     wine: recommendedWine.result[0],
//   };

//   return pairing;
// };

// module.exports = router;

const word = require('word-compare');

const winePairings = {
  "Gallo Family Vineyards Pinot Noir": ["Chicken", "Turkey", "Salmon"],
  "2019 Zorzal Eggo Franco Cabernet Franc": ["Beef", "Venison", "Lamb", "Pork", "Bison", "Lamb Chops", "Venison Stew"],
  "2019 Chateau Ollieux Romanis Corbieres-Boutenac Atal Sia": ["Lamb", "Game Birds", "Root Vegetables", "Pork", "Lamb Chops", "Venison Stew"],
  "2022 Chateau La Gaffeliere Merlot": ["Beef", "Venison", "Boar", "Cheddar", "Pork", "Bison", "Lamb Chops", "Venison Stew"],
  "2020 Valli Bannockburn Vineyard Pinot Noir": ["Duck", "Goose", "Quail", "Gruyere", "Pork", "Lamb Chops"]
};

const word = require('word-compare');

const winePairings = {
  "Gallo Family Vineyards Pinot Noir": ["Chicken", "Turkey", "Salmon"],
  "2019 Zorzal Eggo Franco Cabernet Franc": ["Beef", "Venison", "Lamb", "Pork", "Bison", "Lamb Chops", "Venison Stew"],
  "2019 Chateau Ollieux Romanis Corbieres-Boutenac Atal Sia": ["Lamb", "Game Birds", "Root Vegetables", "Pork", "Lamb Chops", "Venison Stew"],
  "2022 Chateau La Gaffeliere Merlot": ["Beef", "Venison", "Boar", "Cheddar", "Pork", "Bison", "Lamb Chops", "Venison Stew"],
  "2020 Valli Bannockburn Vineyard Pinot Noir": ["Duck", "Goose", "Quail", "Gruyere", "Pork", "Lamb Chops"],
  "2016 Cantina Terlano-Kellerei Terlan 'Vorberg' Riserva Pinot Bianco Alto Adige": ["White Fish", "Shellfish", "Salads"],
  "2018 Domaine Zind-Humbrecht Riesling Brand": ["Meaty and Oily Fish", "Spicy Vegetables", "Asian Cuisine", "Blue Cheese", "Brie", " Goat", "Spicy Seafood", "Spicy Asian Noodles"],
  "Moet & Chandon Grand Vintage Brut Champagne Blend": ["Shellfish", "Goat Cheese", "Feta", " SPicy Seafood", "Chocolate and Caramel", "Baked Goods", "Cakes"],
  "The Sadie Family Die Ouwingerdreeks 'Skerpioen' White Blend": ["Goat Cheese", "Feta", "Salads", "Camembert", "Spicy Seafood"],
  "Azienda Agricola Serragghia Bianco Zibibbo Secco Muscat of Alexandria": ["Hard Cheese", "Manchego", "Spicy pasta", "Spicy Asian Noodles", "Fruit-based Desserts"]
};

const foodPairings = {};
for (const wine in winePairings) {
  for (const food of winePairings[wine]) {
    if (!foodPairings[food]) {
      foodPairings[food] = [];
    }
    foodPairings[food].push(wine);
  }
}

function findSimilarWines(foodName) {
  const foodList = [];
  for (const wine in winePairings) {
    foodList.push(...winePairings[wine]);
  }

  const similarWines = word.getClosests(foodName, foodList, 4);
  const matchingWines = [];
  for (const similarFood of similarWines) {
    for (const wine in winePairings) {
      if (winePairings[wine].includes(similarFood)) {
        matchingWines.push(wine);
      }
    }
  }
  return matchingWines;
}

function findSimilarFoods(wineName) {
  const wineList = Object.keys(winePairings);
  const similarFoods = word.getClosests(wineName, wineList, 4);
  const matchingFoods = [];
  for (const similarWine of similarFoods) {
    if (winePairings[similarWine]) {
      matchingFoods.push(...winePairings[similarWine]);
    }
  }
  return matchingFoods;
}


for (const food in foodPairings) {
  const similarWines = findSimilarWines(food);
  const constName = `similarWinesFor${food.charAt(0).toUpperCase() + food.slice(1)}`;
  console.log(`const ${constName} = ${JSON.stringify(similarWines)}`);
}

for (const wine in winePairings) {
  const similarFoods = findSimilarFoods(wine);
  const constName = `similarFoodsFor${wine.replace(/ /g, '')}`;
  console.log(`const ${constName} = ${JSON.stringify(similarFoods)}`);
}
