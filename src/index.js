import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Grid from '@mui/material/Grid';
import Container2 from './container2';
import Container from './container';

const cards = [1, 2,3];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
            { card === 2 ? <Container2 /> : <Container/> }
            </Grid>))}
  </Grid>
);
