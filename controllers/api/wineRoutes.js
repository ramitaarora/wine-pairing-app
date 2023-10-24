const router = require('express').Router();
const { Wine } = require('../../models');

// GET all Wines  /api/wine
router.get('/', async (req, res) => {
  try {
    const wineData = await Wine.findAll();
    res.status(200).json(wineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET white or red wines
router.get('/white', async (req, res) => {
  try {
    const wineData = await Wine.findAll({where: {"wine_white": true}})
      // console.log(wineData);
      res.json(wineData);
  } catch (err) {
    res.status(500).json(err);
  }
})

router.get('/red', async (req, res) => {
  try {
    const wineData = await Wine.findAll({where: {"wine_red": true}})
      // console.log(wineData);
      res.json(wineData);
  } catch (err) {
    res.status(500).json(err);
  }
})


// GET a single Wine  /api/wine/:id
router.get('/:id', async (req, res) => {
  try {
    const wineData = await Wine.findByPk(req.params.id)

    if (!wineData) {
      res.status(404).json({ message: 'No wine found with this id!' });
      return;
    }

    res.status(200).json(wineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a Wine
router.post('/', async (req, res) => {
  try {
    const wineData = await Wine.create(req.body);
    res.status(200).json(wineData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a Wine
router.delete('/:id', async (req, res) => {
  try {
    const wineData = await Wine.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!wineData) {
      res.status(404).json({ message: 'No wine found with this id!' });
      return;
    }

    res.status(200).json(wineData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;