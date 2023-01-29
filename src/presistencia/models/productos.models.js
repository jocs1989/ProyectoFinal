import { Schema } from 'mongoose';

const opcion =
   {
     nombre: { type: String, required: true, minlength: 2, maxlength: 15 },
     descripcion: { type: String, required: true, maxlength: 300 },
     codigo: { type: Number, required: true, maxlength: 5, default: 1000 },
     url: { type: String, required: true, maxlength: 100 },
     precio: { type: Number, required: true, default: 100 },
     stock: { type: Number, required: true, default: 10 },
     timestamp: { type: Date, default: Date.now }
   }

const Collection = 'Productos'
const opcionSchema= new  Schema(opcion)

export { Collection, opcionSchema };