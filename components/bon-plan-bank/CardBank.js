import { Button, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import React from "react";

const CardBank = ({ card }) => {
  return (
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
      <Grid component="div" container direction="column" className="plan-card">
        <Grid item className="plan-logo">
          <img src={card.imageUrl} alt="boursorama_banque" />
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
            {card.title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="body1"
            align="center"
            style={{ margin: "16px 0px" }}
          >
            {card.title}
          </Typography>
        </Grid>
        <Grid item style={{ paddingBottom: "3rem" }}>
          <Button variant="contained" color="primary">
            <Link href={`${card.path}/${card.title}`}>
              <a>{card.btnText}</a>
            </Link>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CardBank;
