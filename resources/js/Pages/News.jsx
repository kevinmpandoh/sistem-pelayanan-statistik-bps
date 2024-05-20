import React, { useState, useEffect } from "react";
import Layout from "../Layout/Main";
import Container from "../Components/Container";
import { Head } from "@inertiajs/react";
import CardList from "../Components/CardList";
import Breadcrumb from "../Components/Breadcrumb";
import Title from "../Components/Title";
import LoadingList from "../Components/Loading/LoadingPublication";
import Search from "../Components/Search";

export default function News() {
    const [dataNews, setDataNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(10);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [search, setSearch] = useState("");

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/news/domain/7100/page/${currentPage}/keyword/${search}/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();

                if (result.data.length === 0) {
                    setDataNews([]);
                    setIsEmpty(true);
                    setIsLoading(false);
                    return;
                }
                setDataNews(result.data[1]);
                setTotalData(result.data[0].total);
                setIsEmpty(false);
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currentPage, search]);

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

    return (
        <Layout>
            <Head title="Berita" />
            <Container>
                <Breadcrumb menu="news" />
                <Title title="Berita" />

                <Search handleSearch={handleSearch} />
                {isLoading && <LoadingList />}

                {dataNews.length === 0 && <LoadingList />}

                {isEmpty ? (
                    <DataEmpty />
                ) : (
                    <CardList
                        data={dataNews}
                        handlePageChange={handlePageChange}
                        totalData={totalData}
                        currentPage={currentPage}
                        menu="news"
                    />
                )}
            </Container>
        </Layout>
    );
}
