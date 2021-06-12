import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { makeStyles, Grid, Typography, Button, Container } from "@material-ui/core";

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
  carousel: {
    position: "relative",

    "& .owl-stage-outer": {
      paddingBottom: 20,
    },
  },
}));
export default function CarouselSection() {
  const classes = useStyles();
  return (
    // <Container style={{ display: "flex", justifyContent: "center" }}>
      <OwlCarousel
        {...options}
        items={3}
        center
        dotsEach={true}
        className={`${classes.carousel} owl-theme`}
        autoplay={true}
        loop={true}
        startPosition={1}
        margin={50}
        stagePadding={40}
        slideBy={1}
        autoplayTimeout={3000}
        // autoplayHoverPause
        dots
        navText={[
          '<i class="fas fa-arrow-left" style="position: absolute; left: -2rem; bottom: 22rem; "></i>',
          '<i class="fas fa-arrow-right" style="position: absolute; right: -2rem; bottom: 22rem;"></i>',
        ]}
        // nav
        style={{ paddingBottom: 20 }}
      >
        <Link href="">
          <a>
            <Grid
              component="div"
              container
              direction="column"
              className="plan-card"
              style={{ marginBottom: "6em"  }}
            >
              <Grid item className="plan-logo">
                <img
                  src="/images/boursorama_banque_carre.png"
                  alt="boursorama_banque"
                  className="logoImage"
                  style={{ width: 150, height: 150, margin: "0px auto" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  align="center"
                  style={{
                    marginTop: "1rem",
                    fontWeight: 500,
                    fontSize: "1.5rem",
                    color: "#17a2b8",
                  }}
                >
                  Boursoroma
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ margin: "16px 0px" }}
                >
                  Lorem ipsum small descritpion
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  paddingBottom: "3rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" color="primary">
                  <Link href={``}>
                    <a>CONSULTER LE BON PLAN</a>
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </a>
        </Link>

        <Link href="">
          <a>
            <Grid
              component="div"
              container
              direction="column"
              className="plan-card"
              style={{ marginBottom: "6em" }}
            >
              <Grid item className="plan-logo">
                <img
                  src="/images/boursorama_banque_carre.png"
                  alt="boursorama_banque"
                  className="logoImage"
                  style={{ width: 150, height: 150, margin: "0px auto" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  align="center"
                  style={{
                    marginTop: "1rem",
                    fontWeight: 500,
                    fontSize: "1.5rem",
                    color: "#17a2b8",
                  }}
                >
                  Boursoroma
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ margin: "16px 0px" }}
                >
                  Lorem ipsum small descritpion
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  paddingBottom: "3rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" color="primary">
                  <Link href={``}>
                    <a>CONSULTER LE BON PLAN</a>
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </a>
        </Link>

        <Link href="">
          <a>
            <Grid
              component="div"
              container
              direction="column"
              className="plan-card"
              style={{ marginBottom: "6em" }}
            >
              <Grid item className="plan-logo">
                <img
                  src="/images/boursorama_banque_carre.png"
                  alt="boursorama_banque"
                  className="logoImage"
                  style={{ width: 150, height: 150, margin: "0px auto" }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant="h4"
                  component="h2"
                  align="center"
                  style={{
                    marginTop: "1rem",
                    fontWeight: 500,
                    fontSize: "1.5rem",
                    color: "#17a2b8",
                  }}
                >
                  Boursoroma
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  variant="body1"
                  align="center"
                  style={{ margin: "16px 0px" }}
                >
                  Lorem ipsum small descritpion
                </Typography>
              </Grid>
              <Grid
                item
                style={{
                  paddingBottom: "3rem",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button variant="contained" color="primary">
                  <Link href={``}>
                    <a>CONSULTER LE BON PLAN</a>
                  </Link>
                </Button>
              </Grid>
            </Grid>
          </a>
        </Link>
      </OwlCarousel>
    // </Container>
  );
}
