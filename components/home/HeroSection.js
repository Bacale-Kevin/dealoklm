import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Image from "next/image";
import { Fade } from "react-reveal";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {
  Button,
  Grid,
  Hidden,
  Typography,
  useMediaQuery,
} from "@material-ui/core";

const pixel2 = 411;
const galaxyFold = 280;
const iphone678 = 375;

const useStyles = makeStyles((theme) => ({
  heroSectionDescriptionContainer: {
    position: "absolute",
    zIndex: 1,
    top: "13rem",
    left: "8rem",

    [theme.breakpoints.only("xs")]: {
      top: "-2rem",
      left: "0rem",
      [`@media (min-width: ${pixel2}px)`]: {
        top: "0.5rem",
      },
      [`@media (min-width: ${iphone678}px)`]: {
        top: "0.5rem",
      },
    },
    [theme.breakpoints.only("sm")]: {
      top: "-5rem",
      left: "0rem",
    },
    [theme.breakpoints.only("md")]: {
      top: "8rem",
      left: "6rem",
    },
    [theme.breakpoints.only("xl")]: {
      left: "44rem",
    },
  },
  heroSectionDescription: {
    [theme.breakpoints.only("xs")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "7rem 0px",
    },
    [theme.breakpoints.only("sm")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "14rem 0px",
    },
    [theme.breakpoints.only("xl")]: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "14rem 0px",
    },
  },
  image: {
    zIndex: 0,
    // height: "100vh",
    [theme.breakpoints.down("sm")]: {},
  },
  titleHeroSection: {
    [theme.breakpoints.only("xs")]: {
      textAlign: "center",
      fontSize: "1.5rem",
      [`@media (min-width: ${galaxyFold}px)`]: {
        fontSize: "1.2rem",
      },
      [`@media (min-width: ${pixel2}px)`]: {
        fontSize: "1.5rem",
      },
    },
    [theme.breakpoints.only("sm")]: {
      textAlign: "center",
    },
    [theme.breakpoints.only("xl")]: {
      textAlign: "center",
      fontSize: 70,
    },
  },
  heroButton: {
    padding: "12px 20px",
    textTransform: "none",
    border: `2px solid #fafafa`,
    [`@media (min-width: ${galaxyFold}px)`]: {
      padding: "5px 8px",
      color: theme.palette.common.white,
    },
  },
  heroSecrionTitleDesc: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
}));

