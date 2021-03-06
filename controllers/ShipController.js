const {Ship} = require('../models')

class ShipController {
    static readShips(req,res) {
        Ship.findAll({
            order : [
                ['id', 'ASC']
            ]
        })
        .then(ships => {
            res.render('ship.ejs', {ships});
        })
        .catch(err => {
            res.send(err);
        })
    }

    static addPageShip(req, res) {
       res.render('addShip.ejs')
    }

    static addShip(req, res) {
        const {name, type, power} = req.body
        Ship.create({
            name, type, power
        }).then(ships => {
            res.redirect('/ships');
        }).catch(err => {
            res.send(err);
        })
    }

    static deleteShip(req, res) {
        const id = +req.params.id
        Ship.destroy({
            where: {id}
        }).then(() => {
            res.redirect('/ships')
        }).catch(err => {
            res.send(err);
        })

    }
}

module.exports = ShipController;