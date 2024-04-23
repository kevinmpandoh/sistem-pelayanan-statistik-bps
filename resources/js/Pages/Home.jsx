import React, { useState, useEffect } from "react";
import { Head } from "@inertiajs/react";
import Layout from "../Layout/Main";
import Loading from "../Components/Loading";
import Container from "../Components/Container";
import Jumbotron from "../Components/Home/Jumbotron";
import ListNewData from "../Components/Home/ListNewData";
import CardSlider from "../Components/Home/CardSlider";
import IndicatorCard from "../Components/Home/IndicatorCard";
import LastNews from "../Components/Home/LastNews";
import Title from "../Components/Title";
import Tabs from "../Components/Home/Tabs";

export default function Home() {
    const [dataIndicator, setDataIndicator] = useState([]);
    const [activeTab, setActiveTab] = useState("publication");
    const [listNewData, setListNewData] = useState([]);
    const [dataNews, setDataNews] = useState([]);

    const handleClickTab = (tab) => {
        setActiveTab(tab);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/${activeTab}/domain/7100/page/1/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();
                setListNewData(result.data[1]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [activeTab]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/indicators/domain/7100/page/1/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();
                const Data = [];
                for (let i = 1; i <= result.data[0].pages; i++) {
                    const data = await fetch(
                        `https://webapi.bps.go.id/v1/api/list/model/indicators/domain/7100/page/${i}/key/19c264519674b0e7b537944729138479/`
                    );
                    const resultData = await data.json();
                    Data.push(...resultData.data[1]);
                }
                setDataIndicator(Data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `https://webapi.bps.go.id/v1/api/list/model/news/domain/7100/page/1/key/19c264519674b0e7b537944729138479/`
                );
                const result = await response.json();

                // const data = [];
                // result.data[1].map(async (item) => {
                //     const detailNews = await fetch(
                //         `https://webapi.bps.go.id/v1/api/view/domain/7100/model/news/lang/ind/id/${item.news_id}/key/19c264519674b0e7b537944729138479/`
                //     );
                //     const resultData = await detailNews.json();
                //     data.push(resultData.data);
                // });

                setDataNews(result.data[1]);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <Layout>
            <Head title="Beranda" />
            <Jumbotron />

            <Container>
                <Title title="Indikator Strategi" />
                <CardSlider>
                    {dataIndicator.length != 0 ? (
                        dataIndicator.map((item, index) => (
                            <IndicatorCard key={index} item={item} />
                        ))
                    ) : (
                        <Loading />
                    )}
                </CardSlider>
                <Title title="Informasi Terbaru" />
                <Tabs activeTab={activeTab} handleClickTab={handleClickTab} />
                <ListNewData listNewData={listNewData} activeTab={activeTab} />
                <Title title="Berita Terbaru Kegiatan BPS" />
                <LastNews dataNews={dataNews} />
            </Container>
        </Layout>
    );
}
