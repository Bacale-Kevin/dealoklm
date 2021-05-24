import React, { useState, useEffect } from "react";
import Jump from "react-reveal/Jump";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import Jello from "react-reveal/Zoom";
import ShopTwoRounded from "@material-ui/icons/ShoppingCartRounded";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import {
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Image from "next/image"

// import savingPig from '../../public/images/saving-pig.jpg'



const useStyles = makeStyles((theme) => ({
  carouselTextTypo: {
    fontWeight: "700",
    position: "absolute",
    color: "White",
    fontFamily: "Raleway",
    width: "100%",
    position: "absolute",
    top: "5em",
    left: "-205px",
    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
      position: "absolute",
      left: "0.1em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5em",
      position: "absolute",
      top: "3em",
      left: "0.3em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.7em",
      position: "absolute",
      top: "2em",
      left: "0.3em",
    },
  },
  buttonCarousel: {
    color: theme.palette.common.white,
    border: "1px solid white",
    padding: "15px 45px",
    fontFamily: "Raleway",
    textTransform: "none",
    position: "absolute",
    top: "10em",
    right: "45em",
    "&:hover": {
      color: "#FEAA00",
      border: "1px solid #FEAA00",
    },
    [theme.breakpoints.down("md")]: {
      // fontSize: "6em",
      position: "absolute",
      top: "9em",
      left: "20em",
    },
    [theme.breakpoints.down("sm")]: {
      // fontSize: "6em",
      position: "absolute",
      top: "8em",
      left: "20em",
      border: "2px solid #fff",
      // fontSize: "0.9em"
    },
    [theme.breakpoints.down("xs")]: {
      // fontSize: "6em",
      position: "absolute",
      top: "5em",
      left: "8em",
      padding: "10px 35px",
    },
  },
  icon: {
    color: theme.palette.common.white,
  },
  teachAndFixCarousel: {
    fontSize: "1.2em",
    fontWeight: "700",
  },
  WeAreCarousel: {
    fontSize: "0.35em",
    fontFamily: "Raleway",
    fontWeight: "700",
    position: "relative",
    left: "14em",
    top: "1em",
    color: "#dbd9d9",
    textAlign: "start",
    width: "60%",
  },
  buttonCarousel2: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.white,
    position: "relative",
    top: "3em",
    left: "-13em",
  },
  carousel: {
    zIndex: 0,
    // [theme.breakpoints.down("md")]: {
    //   marginTop: "5em",
    // },
  },
  //First element
  paperContainer: {
    position: "absolute",
    left: "15em",
    top: "8em",
    width: "80%",
    backgroundColor: "rgba(10, 9, 9, 0.3)",
    [theme.breakpoints.only("md")]: {
      position: "absolute",
      width: "60%",
      left: "2em",
      top: "-1em",
    },
    [theme.breakpoints.only("sm")]: {
      position: "absolute",
      left: "2em",
      top: "-1em",
    },
    [theme.breakpoints.only("xs")]: {
        position: "absolute",
        left: "1.5em",
        top: "1.7em",
      },
    
  },

  image: {
    // maxHeight: "40em",
    // width: "100%",
    // height: "85vh",
    // minHeight: "20em",
    backgroundPosition: "right",
    backgroundSize: "100% 100%",
    [theme.breakpoints.only("md")]: {
      height: "35em",
    },
    [theme.breakpoints.down("sm")]: {
      height: "30em",
    }, [theme.breakpoints.down("xs")]: {
        height: "20em",
      },
  },
  h3Heading: {
    color: theme.palette.common.white,
    fontSize: "48px",
    fontFamily: "Montserrat",
    letterSpacing: "-2px",
    fontWeight: "200",
    textTransform: "uppercase",
    minWidth: "779px",
    [theme.breakpoints.down("md")]: {
      fontSize: "24px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "24px",
    },[theme.breakpoints.down("xs")]: {
        fontSize: "16px",fontWeight: "300",letterSpacing: "-1px",
      },
  },
  h2Heading: {
    color: theme.palette.common.white,
    fontSize: "63px",
    fontFamily: "Poppins",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontWeight: 900,
    [theme.breakpoints.down("sm")]: {
        fontSize: "40px",
      },
      [theme.breakpoints.down("xs")]: {
        fontSize: "20px",
      },
  },
  h6Heading: {
    whiteSpace: "normal",
    fontSize: "19px",
    fontWeight: 300,
    color: "rgb(255, 255, 255)",
    letterSpacing: 0,
    fontFamily: "Poppins",
    textTransform: "uppercase",
    [theme.breakpoints.down("md")]: {
      fontSize: "12px",
    },[theme.breakpoints.down("xs")]: {
        fontSize: "10",
      },
  },
  carouselButton: {
    fontFamily: "Rubik",
    borderRadius: "50px",
    padding: "16px 60px",
    [theme.breakpoints.down("md")]: {
      padding: "12px 40px",
    },[theme.breakpoints.down("xs")]: {
        padding: "8px 20px",
      },
  },
  //First element
  paperContainer2: {
    position: "absolute",
    left: "15em",
    top: "8em",
    width: "80%",
    backgroundColor: "rgba(10, 9, 9, 0.3)",
  },
  h3Heading2: {
    color: theme.palette.common.white,
    fontSize: "48px",
    fontFamily: "Montserrat",
    letterSpacing: "-2px",
    fontWeight: "200",
    textTransform: "uppercase",
    minWidth: "779px",
  },
  h2Heading2: {
    color: theme.palette.common.white,
    fontSize: "63px",
    fontFamily: "Poppins",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontWeight: 900,
  },
  h6Heading2: {
    whiteSpace: "normal",
    fontSize: "19px",
    fontWeight: 300,
    color: "rgb(255, 255, 255)",
    letterSpacing: 0,
    fontFamily: "Poppins",
    textTransform: "uppercase",
  },
  carouselButton2: {
    fontFamily: "Rubik",
    borderRadius: "50px",
    padding: "16px 60px",
  },
  //Third element
  paperContainer3: {
    position: "absolute",
    left: "15em",
    top: "8em",
    width: "80%",
    backgroundColor: "rgba(10, 9, 9, 0.3)",
  },
  h3Heading3: {
    color: theme.palette.common.white,
    fontSize: "48px",
    fontFamily: "Montserrat",
    letterSpacing: "-2px",
    fontWeight: "200",
    textTransform: "uppercase",
    minWidth: "779px",
  },
  h2Heading3: {
    color: theme.palette.common.white,
    fontSize: "63px",
    fontFamily: "Poppins",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontWeight: 900,
  },
  h6Heading3: {
    whiteSpace: "normal",
    fontSize: "19px",
    fontWeight: 300,
    color: "rgb(255, 255, 255)",
    letterSpacing: 0,
    fontFamily: "Poppins",
    textTransform: "uppercase",
  },
  carouselButton3: {
    fontFamily: "Rubik",
    borderRadius: "50px",
    padding: "16px 60px",
  },
}));
export default function Carousels() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
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
        className={classes.carousel}
      >
        <Grid direction="column" alignItems="center" component="div">
          {/* if the index found in the state is equal to 0 then display this on th UI */}
          {state === 0 ? (
            <>
              {/* first slide element */}
              <Grid
                className={classes.carouselTextTypo}
                item
                justify="flex-start"
                lg={10}
              >
                <Fade exit="Fadeout" center duration={3000} delay={500}>
                  <Paper
                    className={classes.paperContainer}
                    variant="outlined"
                    square
                  >
                    <Grid container>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Fade exit="Fadeout" top duration={1000} delay={500}>
                          <Typography
                            variant="h3"
                            align="left"
                            className={classes.h3Heading}
                          >
                            We Build Technologies Solutions
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Fade exit="Fadeout" top duration={1000} delay={500}>
                          <Typography
                            variant="h2"
                            align="left"
                            className={classes.h2Heading}
                          >
                            To Make Your Business Disrupt The Market
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                          margin: matches ? "0.5em 0" : "1em 0",
                        }}
                      >
                        <Fade exit="Fadeout" bottom duration={1000} delay={500}>
                          <Typography
                            variant="h6"
                            align="center"
                            className={classes.h6Heading}
                          >
                            #TAF-Secured Reliable Fast
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid item>
                        <Fade exit="Fadeout" left duration={1500} delay={500}>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.carouselButton}
                          >
                            Our Services
                          </Button>
                        </Fade>
                      </Grid>
                    </Grid>
                  </Paper>
                </Fade>
              </Grid>
            </>
          ) : null}

          <Image
            className={classes.image}
            width={3000}
            height={1400}
            src="/images/saving-pig.jpg"
            alt="1"
          />
        </Grid>

        {/* Second slide */}
        <Grid direction="column" alignItems="flex-start" component="div">
          {state === 1 ? (
            <>
              {/* first text element */}
              <Grid
                className={classes.carouselTextTypo}
                item
                justify="flex-start"
                lg={10}
                style={{ position: "absolute" }}
              >
                <Fade exit="Fadeout" center duration={3000} delay={500}>
                  <Paper
                    className={classes.paperContainer}
                    variant="outlined"
                    square
                  >
                    <Grid container>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Fade exit="Fadeout" top duration={1000} delay={500}>
                          <Typography
                            variant="h3"
                            align="left"
                            className={classes.h3Heading}
                          >
                            Providing IT system design 
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Fade exit="Fadeout" top duration={1000} delay={500}>
                          <Typography
                            variant="h2"
                            align="left"
                            className={classes.h2Heading}
                          >
                            Structured Cabling and Installation. 
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                          margin: "1em 0",
                        }}
                      >
                        <Fade exit="Fadeout" bottom duration={1000} delay={500}>
                          <Typography
                            variant="h6"
                            align="center"
                            className={classes.h6Heading}
                          >
                            #TAF-Installation
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid item>
                        <Fade exit="Fadeout" left duration={1500} delay={500}>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.carouselButton}
                          >
                            Our Services
                          </Button>
                        </Fade>
                      </Grid>
                    </Grid>
                  </Paper>
                </Fade>
              </Grid>
            </>
          ) : null}

          <img
            className={classes.image}
            src="https://img.freepik.com/free-photo/investor-hand-press-typing-keyboard-drawing-financial-business-graph-chart-analysis-stock-market-value-investment-concept_50039-1398.jpg?size=664&ext=jpg&ga=GA1.2.150404849.1608502879"
            alt="1"
          />
        </Grid>

        {/* thrid slide */}
        <Grid direction="column" alignItems="flex-start" component="div">
          {state === 2 ? (
            <>
              {/* first text element */}
              <Grid
                className={classes.carouselTextTypo}
                item
                justify="flex-start"
                lg={10}
                style={{ position: "absolute" }}
              >
                <Fade exit="Fadeout" center duration={3000} delay={500}>
                  <Paper
                    className={classes.paperContainer}
                    variant="outlined"
                    square
                  >
                    <Grid container>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Fade exit="Fadeout" top duration={1000} delay={500}>
                          <Typography
                            variant="h3"
                            align="left"
                            className={classes.h3Heading}
                          >
                            Design,Build,Manage,Maintain. 
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                        }}
                      >
                        <Fade exit="Fadeout" top duration={1000} delay={500}>
                          <Typography
                            variant="h2"
                            align="left"
                            className={classes.h2Heading}
                          >
                            Our experts will meet 
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid
                        item
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                          width: "100%",
                          margin: "1em 0",
                        }}
                      >
                        <Fade exit="Fadeout" bottom duration={1000} delay={500}>
                          <Typography
                            variant="h6"
                            align="center"
                            className={classes.h6Heading}
                          >
                             and exceed your project specifications.
                          </Typography>
                        </Fade>
                      </Grid>
                      <Grid item>
                        <Fade exit="Fadeout" left duration={1500} delay={500}>
                          <Button
                            variant="contained"
                            color="secondary"
                            className={classes.carouselButton}
                          >
                            Our Services
                          </Button>
                        </Fade>
                      </Grid>
                    </Grid>
                  </Paper>
                </Fade>
              </Grid>
            </>
          ) : null}

          <img
            className={classes.image}
            src="https://img.freepik.com/free-vector/data-green-landscape_87720-2627.jpg?size=664&ext=jpg&ga=GA1.2.150404849.1608502879"
            alt="1"
          />
        </Grid>
      </Carousel>
    </>
  );
}
