import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import CategoriaTable from './components/CategoriaTable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CategoriaForm from './pages/CategoriaForm';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Meu CRUD</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/categorias" element={<CategoriaTable />} />
          <Route path="/categorias/novo" element={<CategoriaForm />} />
          <Route path="*" element={<CategoriaTable />} /> {/* Redireciona para lista por padrão */}
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
