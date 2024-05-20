import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Layout/Main";

import Container from "../Components/Container";
import Breadcrumb from "../Components/Breadcrumb";
import Title from "../Components/Title";
import CardList from "../Components/CardList";
import LoadingList from "../Components/Loading/LoadingPublication";

export default function Publication() {
    const [dataPublication, setDataPublication] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(1);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/publication/domain/7100/page/${currentPage}/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();
                setDataPublication(result.data[1]);
                setTotalData(result.data[0].total);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currentPage]);

    return (
        <Layout>
            <Head title="Publikasi | BPS Sulut" />

            <Container>
                <Breadcrumb menu="publication" />
                <Title title="Publikasi" />

                {dataPublication.length === 0 && <LoadingList />}

                <CardList
                    data={dataPublication}
                    handlePageChange={handlePageChange}
                    totalData={totalData}
                    currentPage={currentPage}
                    menu="publication"
                />
            </Container>
        </Layout>
    );
}
