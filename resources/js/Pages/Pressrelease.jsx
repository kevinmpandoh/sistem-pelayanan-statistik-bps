import React, { useState, useEffect } from "react";
import Layout from "../Layout/Main";
import Container from "../Components/Container";
import { Head } from "@inertiajs/react";
import Loading from "../Components/Loading";
import CardList from "../Components/CardList";
import Breadcrumb from "../Components/Breadcrumb";
import Title from "../Components/Title";

export default function Pressrelease() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(null);
    const [dataPressrelease, setDataPressrelease] = useState([]);

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/pressrelease/domain/7100/page/${currentPage}/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();
                setDataPressrelease(result.data[1]);
                setTotalData(result.data[0].total);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currentPage]);
    return (
        <Layout>
            <Head title="Berita Resmi Statistik" />
            <Container>
                <Breadcrumb menu="pressrelease" />

                <Title title="Berita Resmi Statistik" />
                <CardList
                    data={dataPressrelease}
                    handlePageChange={handlePageChange}
                    totalData={totalData}
                    currentPage={currentPage}
                    menu="pressrelease"
                />
            </Container>
        </Layout>
    );
}
