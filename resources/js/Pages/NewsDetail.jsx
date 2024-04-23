import React from "react";
import Layout from "../Layout/Main";
import { Head } from "@inertiajs/react";
import Container from "../Components/Container";
import Breadcrumb from "../Components/Breadcrumb";
import DetailCard from "../Components/DetailCard";

const NewsDetail = ({ news }) => {
    return (
        <Layout>
            <Head title={news.title} />
            <Container>
                <Breadcrumb menu="news" submenu={news.title} />
                <DetailCard data={news} menu="news" />
            </Container>
        </Layout>
    );
};

export default NewsDetail;
