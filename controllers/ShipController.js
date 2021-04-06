const {Ship} = require('../models')

class ShipController {
    static readShips(req,res) {
        Ship.findAll({})
        .then(ships => {
            res.send(ships);
        })
        .catch(err => {
            res.send(err);
        })
    }

    static addShip(req, res) {
        const {name, type, power} = req.body
        Ship.create({
            name, type, power
        }).then(ships => {
            res.send(ships);
        }).catch(err => {
            res.send(err);
        })
    }

    static deleteShip(req, res) {
        const id = +req.params.id
        Ship.destroy({
            where: {id}
        }).then(() => {
            res.send(`Id ${id} has been deleted`)
        }).catch(err => {
            res.send(err);
        })

    }
}

module.exports = ShipController;