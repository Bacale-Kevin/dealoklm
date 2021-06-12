import BankDetail from "components/bon-plan-bank/BankDetail";
import React from "react";
import bonplan from "../../components/bon-plan-bank/data/bonplan";
import bonplandetail from "../../components/bon-plan-bank/data/bonplandetail";
import Layout from "components/layout/Layout";

const Detail = ({bonplanDetails}) => {
  return (
    <>
      <Layout>
        <BankDetail bonplanDetails={bonplanDetails} />
      </Layout>
    </>
  );
};

export default Detail;


export const getStaticProps = async ({ params }) => {
  const bonplandetails = bonplandetail.filter(item => item.slug === params.slug)
  return {
    props: {
      bonplanDetails: bonplandetails[0]
    }
  }
}

export const getStaticPaths = async () => {
  const paths = bonplandetail.map(item => ({
    params: { slug: item.slug }
  }))
  return { paths, fallback: false }
}

// Detail.getInitialProps = async (context) => {
//   const { query } = context;
//   const result = bonplandetail.filter((item) => item.slug === query.slug);
//   if (!result) {
//     alert("data not found");
//   } else {
//     // console.log({ result });
//     return {
//       props: {
//         bonplanDetails: result,
//       },
//     };
//   }
// };
