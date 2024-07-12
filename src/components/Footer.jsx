import React from 'react';
import { Box, Container, Grid, Typography, IconButton, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: '#f5f5f5', mt: 'auto', py: 3 }}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12}>
            <Typography variant="body2" color="textSecondary" align="center">
              Copyright &copy; 2020
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              component={Link}
              href="https://github.com/andrewmccormick"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              component={Link}
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

