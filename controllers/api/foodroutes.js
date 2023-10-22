const router = require('express').Router();
const { Food } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try{
        const foodData = await Food.findAll();
    res.status(200).json(foodData);
    } catch (err) {
        res.status(500).json(err)
    }
});

router.get('/:id', async (req, res) => {
    try {
        const foodData = await Food.findByPk(req.params.food_id);

        if(!foodData) {
            res.status(404).json({ message: 'No meal found with that id.'});
            return;
        }
    } catch (err) {
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try{
        const foodData = await Food.create(req.body);
        res.status(200).json(foodData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.put('/:id', async (req, res) => {
    try{
        const foodData = await Food.update(req.body, {
            where: {
                id: req.params.food_id
            },
        });
        if (!foodData[0]){
            res.status(404).json({ message: 'No meal with this id was found.' });
            return;
        }
        res.status(201).json(foodData);
    } catch (err) {
        res.status(400).json(err)
    }
});

router.delete('/:id', async (req, res) => {
    try{
        const foodData = await Food.destroy({
            where: {
                id: req.params.food_id
            },
        });
        if(!foodData){
            res.status(404).json({ message: 'No meal was found with that id.' });
            return;
        }
        res.status(200).json(foodData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;