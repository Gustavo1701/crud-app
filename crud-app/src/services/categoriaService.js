import api from './index';

const categoriaService = {
  getAll: async () => {
    const response = await api.get('/categorias');
    return response.data;
  },
  create: async (categoria) => {
    const response = await api.post('/categorias', categoria);
    return response.data;
  },
};

export default categoriaService;
