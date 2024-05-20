import React, { useState, useEffect } from "react";
import Layout from "../Layout/Main";
import Container from "../Components/Container";
import { Head } from "@inertiajs/react";
import Loading from "../Components/Loading";
import CardList from "../Components/CardList";
import Breadcrumb from "../Components/Breadcrumb";
import Title from "../Components/Title";
import LoadingList from "../Components/Loading/LoadingPublication";
import Search from "../Components/Search";
import DataEmpty from "../Components/DataEmpty";

export default function Pressrelease() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(null);
    const [dataPressrelease, setDataPressrelease] = useState([]);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    const handleSearch = async (e, keyword) => {
        e.preventDefault();
        if (keyword === "") {
            setSearch("");
            setIsLoading(false);
            return;
        }
        setSearch(keyword);
        setIsLoading(true);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/pressrelease/domain/7100/page/${currentPage}/keyword/${search}/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();

                if (result.data.length === 0) {
                    setDataPressrelease([]);
                    setIsEmpty(true);
                    setIsLoading(false);
                    return;
                }

                setDataPressrelease(result.data[1]);
                setTotalData(result.data[0].total);
                setIsEmpty(false);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currentPage, search]);
    return (
        <Layout>
            <Head title="Berita Resmi Statistik" />
            <Container>
                <Breadcrumb menu="pressrelease" />

                <Title title="Berita Resmi Statistik" />

                <Search handleSearch={handleSearch} />
                {isLoading && <LoadingList />}

                {isEmpty ? (
                    <DataEmpty />
                ) : (
                    <CardList
                        data={dataPressrelease}
                        handlePageChange={handlePageChange}
                        totalData={totalData}
                        currentPage={currentPage}
                        menu="pressrelease"
                    />
                )}
            </Container>
        </Layout>
    );
}
