var Race = require('../models').Race;
module.exports = {
    create(req,res) {
return Race
  .create({
    name: req.body.name,
    distance: req.body.distance,
  })
  .then(race => req.status(201).send(race))
  .catch(error => res.status(400).send(error));
    }
};