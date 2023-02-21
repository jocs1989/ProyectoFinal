import { Schema } from 'mongoose';

const opcion =
   {
    timestamp: { type: Date, default: Date.now },
    idUsuario: Schema.Types.ObjectId,
    idCarrito: Schema.Types.ObjectId,
   }

const Collection = 'Ordenes'
const opcionSchema= new Schema(opcion)

export { Collection, opcionSchema };