import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CategoriaForm = () => {
  const [nome, setNome] = useState('');
  const [codigo, setCodigo] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/categorias', { nome, codigo, descricao });
      alert('Categoria cadastrada com sucesso!');
      navigate('/categorias'); // Redireciona para a tabela
    } catch (error) {
      console.error('Erro ao cadastrar categoria:', error);
      alert('Erro ao cadastrar categoria.');
    }
  };

  return (
    <Container sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 3 }}>
        <Typography variant="h5" gutterBottom>
          Nova Categoria
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nome da Categoria"
            variant="outlined"
            fullWidth
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Código"
            variant="outlined"
            fullWidth
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Descrição"
            variant="outlined"
            fullWidth
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
            multiline
            rows={3}
            sx={{ marginBottom: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Cadastrar
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default CategoriaForm;
