import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2rem",
    padding: "3rem 0px 2rem 0px",
    color: "white",
    fontWeight: 500,
    lineHeight: 1.2,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: "1rem 0px",
    },
  },
  description: {
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.5,
    color: "#212529",
    textAlign: "left",
    // maxWidth: "90%"
    marginTop: "1rem",
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      width: "100%",
    },
  },
  containerAccordion: {
    marginTop: 8,
  },
  accordion: {
    boxShadow: "none",
    backgroundColor: "#17a2b8",
    marginTop: "1rem",
  },
  secondGrid: {
    marginLeft: "5rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      marginLeft: "0rem",
    },
  },
  firstGrid: {
    // marginTop: "7rem",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "center",
    },
  },
  titleAccordion: {
    color: "white",
    fontWeight: 600,
  },
  accordionDetails: {
    padding: "1.5rem",
    backgroundColor: "white",
  },
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: `2em`,
  },
  container: {
    backgroundColor: "#17A2B8",
    marginTop: "5rem",
    paddingBottom: "5rem",
  },
  box: {
    boxShadow: "0 .125rem .25rem rgba(0,0,0,.075)",
  },
}));

export const QuestionFrePose = ({ bonplanDetails }) => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Container>
        <Grid container direction="column">
          <Grid item className={classes.titleContainer}>
            <Typography className={classes.title}>
              {bonplanDetails.questionPose}
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Box
              borderLeft={3}
              color="secondary.main"
              //   borderRadius={16}
              className={classes.box}
            >
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                    {bonplanDetails.question1}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    {bonplanDetails.reponse1}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Box
              borderLeft={3}
              color="secondary.main"
              //   borderRadius={16}
              className={classes.box}
            >
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                    {bonplanDetails.question2}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    {bonplanDetails.reponse2}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Box
              borderLeft={3}
              color="secondary.main"
              //   borderRadius={16}
              className={classes.box}
            >
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                    {bonplanDetails.question3}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    {bonplanDetails.reponse3}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Box
              borderLeft={3}
              color="secondary.main"
              //   borderRadius={16}
              className={classes.box}
            >
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                    {bonplanDetails.question4}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    {bonplanDetails.reponse4}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Box
              borderLeft={3}
              color="secondary.main"
              //   borderRadius={16}
              className={classes.box}
            >
              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                    {bonplanDetails.question5}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    {bonplanDetails.reponse5}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default QuestionFrePose;
