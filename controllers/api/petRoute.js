const router = require('express').Router();
const { Pet } = require('../../models');
const withAuth = require('../../utils/auth');

//post a new pet
router.post('/', withAuth, async (req, res) => {
  try {
    const newPet = await Pet.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPet);
  } catch (err) {
    res.status(400).json(err);
  }
});

//delete an existing pet
router.delete('/:id', withAuth, async (req, res) => {
  console.log(`the id you passed is ${req.params.id}`)
  try {
    const petData = await Pet.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
      
    });
    console.log(petData)

    if (!petData) {
      res.status(404).json({ message: 'No pet found with this id!' });
      return;
    }

    res.status(200).json(petData);
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
