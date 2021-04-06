// const {Router} = require(express);
const router = require('express').Router();

const ShipRoutes = require('./ship')
// const PirateRoutes = require('./pirate')

router.use('/', ShipRoutes)
router.use('/ships', ShipRoutes)
// router.use('/pirates', PirateRoutes)

module.exports = router