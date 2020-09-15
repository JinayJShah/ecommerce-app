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
import { makeStyles } from '@material-ui/core/styles';

const PRODUCT_ITEMS_LIMIT = 10;
const useStyles = makeStyles({
  media: {
    height: 150,
  },
  item: {
    fontSize: '0.8rem',
  },
});

const ProductCard = () => {
  const { productlist, setSelectedProducts, selectedProducts } = useContext(AppContext);
  const classes = useStyles();

  const addToCart = (productid) => {
    setSelectedProducts(selectedProducts.concat(productid));
  };

  const removeFromCart = (productList, productid) => {
    const index = productList.findIndex((productId) => productId === productid);
    productList.splice(index, 1);
    setSelectedProducts([...productList]);
  };

  // find unique product
  const getSelectedProductIdLength = (productList, id) => {
    const productIds = productList.filter((tempProduct) => tempProduct === id);
    return productIds.length;
  };

  return (
    <Grid alignItems='center' direction='row' ali container>
      {productlist.slice(0, PRODUCT_ITEMS_LIMIT).map((product) => (
        <Box justify='center' width={0.3} m={1} p={1} key={product.productId}>
          <Card>
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
              </CardContent>
            </CardActionArea>
            <CardActions>
              {!selectedProducts.includes(product.productId) && (
                <Button
                  onClick={() => setSelectedProducts(selectedProducts.concat(product.productId))}
                  size='small'
                  color='primary'
                >
                  Add
                </Button>
              )}
              {selectedProducts.includes(product.productId) && (
                <>
                  <Button
                    onClick={() => {
                      removeFromCart(selectedProducts, product.productId);
                    }}
                    size='small'
                    color='primary'
                  >
                    -
                  </Button>
                  <p>{getSelectedProductIdLength(selectedProducts, product.productId)}</p>
                  <Button
                    onClick={() => {
                      addToCart(product.productId);
                    }}
                    size='small'
                    color='primary'
                  >
                    +
                  </Button>
                </>
              )}
            </CardActions>
          </Card>
        </Box>
      ))}
    </Grid>
  );
};

export default ProductCard;
