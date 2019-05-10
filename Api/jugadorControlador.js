const mongoose = require('mongoose')
const Jugador = mongoose.model('jugador')

exports.getJugador = function (req, res){
    Jugador.find({}).exec(function (err, jugador){
        if(err){
            res.status(500).send({
                message: 'Ha ocurrido un error en el servidor',
                description: err
            })
        }else{
            if (jugador != ""){
                res.status(200).send(jugador)
            }else{
                res.status(200).send(console.log("No hay datos"))
            }
        }
    })
}

exports.createJugador = function (req, res) {
    const jugador = new Jugador(req.body)
    jugador.save(function (err, jugador) {
        if(err){
            res.status(500).send({
                message: 'Ha ocurrido un error en el servidor',
                description: err
            })
        }else{
            console.log("Jugador: ", jugador)
            res.status(200).send(jugador)
        }
    })
}

exports.updateJugador = function (req, res) {
    console.log(req.body)
    console.log(req.params.jugador_id)
    Jugador.findOneAndUpdate({ '_id': req.params.jugador_id }, req.body, { new: true },
        function (err, jugador) {
            if (err) throw err 
            else res.status(200).send(console.log("Actualizado correctamente"))
        })
}

exports.deleteJugador = function (req, res) {
    Jugador.deleteOne({'_id' : req.params.jugador_id}, function(err){
        if(err) throw err
        else res.status(200).send(console.log("Se borró correctamente"))
    })
}
