import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; // Importar el icono de carrito

function MyApp() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit">Tienda</Button>
          <Button color="inherit">Sobre</Button>
          <Button color="inherit">Contácto</Button>
          <Button color="inherit">
            <ShoppingCartIcon /> {/* Icono de carrito */}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MyApp;
