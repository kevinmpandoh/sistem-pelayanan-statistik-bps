import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Layout/Main";

import Container from "../Components/Container";
import Breadcrumb from "../Components/Breadcrumb";
import Title from "../Components/Title";
import CardList from "../Components/CardList";
import LoadingList from "../Components/Loading/LoadingPublication";
import Search from "../Components/Search";
import DataEmpty from "../Components/DataEmpty";
import DropdownFilter from "../Components/DropdownFilter";

export default function Publication() {
    const [dataPublication, setDataPublication] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(1);
    const [search, setSearch] = useState("");
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/publication/domain/7100/page/${currentPage}/keyword/${search}/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();

                if (result.data.length === 0) {
                    setDataPublication([]);
                    setIsEmpty(true);
                    setIsLoading(false);
                    return;
                }
                setIsEmpty(false);
                setIsLoading(false);
                setDataPublication(result.data[1]);
                setTotalData(result.data[0].total);
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
            <Head title="Publikasi | BPS Sulut" />

            <Container>
                <Breadcrumb menu="publication" />
                <Title title="Publikasi" />

                <div className="flex">
                    <Search handleSearch={handleSearch} />
                </div>

                {isLoading && <LoadingList />}
                {isEmpty ? (
                    <DataEmpty />
                ) : (
                    <CardList
                        data={dataPublication}
                        handlePageChange={handlePageChange}
                        totalData={totalData}
                        currentPage={currentPage}
                        menu="publication"
                    />
                )}
            </Container>
        </Layout>
    );
}
