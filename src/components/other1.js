import * as React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { useSelector } from "react-redux";
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";

import { useState } from 'react';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
  </Box>
);

export default function BasicCard1({item}) {
    const { id } = useParams();
    const {products} = useSelector(state=>state.products);
    console.log(products)
   const findProduct = products.find((product) => product.id === parseInt(id));
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {findProduct.title}
        </Typography>
        <Typography variant="h5" component="div">
          {findProduct.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {findProduct.description}
        </Typography>
        <Typography variant="body2">
          {findProduct.trailer}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
      <Link to={`/cart`}>
      <Button size="small">GO BACK</Button>
      </Link>
      </CardActions>
    </Card>
  );
}