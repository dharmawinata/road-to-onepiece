const {Pirate, Ship} = require('../models')

class PirateController {
    static readPirates(req,res) {
        Pirate.findAll({
            include: [
                Ship
            ],
            order: [
                ['id', 'ASC']
            ]
        })
        .then(pirates => {
            res.render('pirate.ejs', {pirates});
        })
        .catch(err => {
            res.send(err);
        })
    }

    static addPagePirate(req, res) {
       res.render('addPirate.ejs')
    }

    static addPirate(req, res) {
        const {name, status, type, ShipId} = req.body
        Pirate.create({
            name, status, type, ShipId
        }).then(pirates => {
            res.redirect('/pirates');
        }).catch(err => {
            res.send(err);
        })
    }

    static deletePirate(req, res) {
        const id = +req.params.id
        Pirate.destroy({
            where: {id}
        }).then(() => {
            res.redirect('/pirates')
        }).catch(err => {
            res.send(err);
        })

    }
}


module.exports = PirateController;