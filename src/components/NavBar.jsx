import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
};

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Link color="inherit" onClick={() => scrollToSection('scene')}>Tienda</Link>
          <Link color="inherit" onClick={() => scrollToSection('products')}>Sobre</Link>
          <Link color="inherit" onClick={() => scrollToSection('contacto')}>Contacto</Link>
          
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
