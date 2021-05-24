import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Home from "components/home/Home";
import Image from "next/image"

const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: "100%",
    height: "auto",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="dealOklm"
      description="This is a Template using Next.js and Material-UI with Header and Footer."
    >
     <Home />
     
    </Layout>
  );
};

export default HomePage;