const HeroSection = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  const [state, setState] = useState(0);
  return (
    <>
      <Carousel
        autoPlay={true}
        showArrows={false}
        stopOnHover={false}
        dynamicHeight={false}
        infiniteLoop
        transitionTime={1000}
        interval={7000}
        showThumbs={false}
        showIndicators={true}
        showStatus={false}
        onChange={(index) => setState(index)}
      >
        {/* First slide */}
        <Grid container component="div">
          {state === 0 ? (
            <>
              <Grid
                container
                item
                lg={6}
                xs={12}
                className={`${classes.heroSectionDescriptionContainer} hero-section-desc-container`}
              >
                <Grid
                  container
                  direction="column"
                  justify="center"
                  alignItems="flex-start"
                  className={classes.heroSectionDescription}
                >
                  <Grid item lg={8} md={5} xs={9}>
                    <Fade
                      top
                      // cascade
                      duration={2000}
                      delay={500}
                    >
                      <Typography
                        variant="h1"
                        align="left"
                        color="secondary"
                        className={`${classes.titleHeroSection} promotion-title`}
                      >
                        PROMOTION BANNER TITLE HERE
                      </Typography>
                    </Fade>
                  </Grid>
                  <Hidden xsDown>
                    <Grid item sm={7} md={5} lg={8}>
                      <Fade left duration={2000} delay={1100}>
                        <Typography
                          variant="subtitle1"
                          align="left"
                          className={classes.heroSecrionTitleDesc}
                          color="secondary"
                          style={{ padding: "32px 0px 0px 0px" }}
                        >
                          Lorem ipsum promotion banner text description down
                          here text description down here Lorem ipsum promotion
                          banner
                        </Typography>
                      </Fade>
                    </Grid>
                  </Hidden>

                  <Grid item style={{ padding: "32px 0px 0px 0px" }}>
                    <Fade bottom duration={2000} delay={1300}>
                      <Button
                        variant="outlined"
                        color="secondary"
                        className={classes.heroButton}
                        // size="large"
                      >
                        Call to action
                      </Button>
                    </Fade>
                  </Grid>
                </Grid>
              </Grid>
            </>
          ) : null}
          <Image
            className={classes.image}
            className="heroImage"
            width={3000}
            height={matches ? 2300 : 1460}
            priority={true}
            src="/images/Banner_1.jpg"
            alt="1"
          />
        </Grid>

        {/* Second slide */}
        <Grid container direction="column" component="div">
          {state === 1 ? (
            <Grid
              container
              item
              lg={6}
              xs={12}
              className={classes.heroSectionDescriptionContainer}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.heroSectionDescription}
              >
                <Grid item lg={7} md={5} xs={9}>
                  <Fade top duration={2000} delay={500}>
                    <Typography
                      variant="h1"
                      align="left"
                      color="secondary"
                      className={classes.titleHeroSection}
                    >
                      PROMOTION BANNER TITLE HERE
                    </Typography>
                  </Fade>
                </Grid>
                <Hidden xsDown>
                  <Grid item md={5} xs={9} lg={5}>
                    <Fade left duration={2000} delay={1100}>
                      <Typography
                        variant="subtitle1"
                        align="left"
                        color="secondary"
                        style={{ padding: "20px 0px 0px 0px" }}
                      >
                        Lorem ipsum promotion banner text description down here
                      </Typography>
                    </Fade>
                  </Grid>
                </Hidden>

                <Grid item style={{ padding: "20px 0px 0px 0px" }}>
                  <Fade bottom duration={2000} delay={1300}>
                    <Button
                      variant="outlined"
                      className={classes.heroButton}
                      style={{ padding: "12px 15px", textTransform: "none" }}
                      color="secondary"
                    >
                      Call to action
                    </Button>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          ) : null}
          <Image
            className={classes.image}
            width={3000}
            height={matches ? 2300 : 1460}
            priority={true}
            src="/images/Banner_1.jpg"
            alt="1"
          />
        </Grid>

        {/* Third slide */}
        <Grid container direction="column" component="div">
          {state === 2 ? (
            <Grid
              container
              item
              lg={6}
              xs={12}
              className={classes.heroSectionDescriptionContainer}
            >
              <Grid
                container
                direction="column"
                justify="center"
                alignItems="flex-start"
                className={classes.heroSectionDescription}
              >
                <Grid item lg={7} md={5} xs={9}>
                  <Fade top duration={2000} delay={500}>
                    <Typography
                      variant="h1"
                      align="left"
                      color="secondary"
                      className={classes.titleHeroSection}
                    >
                      PROMOTION BANNER TITLE HERE
                    </Typography>
                  </Fade>
                </Grid>
                <Hidden xsDown>
                  <Grid item lg={5}>
                    <Fade left duration={2000} delay={1100}>
                      <Typography
                        variant="subtitle1"
                        align="left"
                        color="secondary"
                        style={{ padding: "20px 0px 0px 0px" }}
                      >
                        Lorem ipsum promotion banner text description down here
                      </Typography>
                    </Fade>
                  </Grid>
                </Hidden>

                <Grid item style={{ padding: "20px 0px 0px 0px" }}>
                  <Fade bottom duration={2000} delay={1300}>
                    <Button
                      variant="outlined"
                      className={classes.heroButton}
                      style={{ padding: "12px 15px", textTransform: "none" }}
                      color="secondary"
                    >
                      Call to action
                    </Button>
                  </Fade>
                </Grid>
              </Grid>
            </Grid>
          ) : null}
          <Image
            className={classes.image}
            width={3000}
            height={matches ? 2300 : 1460}
            priority={true}
            src="/images/Banner_1.jpg"
            alt="1"
          />
        </Grid>
      </Carousel>
    </>
  );
};

export default HeroSection;
