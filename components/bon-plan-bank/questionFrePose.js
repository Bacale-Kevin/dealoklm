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
    // '&:after': {
    //     content: "''",
    //     position: 'absolute',
    //     borderLeft: "4px solid white",
    //     zIndex: 100,
    //     top: -0,
    //     height: "2.9rem",
    //     borderRadius: "55%"
        
    // }
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
    paddingBottom: "5rem"
    
  },
}));

export const QuestionFrePose = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xl" className={classes.container}>
      <Container>
        <Grid container direction="column">
          <Grid item className={classes.titleContainer}>
            <Typography className={classes.title}>
              Questions fréquament posées
            </Typography>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Paper elevation={2}>
                <Box borderLeft={3} color="secondary.main" borderRadius={16}>

              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Paper elevation={2}>
                <Box borderLeft={3} color="secondary.main" borderRadius={16}>

              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Paper elevation={2}>
                <Box borderLeft={3} color="secondary.main" borderRadius={16}>

              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Paper elevation={2}>
                <Box borderLeft={3} color="secondary.main" borderRadius={16}>

              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </Box>
            </Paper>
          </Grid>

          <Grid item xs={12} className={classes.containerAccordion}>
            <Paper elevation={2}>
                <Box borderLeft={3} color="secondary.main" borderRadius={16}>

              <Accordion className={classes.accordion}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={{}} className={classes.titleAccordion}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <Typography align="justify">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </Typography>
                </AccordionDetails>
              </Accordion>
                </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default QuestionFrePose;
