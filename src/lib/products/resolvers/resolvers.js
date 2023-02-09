import Mocks from '../../../utils/mocks/productos.mocks.js';

const prodctos = new Mocks();


export const resolvers = {
  Query :{
    getAllProdcts: async () => {
      return await prodctos.getAll();
    },
  }
};
