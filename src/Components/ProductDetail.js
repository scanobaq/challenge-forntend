import { makeStyles } from "@material-ui/core";
import { Box, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: 20,
    marginBottom: 20,
    width: "60%",
    padding: 30,
  },
  image: {
    width: 300,
    height: 400,
  },
  grid: {
    display: "flex",
    justifyContent: "center",
  },
  griddetail: {
    display: "flex",
    alignSelf: "center",
  },
}));

export const ProductDetail = () => {
  const styles = useStyles();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function getProduct() {
      const result = await fetch(`https://localhost:5001/api/Product/${id}`);
      const response = await result.json();
      console.log(response);
      setProduct(response);
    }
    getProduct();
  }, []);

  const { id } = useParams();
  return (
    <>
      <Box>
        <Grid container justifyContent="center">
          <Paper elevation={3} className={styles.paper}>
            <Grid container spacing={4}>
              <Grid item xs={6}>
                <Typography component="h1" variant="h6" noWrap>
                  {product.name}
                </Typography>
                <Typography component="h6" noWrap>
                  {product.price}
                </Typography>
                <Grid className={styles.grid}>
                  <img
                    key="image"
                    src={product.imageFullPath}
                    className={styles.image}
                  ></img>
                </Grid>
              </Grid>
              <Grid item xs={6} className={styles.griddetail}>
                <div>
                  <Typography component="h1" variant="h6" noWrap>
                    Descripción:
                  </Typography>
                  <div key="des">{product.description}</div>
                  <Typography component="h6" noWrap mt={5}>
                    {`Precio:$${product.price}`}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </>
  );
};
