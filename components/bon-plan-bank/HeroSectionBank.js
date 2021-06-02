import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Button, Container, Grid, Typography } from "@material-ui/core";
import Layout from "components/layout/Layout";
import Fade from "react-reveal/Fade";
import Image from "next/image";

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
              BON PLAN BANQUe
            </Typography>
          </Fade>
        </Container>
      </Container>

      {/* bank card */}
      <Container
        maxWidth="xl"
        classsName="card-section"
        style={{ backgroundColor: "#FBFFFF", marginTop: "-14rem" }}
      >
      <Fade delay={500} duration={2000} bottom>
        <Container className="container" maxWidth="md">
          <Grid container justify="center" spacing={8} alignItems="center">
            {/* 1 */}
            <Grid
              item
              md={4}
              xs={12}
              sm={6}
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
                <Grid
                  component="div"
                  container
                  direction="column"
                  className="plan-card"
                >
                  <Grid item className="plan-logo">
                    <img
                      src="/images/boursorama_banque_carre.png"
                      alt="boursorama_banque"
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
                      Bon plan bank name
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
                  <Grid item style={{ paddingBottom: "3rem" }}>
                    <Button variant="contained" color="primary">
                      Consulter le plan
                    </Button>
                  </Grid>
                </Grid>
            </Grid>
            {/* 2 */}
            <Grid
              item
              md={4}
              xs={12}
              sm={6}
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Grid container direction="column" className="plan-card">
                <Grid item className="plan-logo">
                  <img
                    src="/images/logo-facebook.png"
                    alt="boursorama_banque"
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
                    Bon plan bank name
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
                <Grid item style={{ paddingBottom: "3rem" }}>
                  <Button variant="contained" color="primary">
                    Consulter le plan
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* 3 */}
            <Grid
              item
              md={4}
              xs={12}
              sm={6}
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Grid container direction="column" className="plan-card">
                <Grid item className="plan-logo">
                  <img src="/images/unnamed.png" alt="boursorama_banque" />
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
                    Bon plan bank name
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
                <Grid item style={{ paddingBottom: "3rem" }}>
                  <Button variant="contained" color="primary">
                    Consulter le plan
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* 4 */}
            <Grid
              item
              md={4}
              xs={12}
              sm={6}
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Grid container direction="column" className="plan-card">
                <Grid item className="plan-logo">
                  <img
                    src="/images/logo-facebook.png"
                    alt="boursorama_banque"
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
                    Bon plan bank name
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
                <Grid item style={{ paddingBottom: "3rem" }}>
                  <Button variant="contained" color="primary">
                    Consulter le plan
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* 5 */}
            <Grid
              item
              md={4}
              xs={12}
              sm={6}
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Grid container direction="column" className="plan-card">
                <Grid item className="plan-logo">
                  <img src="/images/unnamed.png" alt="boursorama_banque" />
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
                    Bon plan bank name
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
                <Grid item style={{ paddingBottom: "3rem" }}>
                  <Button variant="contained" color="primary">
                    Consulter le plan
                  </Button>
                </Grid>
              </Grid>
            </Grid>

            {/* 1 */}
            <Grid
              item
              md={4}
              xs={12}
              sm={6}
              style={{
                textAlign: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Grid container direction="column" className="plan-card">
                <Grid item className="plan-logo">
                  <img
                    src="/images/boursorama_banque_carre.png"
                    alt="boursorama_banque"
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
                    Bon plan bank name
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
                <Grid item style={{ paddingBottom: "3rem" }}>
                  <Button variant="contained" color="primary">
                    Consulter le plan
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Fade>
      </Container>
    </Layout>
  );
};

export default HeroSectionBank;
