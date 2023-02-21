import { Schema } from 'mongoose';

const opcion = {
  carrito: [
    {
      idArticulo: Schema.Types.ObjectId,
      nombre: { type: String, required: true, minlength: 2, maxlength: 100 },
      descripcion: { type: String, required: true, maxlength: 300 },
      codigo: { type: String, required: true, minlength: 2, maxlength: 20 },
      url: { type: String, required: true, maxlength: 300 },
      precio: { type: Number, required: true, default: 100 },
      stock: { type: Number, required: true, default: 10 },
      categoria: { type: String, required: true, maxlength: 300 },
      timestamp: { type: Date, default: Date.now },
    },
  ],
  total: { type: Number, required: true, default: 0 },
  direccion: [
    {
      idDireccion: Schema.Types.ObjectId,
      nombre: { type: String, required: true, minlength: 2, maxlength: 100  },
      apellido: { type: String, required: true, minlength: 2, maxlength: 100 },
      email: { type: String, required: true, minlength: 2, maxlength: 100 },
      phone: { type: String, required: true, minlength: 2, maxlength: 15 },
      pais: { type: String, required: true, minlength: 2, maxlength: 20 },
      ciudad: { type: String, required: true, minlength: 2, maxlength: 20 },
      estado: { type: String, required: true, minlength: 2, maxlength: 20 },
      cp: { type: String, required: true, minlength: 2, maxlength: 20 },
      direccion: { type: String, required: true, minlength: 2, maxlength: 20 },
    },
  ],
};

const Collection = "Carritos";
const opcionSchema = new Schema(opcion);

export { Collection, opcionSchema };
