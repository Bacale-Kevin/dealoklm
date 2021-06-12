import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Grid, Typography, Button, Card } from "@material-ui/core";
import Link from "next/link";
import Image from "next/image";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        minHeight: 500,
        height: "auto",
        margin: "0px auto",
        borderRadius: " 0px 0px 3% 3% ",
        transition: "transform 0.15s ease-in-out",
    },
    button: {
        textTransform: "none",
        padding: "10px 50px",
        // color: "white"
    },
    cardTitle: {
        fontSize: "1.4rem",
    },
}));

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        slidesToSlide: 1, // optional, default to 1.
    },
};
const MultiCarousel = () => {
    const classes = useStyles();
    return (
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            //   autoPlay={deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            //   deviceType={this.props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
        >
            <Grid
                component="div"
                container
                direction="column"
                className="plan-card"
                style={{ marginBottom: "6em" }}
            >
                <Grid item className="plan-logo">
                    <img
                        src="/images/boursorama_banque_carre.png"
                        alt="boursorama_banque"
                    />
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
                        Boursoroma
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        align="center"
                        style={{ margin: "16px 0px" }}
                    >
                        Description
                    </Typography>
                </Grid>
                <Grid item style={{ paddingBottom: "3rem" }}>
                    <Button variant="contained" color="primary">
                        {/* <Link href={`${card.path}/${card.title}`}> */}
                        <Link href="">
                            <a>Le Bon Plan</a>
                        </Link>
                    </Button>
                </Grid>
            </Grid>
            <Grid
                component="div"
                container
                direction="column"
                className="plan-card"
                style={{ marginBottom: "6em" }}
            >
                <Grid item className="plan-logo">
                    <img
                        src="/images/boursorama_banque_carre.png"
                        alt="boursorama_banque"
                    />
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
                        Boursoroma
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        align="center"
                        style={{ margin: "16px 0px" }}
                    >
                        Description
                    </Typography>
                </Grid>
                <Grid item style={{ paddingBottom: "3rem" }}>
                    <Button variant="contained" color="primary">
                        {/* <Link href={`${card.path}/${card.title}`}> */}
                        <Link href="">
                            <a>Le Bon Plan</a>
                        </Link>
                    </Button>
                </Grid>
            </Grid>
            <Grid
                component="div"
                container
                direction="column"
                className="plan-card"
                style={{ marginBottom: "6em" }}
            >
                <Grid item className="plan-logo">
                    <img
                        src="/images/boursorama_banque_carre.png"
                        alt="boursorama_banque"
                    />
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
                        Boursoroma
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        align="center"
                        style={{ margin: "16px 0px" }}
                    >
                        Description
                    </Typography>
                </Grid>
                <Grid item style={{ paddingBottom: "3rem" }}>
                    <Button variant="contained" color="primary">
                        {/* <Link href={`${card.path}/${card.title}`}> */}
                        <Link href="">
                            <a>Le Bon Plan</a>
                        </Link>
                    </Button>
                </Grid>
            </Grid>
            <Grid
                component="div"
                container
                direction="column"
                className="plan-card"
                style={{ marginBottom: "6em" }}
            >
                <Grid item className="plan-logo">
                    <img
                        src="/images/boursorama_banque_carre.png"
                        alt="boursorama_banque"
                    />
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
                        Boursoroma
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        variant="body1"
                        align="center"
                        style={{ margin: "16px 0px" }}
                    >
                        Description
                    </Typography>
                </Grid>
                <Grid item style={{ paddingBottom: "3rem" }}>
                    <Button variant="contained" color="primary">
                        {/* <Link href={`${card.path}/${card.title}`}> */}
                        <Link href="">
                            <a>Le Bon Plan</a>
                        </Link>
                    </Button>
                </Grid>
            </Grid>
        </Carousel>
    );
};

export default MultiCarousel;
