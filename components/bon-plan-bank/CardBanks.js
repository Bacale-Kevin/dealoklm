import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import dynamic from "next/dynamic";
import Button from "@material-ui/core/Button";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";
import { Container, Grid } from "@material-ui/core";
import { red, green, purple } from "@material-ui/core/colors";
const OwlCarousel = dynamic(import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minHeight: 500,
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
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700],
    },
  },
  buttonTel: {
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
      paddingBottom: -20,
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
      items: 1,
    },
    768: {
      items: 1,
    },
    1000: {
      items: 2,
      nav: true,
    },
    1200: {
      items: 3,
      nav: true,
    },
  },
};

export default function CardBanks({ bonplanLists }) {
  const classes = useStyles();
  // const theme = useTheme();
  return (
    <Container style={{ marginBottom: "8rem", maxHeight: "50vh" }}>
      <Container
        maxWidth="xl"
        style={{ position: "relative", top: "-10rem", overflowX: "hidden" }}
      >
        <OwlCarousel
          {...options}
          items={3}
          center
          dotsEach={true}
          className={`${classes.carousel} owl-theme`}
          autoplay={true}
          loop={true}
          startPosition={1}
          margin={90}
          stagePadding={50}
          slideBy={2}
          autoplayTimeout={5000}
          autoplayHoverPause
          dots
          navText={[
            '<i class="fas fa-arrow-left" style="position: absolute; left: -1.5rem; bottom: 25rem; "></i>',
            '<i class="fas fa-arrow-right" style="position: absolute; right: -1.5rem; bottom: 25rem;"></i>',
          ]}
          // nav
          style={{ paddingBottom: 20 }}
        >
          {bonplanLists.map((data) => (
            <Link href={`${data.path}/${data.slug}`} key={data.id}>
              <a>
                <Grid
                  component="div"
                  container
                  direction="column"
                  className="plan-card"
                  justifyContent="flex-end"
                  style={{ marginBottom: "6em" }}
                >
                  <Grid item className="plan-logo">
                    <img
                      src={data.imageUrl}
                      alt={data.title}
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
                      {data.title}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="body1"
                      align="center"
                      style={{ margin: "16px 0px" }}
                    >
                      {data.desc}
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
                      <Link href={`${data.path}/${data.slug}`}>
                        <a>{data.btnText}</a>
                      </Link>
                    </Button>
                  </Grid>
                </Grid>
              </a>
            </Link>
          ))}
        </OwlCarousel>
      </Container>
    </Container>
  );
}



