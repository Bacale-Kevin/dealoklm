import React from "react";
import { useRouter } from "next/router";
import { dummyDataDetail } from "./dummyData";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import QuestionFrePose from "./questionFrePose";

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: "2.5rem",
    fontWeight: 500,
    color: "#17a2b8",
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
}));

const 
BankDetail = ({ bonplanDetails }) => {
  // console.log(bonplanDetails);
  const classes = useStyles();
  const theme = useTheme();
  const { query } = useRouter();

  return (
    <>
      <Container maxWidth="xl" style={{ background: "#FBFFFF" }}>
        <div className={classes.toolbarMargin} />
        <Container maxWidth="lg" style={{ marginTop: "4rem" }} >
          <Grid container className={classes.firstGrid}>
            <Grid item lg={3}>
              <Grid container justify="flex-end">
                <Grid item>
                  <img
                    style={{ width: 200, height: 200 }}
                    src={bonplanDetails.imageUrl}
                    alt={bonplanDetails.title}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Grid item md={8} className={classes.secondGrid}>
              <Grid container direction="column">
                <Grid item xs={12}>
                  <Typography align="left" className={classes.title}>
                    {bonplanDetails.bonPlanTitle}
                  </Typography>
                </Grid>

                <Grid item xs={12}>
                  <Typography align="start" className={classes.description}>
                    {bonplanDetails.desc}
                  </Typography>
                </Grid>
              </Grid>

              <Grid item xs={12} className={classes.containerAccordion}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className={{}}
                      className={classes.titleAccordion}
                    >
                      {bonplanDetails.step1}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography align="justify">
                      {bonplanDetails.step1desc}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} className={classes.containerAccordion}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className={{}}
                      className={classes.titleAccordion}
                    >
                      {bonplanDetails.step2}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography align="justify">
                      {bonplanDetails.step2desc}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} className={classes.containerAccordion}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className={{}}
                      className={classes.titleAccordion}
                    >
                      {bonplanDetails.step3}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography align="justify">
                      {bonplanDetails.step3desc}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} className={classes.containerAccordion}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className={{}}
                      className={classes.titleAccordion}
                    >
                      {bonplanDetails.step4}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography align="justify">
                      {bonplanDetails.step4desc}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>

              <Grid item xs={12} className={classes.containerAccordion}>
                <Accordion className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography
                      className={{}}
                      className={classes.titleAccordion}
                    >
                      {bonplanDetails.step5}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className={classes.accordionDetails}>
                    <Typography align="justify">
                      {bonplanDetails.step5desc}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <QuestionFrePose bonplanDetails={bonplanDetails} />
    </>
  );
};

export default BankDetail;
