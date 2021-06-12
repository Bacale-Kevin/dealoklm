import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Layout from "components/layout/Layout";
import Fade from "react-reveal/Fade";
import Image from "next/image";
import { dummyData } from "./dummyData";
import CardBanks from "./CardBanks";

import dynamic from "next/dynamic";

const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import CarouselSection from 'components/bon-plan-bank/CarouselSection';
const options = {
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    768: {
      items: 2,
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
  carousel: {
    "& .owl-stage-outer": {
      paddingBottom: 20,
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

      <CardBanks />
      {/* <CarouselSection /> */}
      {/* <MultiCarousel /> */}

      {/* bank card */}
      {/* <OwlCarousel
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
      autoplayTimeout={3000}
      autoplayHoverPause
      dots
      navText={[
        '<i class="fas fa-arrow-left" style="position: absolute; left: -2rem; bottom: 22rem; "></i>',
        '<i class="fas fa-arrow-right" style="position: absolute; right: -2rem; bottom: 22rem;"></i>',
      ]}
      // nav
      style={{ paddingBottom: 20 }}
    > */}

      {/* <Container
        maxWidth="xl"
        className="card-section"
        style={{ backgroundColor: "#FBFFFF", marginTop: "-14rem" }}
      >
        <Fade delay={500} duration={2000} bottom>
          <Container className="container" maxWidth="md">
            <Grid container justify="center" spacing={8} alignItems="center">
              {dummyData.map((card) => (
                <CardBanks key={card.id} card={card} />
              ))}
              <CardBanks />
            </Grid>
          </Container>
        </Fade>
      </Container> */}
      {/* </OwlCarousel> */}
    </Layout>

  );
};

export default HeroSectionBank;
