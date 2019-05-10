const mongoose = require('mongoose')
const Liga = mongoose.model('liga')

exports.getLiga = function (req, res){
    Liga.find({}).exec(function (err, liga){
        if(err){
            res.status(500).send({
                message: 'Ha ocurrido un error en el servidor',
                description: err
            })
        }else{
            if (liga != ""){
                res.status(200).send(liga)
            }else{
                res.status(200).send(console.log("No hay datos"))
            }
        }
    })
}

exports.createLiga = function (req, res) {
    const liga = new Liga(req.body)
    liga.save(function (err, liga) {
        if(err){
            res.status(500).send({
                message: 'Ha ocurrido un error en el servidor',
                description: err
            })
        }else{
            console.log("Liga: ", liga)
            res.status(200).send(liga)
        }
    })
}

exports.updateLiga = function (req, res) {
    console.log(req.body)
    console.log(req.params.liga_id)
    Liga.findOneAndUpdate({ '_id': req.params.liga_id }, req.body, { new: true },
        function (err, liga) {
            if (err) throw err 
            else res.status(200).send(console.log("Actualizado correctamente"))
        })
}

exports.deleteLiga = function (req, res) {
    Liga.deleteOne({'_id' : req.params.liga_id}, function(err){
        if(err) throw err
        else res.status(200).send(console.log("Se borró correctamente"))
    })
}