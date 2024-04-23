import { Link } from "@inertiajs/react";
import { Pagination } from "antd";
import React from "react";
import { formatDate } from "../utils/formatDate";
import parse from "html-react-parser";
import { truncateText } from "../utils/truncateText";

const CardList = ({ data, currentPage, handlePageChange, totalData, menu }) => {
    return (
        <>
            <ul className="flex flex-row flex-1 mx-5 md:mx-5 flex-wrap justify-center gap-2 md:px-0">
                {data.map((data, index) => (
                    <li className="w-full " key={index}>
                        <Link
                            href={`/${menu}/${
                                menu === "publication"
                                    ? data.pub_id
                                    : menu === "pressrelease"
                                    ? data.brs_id
                                    : data.news_id
                            }`}
                            className="flex flex-col h-auto md:flex-row p-3 bg-white  rounded-xl  hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <img
                                className="object-cover mx-auto lg:m-0 rounded-t-lg h-44 lg:h-64  lg:w-44 md:rounded-none md:rounded-s-lg "
                                src={
                                    data.thumbnail
                                        ? data.thumbnail
                                        : data.cover
                                        ? data.cover
                                        : data.picture
                                }
                                alt=""
                            />
                            <div className="flex flex-col p-4 leading-normal ">
                                <p className="font-normal text-gray-700 dark:text-gray-400">
                                    {formatDate(data.rl_date)}
                                </p>
                                <h5 className="mb-2 lg:text-xl text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {data.title}
                                </h5>
                                <p className="hidden md:block">
                                    {data.abstract
                                        ? parse(data.abstract)
                                        : data.news
                                        ? truncateText(data.news, 300)
                                        : ""}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
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
        </>
    );
};

export default CardList;
