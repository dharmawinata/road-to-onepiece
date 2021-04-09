const {Pirate, Ship} = require('../models')

class PirateController {
    static readPirates(req,res) {
        Pirate.findAll({
            include: [
                Ship
            ]
        })
        .then(pirates => {
            res.send(pirates);
        })
        .catch(err => {
            res.send(err);
        })
    }

    static addPagePirate(req, res) {
       
    }

    static addPirate(req, res) {
        const {name, status, type, ShipId} = req.body
        Pirate.create({
            name, status, type, ShipId
        }).then(pirates => {
            res.send(pirates);
        }).catch(err => {
            res.send(err);
        })
    }

    static deletePirate(req, res) {
        const id = +req.params.id
        Pirate.destroy({
            where: {id}
        }).then(() => {
            res.send(`Id ${id} has been deleted`)
        }).catch(err => {
            res.send(err);
        })

    }
}


module.exports = PirateController;