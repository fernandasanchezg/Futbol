const mongoose = require('mongoose')
const Equipo = mongoose.model('equipo')

exports.getEquipo = function (req, res){
    Equipo.find({}).exec(function (err, equipo){
        if(err){
            res.status(500).send({
                message: 'Ha ocurrido un error en el servidor',
                description: err
            })
        }else{
            if (equipo != ""){
                res.status(200).send(equipo)
            }else{
                res.status(200).send(console.log("No hay datos"))
            }
        }
    })
}

exports.createEquipo = function (req, res) {
    const equipo = new Equipo(req.body)
    equipo.save(function (err, equipo) {
        if(err){
            res.status(500).send({
                message: 'Ha ocurrido un error en el servidor',
                description: err
            })
        }else{
            console.log("Equipo: ", equipo)
            res.status(200).send(equipo)
        }
    })
}

exports.updateEquipo = function (req, res) {
    console.log(req.body)
    console.log(req.params.equipo_id)
    Equipo.findOneAndUpdate({ '_id': req.params.equipo_id }, req.body, { new: true },
        function (err, equipo) {
            if (err) throw err 
            else res.status(200).send(console.log("Actualizado correctamente"))
        })
}

exports.deleteEquipo = function (req, res) {
    Equipo.deleteOne({'_id' : req.params.equipo_id}, function(err){
        if(err) throw err
        else res.status(200).send(console.log("Se borró correctamente"))
    })
}

exports.getLigaId = function(req,res) {
    Equipo.find({'equipo.liga_id': req.param.liga_id}).exec(function(err,data) {
        if(err) throw err
        else res.send(data)
            
        })
}
  
  
 

