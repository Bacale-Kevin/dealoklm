import React from "react";
import Image from "next/image";

import { Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeQuoiSagitIl from "./DeQuoiSagitIl";
import { Fade } from "react-reveal";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const galaxyS5 = 360;
const iphone5 = 320;
const pixel2 = 411;
const iphone678 = 375;
const galaxyFold = 280;

const options = {
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 3,
      dotsEach: 1,
      nav: true,
    },
    1200: {
      items: 3,
      nav: true,
    },
  },
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    paddingBottom: "4rem",
    backgroundImage:
      "url('https://image.freepik.com/free-vector/abstract-green-geometric-background_52683-29226.jpg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    height: "auto",
    width: "100%",
  },
  DeQuoiSagitIl: {
    position: "relative",
    top: "-100px",
    [theme.breakpoints.only("xs")]: {
      position: "absolute",
      right: "0px",
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      right: "0px",
    },
  },
  IlsNousOnFaitConfianceContainer: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "40rem",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "55rem",
    },
  },
  carousel: {
    marginTop: "5rem",
    [theme.breakpoints.down("xs")]: {
      // marginTop: 0,
    },
  },
  name: {
    fontWeight: "bold",
    opacity: 0.9,
    padding: "0.5rem",
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "-10rem",
    },
  },
  fillueil: {
    opacity: 0.8,
    padding: "0.5rem",
    color: theme.palette.common.white,
    fontWeight: 600,

    [theme.breakpoints.down("sm")]: {
      marginTop: "5rem",
    },
    [theme.breakpoints.down("xs")]: {
      // paddingTop: "0rem",
      marginTop: 0,
    },
    "@media screen and (max-width: 717px)": {
      marginTop: "8rem", //
    },
    "@media screen and (max-width: 614px)": {
      marginTop: "12rem", //
    },
    "@media screen and (max-width: 599px)": {
      marginTop: "-2rem", //pixel2
    },
    "@media screen and (max-width: 540px)": {
      marginTop: "2rem", //pixel2
    },
    "@media screen and (max-width: 411px)": {
      marginTop: "4rem", //pixel2
    },
    "@media screen and (max-width: 375px)": {
      marginTop: "8rem", // iphone678
    },
    "@media screen and (max-width: 360px)": {
      marginTop: "6rem", // galaxy5
    },
    "@media screen and (max-width: 320px)": {
      marginTop: "12rem", // iphone5
    },
    "@media screen and (max-width: 280px)": {
      marginTop: "15rem", // galaxy fold
    },
  },
  description: {
    opacity: 0.8,
    fontSize: 12.5,
    lineHeight: 1.5,
  },
  headingSubtitle: {
    padding: "2rem",
  },
  fillueil2: {
    [theme.breakpoints.down("xs")]: {
      paddingBottom: "8px",
    },
  },
  imageContainer: {
    [theme.breakpoints.down("xs")]: {
      // marginTop: "8rem",
    },
  },
}));

const Confiance = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="xl" className={classes.container}>
        <Grid container justify="center" className={classes.DeQuoiSagitIl}>
          <Fade bottom duration={1500}>
            <DeQuoiSagitIl />
          </Fade>
        </Grid>
        <Grid
          container
          direction="column"
          alignItems="center"
          //   justify="flex-end"
        >
          <Grid
            item
            xs={12}
            className={classes.IlsNousOnFaitConfianceContainer}
          >
            <Typography
              variant="h1"
              align="center"
              color="secondary"
              className={classes.fillueil}
            >
              ILS NOUS ONT FAIT CONFIANCE
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} lg={6} className={classes.headingSubtitle}>
            <Typography variant="body2" align="center" color="secondary">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptates reiciendis non amet, Voluptates reiciendis non amet,
              Voluptates reiciendis non amet,
            </Typography>
          </Grid>
        </Grid>
        <OwlCarousel
          {...options}
          className={`${classes.carousel} owl-theme`}
          autoplay={true}
          loop={true}
          margin={50}
          stagePadding={40}
          slideBy={1}
          rewind={false}
          dots
          center
          navText={[
            '<i class="fas fa-arrow-left" style="position: absolute; left: 1rem; bottom: 13rem; color: gray "></i>',
            '<i class="fas fa-arrow-right" style="position: absolute; right: 1rem; bottom: 13rem; color: gray "></i>',
          ]}
        >
          <Container maxWidth="xs">
            <Grid
              container
              direction="column"
              alignItems="center"
              component="span"
            >
              <Grid item className={classes.imageContainer}>
                <Image
                  priority={true}
                  src="/images/smile.jpg"
                  width={100}
                  height={100}
                  className="avatar"
                />
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body1"
                  className={classes.name}
                >
                  John Doe
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body1"
                  className={classes.fillueil2}
                >
                  Filluel de Bouseroma
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body2"
                  className={classes.description}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam odit officiis nostrum rem cumque iste laudantium quod
                  recusandae culpa aliquam magni quisquam, non ipsam eaque?
                  Cumque mollitia voluptate repellat libero?
                </Typography>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="xs">
            <Grid
              container
              direction="column"
              alignItems="center"
              component="span"
            >
              <Grid item className={classes.imageContainer}>
                <Image
                  priority={true}
                  src="/images/smile.jpg"
                  width={100}
                  height={100}
                  className="avatar"
                />
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body1"
                  className={classes.name}
                >
                  John Doe
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body1"
                  className={classes.fillueil}
                >
                  Filluel de Bouseroma
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body2"
                  className={classes.description}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam odit officiis nostrum rem cumque iste laudantium quod
                  recusandae culpa aliquam magni quisquam, non ipsam eaque?
                  Cumque mollitia voluptate repellat libero?
                </Typography>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="xs">
            <Grid
              container
              direction="column"
              alignItems="center"
              component="span"
            >
              <Grid item className={classes.imageContainer}>
                <Image
                  priority={true}
                  src="/images/smile.jpg"
                  width={100}
                  height={100}
                  className="avatar"
                />
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body1"
                  className={classes.name}
                >
                  John Doe
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body1"
                  className={classes.fillueil}
                >
                  Filluel de Bouseroma
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body2"
                  className={classes.description}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam odit officiis nostrum rem cumque iste laudantium quod
                  recusandae culpa aliquam magni quisquam, non ipsam eaque?
                  Cumque mollitia voluptate repellat libero?
                </Typography>
              </Grid>
            </Grid>
          </Container>

          <Container maxWidth="xs">
            <Grid
              container
              direction="column"
              alignItems="center"
              component="span"
            >
              <Grid item className={classes.imageContainer}>
                <Image
                  priority={true}
                  src="/images/smile.jpg"
                  width={100}
                  height={100}
                  className="avatar"
                />
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body1"
                  className={classes.name}
                >
                  John Doe
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body1"
                  className={classes.fillueil}
                >
                  Filluel de Bouseroma
                </Typography>
              </Grid>
              <Grid item xs={10}>
                <Typography
                  align="center"
                  color="secondary"
                  variant="body2"
                  className={classes.description}
                >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Totam odit officiis nostrum rem cumque iste laudantium quod
                  recusandae culpa aliquam magni quisquam, non ipsam eaque?
                  Cumque mollitia voluptate repellat libero?
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </OwlCarousel>
      </Container>
    </>
  );
};

export default Confiance;
