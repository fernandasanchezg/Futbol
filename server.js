const db = require('./API/conexion')
const app = require('./app')

db.then(() => {
    console.log('La conexión a MongoDB se ha realizado correctamente!!')
}).catch(err => console.log(err))


app.set('port', process.env.PORT || 3000)

const server = app.listen(app.get('port'), () => {
  console.log('El servidor está en:')
  console.log('http://localhost:' + server.address().port)
})
