import React from "react";
import { useRouter } from "next/router";
import { dummyDataDetail } from "./dummyData";
import { Container, Grid, Typography } from "@material-ui/core";

const BankDetail = () => {
  const { query } = useRouter();
  console.log(query.title);

  const result = dummyDataDetail.find((bank) => bank.title === query.title);
  console.log({ result });

  return (
    <Container maxWidth="lg" style={{ marginTop: "7rem" }}>
      <Grid container>
        <Grid item>
          <img src={result.imageUrl} alt={result.title} />
        </Grid>

        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography align="center">{result.bonPlanTitle}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BankDetail;
