import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Mi Aplicación
        </Typography>
        <Button color="inherit">Tablas</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
