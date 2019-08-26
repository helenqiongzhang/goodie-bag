const router = require('express').Router();
const { Candy } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (error) {
    console.error('from [GET] /candies', error);
    next(error);
  }
});

router.patch('/:id', async (req, res, next) => {
  try {
    const candyId = req.params.id;
    await Candy.update(
      {
        quantity: req.body.quantity,
      },
      { where: { id: candyId } }
    );
    res.send();
  } catch (error) {
    next(error);
  }
});
/**
 * router.patch('/:id', (...) => {
 *  // take in an entire candy object (quantity, name, etc),
 *  // and update the candy with id === id to new candie details.
 * })
 *
 * router.patch('/:id/change-quantity', (...) => {
 *  // take in a quantity (number) argument,
 *  // and update the quantity of candy with id === id
 * })
 *
 * router.put('/:id', ) //
 */

router.get('/:id', async (req, res, next) => {
  try {
    const id = req.params.id;
    const candy = await Candy.findById(id);
    res.json(candy);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
