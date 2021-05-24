import React from "react";
import {
  Paper,
  makeStyles,
  Container,
  Grid,
  useMediaQuery,
  useTheme,
  Typography,
} from "@material-ui/core";
import { FaShieldAlt, FaUserFriends, FaCheckDouble } from "react-icons/fa";



const useStyles = makeStyles((theme) => ({
  container: {
    // padding: "20rem",
    // position: "absolute",
    // top: "-83px",
    // marginBottom: "-50px",
  },
  titleContainer: {
    padding: "3rem",
  },
  paper: {
    borderRadius: 20,
    paddingBottom: "4rem",
  },
}));

const DeQuoiSagitIl = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Paper elevation={3} className={classes.paper}>
          <Grid
            container
            direction="column"
            alignItems="center"
            justify="center"
            className={classes.titleContainer}
          >
            <Grid item lg={12} style={{ padding: "2rem",
             }}>
              <Typography variant="h1" color="textPrimary" align="center" style={{ fontWeight: 600,
               }}>
                DE QUOI S'AGIT-IL?
              </Typography>
            </Grid>
          </Grid>
          {/* ... */}
          <Grid container spacing={matches && 4}  justify="space-around">
            <Grid item xs={12} sm={5} md={4}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <FaShieldAlt
                    style={{ width: "2.5rem", height: "2.5rem", color: "teal" }}
                  />
                </Grid>
                <Grid item style={{ padding: "1rem" }}>
                  <Typography align="center" variant="h3">
                    SECURITE
                  </Typography>
                </Grid>
                <Grid item lg={8} xs={10}>
                  <Typography align="center"  variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam rem est optio consectetur, expedita fuga omnis
                    perferendis nobis ipsam, quae magnam labore, maxime enim
                    quas aut ad amet. Iure, debitis?
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={5} md={4}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <FaUserFriends
                    style={{ width: "2.5rem", height: "2.5rem", color: "red" }}
                  />
                </Grid>
                <Grid item style={{ padding: "1rem" }}>
                  <Typography align="center" variant="h3">
                    FILLEUL AVANTAGE
                  </Typography>
                </Grid>
                <Grid item lg={8} xs={10}>
                  <Typography align="center" variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam rem est optio consectetur, expedita fuga omnis
                    perferendis nobis ipsam, quae magnam labore, maxime enim
                    quas aut ad amet. Iure, debitis?
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item xs={12} sm={5} md={4}>
              <Grid container direction="column" alignItems="center">
                <Grid item>
                  <FaCheckDouble
                    style={{
                      width: "2.5rem",
                      height: "2.5rem",
                      color: "green",
                    }}
                  />
                </Grid>
                <Grid item style={{ padding: "1rem" }}>
                  <Typography align="center" variant="h3">
                    SIMPLICITE
                  </Typography>
                </Grid>
                <Grid item lg={8} xs={10}>
                  <Typography align="center" variant="body2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veniam rem est optio consectetur, expedita fuga omnis
                    perferendis nobis ipsam, quae magnam labore, maxime enim
                    quas aut ad amet. Iure, debitis?
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default DeQuoiSagitIl;
