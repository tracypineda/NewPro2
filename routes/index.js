var raceController = require('../controllers').race;

module.exports = (app) => {
  app.get('/api', (req,res) => res.status(200).send({
    message: 'Welcome to the Race Registration API!',
  })
);

//** Start - Race Create routes for creating a new race record*/
app.post('/api/race',raceController.create);
//** End   - Race Create routes for creating a new race record*/
};