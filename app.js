const mongoose = require('mongoose')
const url_BD = 'mongodb://localhost:27017/abarrotes'

mongoose.connect(url_BD)
.then(( ) => {
    console.log("jala la conexion")
})
.catch((error) => {
    console.log("no jalo")
})

const esquema_abarrotes = new mongoose.Schema(
    {
        name: {
        type:String
    },
    precio: {
        type:String
    },
    cantidad: {
        type:Number
    },
    marca: {
        type:String
    },
    id_producto: {
        type:Number
    },
    caducidad: {
        type:String
    },
    mayoreo_menudeo: {
        type:String
    },
})

const modelo_abarrotes = new mongoose.model(
    "tabla de datos personales", esquema_abarrotes
)

modelo_abarrotes.create({
    name:"frijoles",
    precio: "$30",
    cantidad: "2",
    marca: "La costeña",
    id_producto: "12345",
    caducidad: "28 de julio del 2024",
    mayoreo_menudeo: "menudeo"
})