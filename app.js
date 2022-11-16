const { default: mongoose } = require('mongoose');
const moongose = require('mongoose'); // se requiere el modulo mongoose

const url = 'mongodb://localhost:27017/base_pruebas'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    family:4
    
})
.then (  ()=> console.log('Conectado a la bdd') )
.catch( (e)=> console.log('El error de conexión es: ' + e) )

const personaSchema = moongose.Schema({
    name:String,
    phone:Number,
    email:String
})

const PersonaModel = mongoose.model('personas', personaSchema)

const mostrar = async ()=> {
    const personas = await PersonaModel.find()
    console.log(personas)
}

mostrar()