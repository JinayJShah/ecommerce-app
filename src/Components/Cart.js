import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  CardActions,
  Button,
  Box,
  Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles({
  heading: {
    textAlign: 'center',
  },
  media: {
    height: 150,
  },
  item: {
    fontSize: '0.8rem',
  },
});
const Cart = (props) => {
  const classes = useStyles();

  const { productlist, selectedProducts, setSelectedProducts } = useContext(AppContext);
  const selectedUniqueItems = productlist.filter((product) => selectedProducts.includes(product.productId));
  const removeItem = (productId) => {
    const filteredList = selectedProducts.filter((p) => p !== productId);
    setSelectedProducts([...filteredList]);
  };
  return (
    <>
      <h2 className={classes.heading}>Welcome to Cart</h2>
      {!selectedUniqueItems.length && <p className={classes.heading}>Your cart is empty</p>}
      <Grid container spacing={2}>
        {selectedUniqueItems.map((product) => (
          <Box justify='center' width={0.2} m={1} p={1} key={product.productId}>
            <Card className={classes.root}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTFReldDjXGycfaS7eXkohLz-tjbGyUBXfVKg&usqp=CAUg'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='h2' className={classes.item}>
                    {product.item}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    price : {product.price}
                  </Typography>
                  <Typography variant='body2' color='textSecondary' component='p'>
                    Total Qty : {selectedProducts.filter((p) => product.productId === p).length}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button onClick={() => removeItem(product.productId)} size='small' color='primary'>
                  Remove
                </Button>
              </CardActions>
            </Card>
          </Box>
        ))}
      </Grid>
    </>
  );
};

export default Cart;
