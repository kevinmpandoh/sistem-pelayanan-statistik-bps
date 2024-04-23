import React, { useState, useEffect } from "react";
import Layout from "../Layout/Main";
import Container from "../Components/Container";
import { Head } from "@inertiajs/react";
import CardList from "../Components/CardList";
import Breadcrumb from "../Components/Breadcrumb";
import Title from "../Components/Title";

export default function News() {
    const [dataNews, setDataNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalData, setTotalData] = useState(10);

    function handlePageChange(page) {
        setCurrentPage(page);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/news/domain/7100/page/${currentPage}/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();
                setDataNews(result.data[1]);
                setTotalData(result.data[0].total);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [currentPage]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(
    //                 `https://webapi.bps.go.id/v1/api/list/model/news/domain/7100/page/1/key/19c264519674b0e7b537944729138479/`
    //             );
    //             const result = await response.json();

    //             for (let i = 0; i < result.data[1].length; i++) {
    //                 const detailNews = await fetch(
    //                     `https://webapi.bps.go.id/v1/api/view/domain/7100/model/news/lang/ind/id/${result.data[1][i].news_id}/key/19c264519674b0e7b537944729138479/`
    //                 );
    //                 const resultData = await detailNews.json();
    //                 result.data[1][i].picture = resultData.data.picture;
    //             }

    //             console.log("Resultt", result.data[1]);

    //             // result.data[1].map(async (item) => {
    //             //     let dataImage = [];
    //             //     const detailNews = await fetch(
    //             //         `https://webapi.bps.go.id/v1/api/view/domain/7100/model/news/lang/ind/id/${item.news_id}/key/19c264519674b0e7b537944729138479/`
    //             //     );
    //             //     const resultData = await detailNews.json();
    //             //     let tes = resultData.data.picture;
    //             //     dataImage.push(tes);
    //             //     // dataImage.push(resultData.data.picture);
    //             // });
    //             setNewsImages(dataImage);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };

    //     fetchData();
    // }, []);

    return (
        <Layout>
            <Head title="Berita" />
            <Container>
                <Breadcrumb menu="news" />
                <Title title="Berita" />

                <CardList
                    data={dataNews}
                    handlePageChange={handlePageChange}
                    totalData={totalData}
                    currentPage={currentPage}
                    menu="news"
                />
            </Container>
        </Layout>
    );
}
