import React from "react";
import { useEffect, useState } from "react";
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { SearchBar } from "./SearchBar";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  image: {
    width: 180,
    height: 230,
  },
  paper: {
    marginTop: 20,
    marginBottom: 20,
    width: "60%",
    padding: 30,
  },
  grid: {
    display: "flex",
    justifyContent: "end",
  },
}));

export const ProductList = () => {
  const [products, setProduct] = useState([]);
  const [productsBackup, setproductsBackup] = useState([]);
  const styles = useStyles();
  const [find, setFind] = useState("");

  useEffect(() => {
    async function getUsers() {
      const result = await fetch("https://localhost:5001/api/Product");
      const response = await result.json();
      console.log(response);
      setProduct(response);
      setproductsBackup(response);
    }
    getUsers();
  }, []);

  return (
    <>
      <SearchBar products={productsBackup} setProduct={setProduct} />
      {products && products.length > 0
        ? products.map((product) => (
            <Box>
              <Grid container justifyContent="center">
                <Paper elevation={3} className={styles.paper}>
                  <Grid container spacing={2}>
                    <Grid item xs={8}>
                      <Typography component="h1" variant="h6" noWrap>
                        {product.name}
                      </Typography>
                      <Typography component="h6" noWrap>
                        {product.price}
                      </Typography>
                    </Grid>
                    <Grid item xs={4} alignItems="end" className={styles.grid}>
                      <img
                        key="image"
                        src={product.imageFullPath}
                        className={styles.image}
                      ></img>
                    </Grid>
                    <Grid xs={12}>
                      <div key="des">{product.description}</div>
                    </Grid>
                    <Grid xs={12} mt={10}>
                      <Link to={`/productlist/${product.id}`}>Ver Detalle</Link>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Box>
          ))
        : null}
    </>
  );
};
