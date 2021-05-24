import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Image from "next/image";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import { red, green } from "@material-ui/core/colors";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    height: "auto",
    margin: "0px auto",
    borderRadius: " 0px 0px 3% 3% ",
    transition: "transform 0.15s ease-in-out",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  },
  button: {
    textTransform: "none",
    padding: "10px 50px",
    // color: "white"
  },
  buttonEnergy: {
    textTransform: "none",
    padding: "10px 50px",
    color: "white",
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[700],
    },
  },
  buttonApartement: {
    textTransform: "none",
    padding: "10px 50px",
    color: "white",
    backgroundColor: red[500],
    "&:hover": {
      backgroundColor: red[700],
    },
  },
  carousel: {
    "& .owl-stage-outer": {
      paddingBottom: 20,
    },
  },
  bonPlanTitle: {
    [theme.breakpoints.down("xl")]: {
      fontWeight: 600,
      opacity: 0.9,
    },
  },
  cardTitle: {
    fontSize: "1.4rem",
  },
}));

const options = {
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 3,
      nav: true,
    },
    1200: {
      items: 3,
      nav: true,
    },
  },
};

export default function BonPlan() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Container style={{ marginBottom: "8rem" }}>
      <Container maxWidth="xl">
        <Grid container justify="center">
          <Grid item xs={12} style={{ padding: " 6rem 0rem" }}>
            <Typography
              align="center"
              variant="h1"
              color="textPrimary"
              className={classes.bonPlanTitle}
            >
              BON PLANS
            </Typography>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="xl">
        <OwlCarousel
          {...options}
          items={3}
          center
          // dotsEach={true}
          className={`${classes.carousel} owl-theme`}
          autoplay={true}
          loop={true}
          startPosition={1}
          margin={50}
          stagePadding={40}
          slideBy={1}
          autoplayTimeou={3000}
          // autoplayHoverPause
          
          dots
          navText={[
            '<i class="fas fa-arrow-left" style="position: absolute; left: -2rem; bottom: 22rem; "></i>',
            '<i class="fas fa-arrow-right" style="position: absolute; right: -2rem; bottom: 22rem;"></i>',
          ]}
          // nav
          style={{ paddingBottom: 20 }}
        >
          <Card className={classes.root}>
            <Image
              src="/images/Group 9.png"
              height={270}
              width={300}
              priority={true}
            />
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography
                  align="center"
                  variant="h5"
                  component="h2"
                  className={classes.cardTitle}
                >
                  BON PLANS BANQUES
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species.
                </Typography>
              </Grid>
              <Grid item style={{ padding: "2.2rem" }}>
                <Button
                  variant="contained"
                  size="mediumm"
                  color="primary"
                  className={classes.button}
                >
                  En savoir plus
                </Button>
              </Grid>
            </Grid>
          </Card>

          <Card className={classes.root}>
            <Image
              src="/images/Group 11.png"
              height={270}
              width={300}
              priority={true}
            />
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography
                  align="center"
                  variant="h5"
                  component="h2"
                  className={classes.cardTitle}
                >
                  BON PLANS APARTEMENT
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species.
                </Typography>
              </Grid>
              <Grid item style={{ padding: "2.2rem" }}>
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.buttonApartement}
                >
                  En savoir plus
                </Button>
              </Grid>
            </Grid>
          </Card>

          <Card className={classes.root}>
            <Image
              src="/images/Group 13.png"
              height={270}
              width={300}
              priority={true}
            />
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography
                  align="center"
                  variant="h5"
                  component="h2"
                  className={classes.cardTitle}
                >
                  BON PLANS ENERGIES
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species.
                </Typography>
              </Grid>
              <Grid item style={{ padding: "2.2rem" }}>
                <Button variant="contained" className={classes.buttonEnergy}>
                  En savoir plus
                </Button>
              </Grid>
            </Grid>
          </Card>

          <Card className={classes.root}>
            <Image
              src="/images/Group 11.png"
              height={270}
              width={300}
              priority={true}
            />
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item>
                <Typography align="center" variant="h5">
                  BON PLANS APARTEMENT
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  variant="body2"
                  align="center"
                  color="textSecondary"
                  component="p"
                >
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species.
                </Typography>
              </Grid>
              <Grid item style={{ padding: "2.2rem" }}>
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.buttonApartement}
                >
                  En savoir plus
                </Button>
              </Grid>
            </Grid>
          </Card>
        </OwlCarousel>
      </Container>
    </Container>
  );
}
