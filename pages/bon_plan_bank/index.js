import React from "react";
import HeroSectionBank from "components/bon-plan-bank/HeroSectionBank";
import bonplan from "../../components/bon-plan-bank/data/bonplan";

const BonPlanBank = ({ bonplanLists }) => {
  return (
    <>
      <HeroSectionBank bonplanLists={bonplanLists} />
    </>
  );
};

export default BonPlanBank;

export async function getStaticProps () {
  return {
    props: {
      bonplanLists: bonplan,
    },
  };
};
