import React, { useEffect, useState } from 'react';
import categoriaService from '../api/categoriaService';

const CategoriaTable = () => {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    categoriaService.getAll()
      .then(data => {
        console.log('Categorias carregadas:', data);
        setCategorias(data);
      })
      .catch(error => console.error('Erro ao buscar categorias:', error));
  }, []);

  return (
    <div>
      <h2>Lista de Categorias</h2>
      <ul>
        {categorias.map(categoria => (
          <li key={categoria.id}>{categoria.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriaTable;
