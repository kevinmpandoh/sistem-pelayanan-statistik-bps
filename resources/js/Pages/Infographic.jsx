import React, { useState, useEffect } from "react";
import Layout from "../Layout/Main";
import Container from "../Components/Container";
import { Head } from "@inertiajs/react";
import Loading from "../Components/Loading";
import CardList from "../Components/CardList";
import Breadcrumb from "../Components/Breadcrumb";
import Title from "../Components/Title";
import { Pagination } from "antd";
import { Link } from "@inertiajs/react";

export default function Infographic() {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(null);
    const [dataInfographic, setDataInfographic] = useState([]);

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/infographic/domain/7100/page/${currentPage}/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();
                setDataInfographic(result.data[1]);
                setTotalData(result.data[0].total);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currentPage]);

    return (
        <Layout>
            <Head title="Infografis" />
            <Container>
                <Breadcrumb menu={"infographic"} />

                <Title title={"Infografis"} />
                <div className="mx-auto w-full bg-white border border-gray-200 rounded-lg shadow sm:py-8 dark:bg-gray-800 dark:border-gray-700">
                    <ul
                        role="list"
                        className="flex flex-wrap justify-center gap-4"
                    >
                        {dataInfographic.map((item, index) => (
                            <li className="w-[200px] h-[300px]" key={index}>
                                <a href={item.dl}>
                                    <img src={item.img} alt={item.title} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                <Pagination
                    showTotal={(total, range) =>
                        `Menampilkan ${range[0]}-${range[1]} dari ${total} items`
                    }
                    defaultCurrent={currentPage}
                    total={totalData}
                    onChange={handlePageChange}
                    showSizeChanger={false}
                    className="font-semibold text-gray-900 dark:text-white text-center mt-5"
                />
            </Container>
        </Layout>
    );
}
