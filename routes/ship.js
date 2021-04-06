const ShipRouter = require('express').Router();

const ShipController = require('../controllers/ShipController')

ShipRouter.get('/', ShipController.readShips);
ShipRouter.get('/ships', ShipController.readShips);
ShipRouter.post('/ships', ShipController.addShip);
ShipRouter.get('/delete/:id', ShipController.deleteShip)

module.exports = ShipRouter;