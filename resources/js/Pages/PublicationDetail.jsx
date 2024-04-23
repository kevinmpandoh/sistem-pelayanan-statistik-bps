import React from "react";
import Layout from "../Layout/Main";
import { Head } from "@inertiajs/react";
import Container from "../Components/Container";
import Breadcrumb from "../Components/Breadcrumb";
import DetailCard from "../Components/DetailCard";

const PublicationDetail = ({ publication }) => {
    return (
        <Layout>
            <Head title={publication.title} />
            <Container>
                <Breadcrumb menu="publication" submenu={publication.title} />
                <DetailCard data={publication} menu="publication" />
            </Container>
        </Layout>
    );
};

export default PublicationDetail;
