import React from "react";
import Layout from "../Layout/Main";
import { Head } from "@inertiajs/react";
import Container from "../Components/Container";
import Breadcrumb from "../Components/Breadcrumb";
import DetailCard from "../Components/DetailCard";

const PressreleaseDetail = ({ pressrelease }) => {
    return (
        <Layout>
            <Head title={pressrelease.title} />
            <Container>
                <Breadcrumb menu="pressrelease" submenu={pressrelease.title} />
                <DetailCard data={pressrelease} menu="pressrelease" />
            </Container>
        </Layout>
    );
};

export default PressreleaseDetail;
