import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Layout from "components/layout/Layout";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { dummyData } from "./dummyData";
import CardBank from "./CardBank";

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `1em`,
    [theme.breakpoints.down("md")]: {
      marginBottom: "1em",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "0em",
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "0em",
    },
  },
  container: {
    position: "relative",
    backgroundImage: "url('/images/home23.jpg')",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    paddingTop: 80,
    height: 500,
    width: "100%",
    boxShadow: "0px 0px 0px 10000px rgba(33, 29, 29, 0.8) inset",
  },
  heroTitle: {
    color: theme.palette.common.white,
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: "3.5rem",
  },
}));

const HeroSectionBank = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Layout>
      <div className={classes.toolbarMargin} />
      {/* hero section */}
      <Container maxWidth="xl" className={classes.container}>
        <Container maxWidth="lg">
          <Fade duration={1000} delay={500} top>
            <Typography
              align="center"
              variant="h1"
              component="h1"
              className={classes.heroTitle}
            >
              BON PLAN BANQUE
            </Typography>
          </Fade>
        </Container>
      </Container>

      {/* bank card */}
      <Container
        maxWidth="xl"
        className="card-section"
        style={{ backgroundColor: "#FBFFFF", marginTop: "-14rem" }}
      >
        <Fade delay={500} duration={2000} bottom>
          <Container className="container" maxWidth="md">
            <Grid container justify="center" spacing={8} alignItems="center">
              {dummyData.map((card) => (
                <CardBank key={card.id} card={card} />
              ))}
            </Grid>
          </Container>
        </Fade>
      </Container>
    </Layout>
  );
};

export default HeroSectionBank;
