import React, { useState, useEffect } from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Fade,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import CountUp, { startAnimation } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme) => ({
  numbers: {
    color: "#1398d6",
  },
  title: {
    fontWeight: 600,
    opacity: 0.9,
  },
}));

const style = {
  componentName: {},
  col: {},
  countup: {},
};

const NosChiffreCle = () => {
  useEffect(() => {
    var someElement = document.querySelector(".element");
    const rect = someElement.getBoundingClientRect();
    console.log(rect);
  }, []);
  const [didViewCountUp, setdidViewCountUp] = useState(false);

  const onVisibilityChange = (isVisible) => {
    if (isVisible) {
      setdidViewCountUp({ didViewCountUp: true });
    }
  };
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();
  return (
    <>
      <Grid container justify="center" style={{ padding: "5rem 0px" }}>
        <Grid item xs={10}>
          <Typography variant="h1" align="center" className={classes.title}>
            NOS CHIFFRE CLES
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        alignItems="center"
        justify={matches ? "center" : "space-around"}
        spacing={matches ? 2 : 8}
        className="element"
      >
        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>

        <VisibilitySensor
          onChange={onVisibilityChange}
          partialVisibility={true}
          delayedCall
        >
          <Grid item xs={6} sm={4}>
            <Grid container direction="column">
              <Grid item>
                <Typography
                  align="center"
                  variant="h1"
                  className={classes.numbers}
                >
                  <CountUp
                    className={style.countup}
                    start={0}
                    duration={10}
                    end={didViewCountUp ? 25 : 0}
                    delay={10}
                  />
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" variant="subtitle1">
                  Filluels Boursorama
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </VisibilitySensor>
      </Grid>
    </>
  );
};

export default NosChiffreCle;
