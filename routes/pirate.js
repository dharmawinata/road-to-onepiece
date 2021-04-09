const PirateRouter = require('express').Router();

const PirateController = require('../controllers/PirateController')

PirateRouter.get('/', (PirateController.readPirates));

PirateRouter.get('/add', PirateController.addPagePirate);
PirateRouter.post('/add', PirateController.addPirate);

PirateRouter.get('/delete/:id', PirateController.deletePirate)

module.exports = PirateRouter;