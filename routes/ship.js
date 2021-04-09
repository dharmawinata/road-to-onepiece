const ShipRouter = require('express').Router();

const ShipController = require('../controllers/ShipController')

ShipRouter.get('/', (ShipController.readShips));

ShipRouter.get('/add', ShipController.addPageShip);
ShipRouter.post('/add', ShipController.addShip);

ShipRouter.get('/delete/:id', ShipController.deleteShip)

module.exports = ShipRouter;