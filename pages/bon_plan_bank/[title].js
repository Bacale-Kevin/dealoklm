import BankDetail from "components/bon-plan-bank/BankDetail";
import React from "react";
import { dummyDataDetail } from "components/bon-plan-bank/dummyData";
import Layout from "components/layout/Layout";

const Detail = () => {
  return (
    <>
      <Layout>
        <BankDetail />
      </Layout>
    </>
  );
};

export default Detail;
