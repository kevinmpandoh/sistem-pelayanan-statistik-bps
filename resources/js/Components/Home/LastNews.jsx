import { Link } from "@inertiajs/react";
import React from "react";
import { formatDate } from "../../utils/formatDate";

const LastNews = ({ dataNews }) => {
    dataNews = dataNews.slice(0, 5);
    return (
        <>
            <ul className="flex lg:flex-row flex-col justify-content flex-1 gap-2 w-full px-7">
                {dataNews.map((data, index) => (
                    <li
                        className="md:mx-0 mx-5 bg-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 "
                        key={index}
                    >
                        <Link href={`/news/${data.news_id}`}>
                            <img
                                className="rounded-t-lg mx-auto overflow-hidden p-5 object-cover"
                                src={data.picture}
                                alt=""
                            />

                            <div className="p-5">
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    {formatDate(data.rl_date)}
                                </p>

                                <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                                    {data.title}
                                </h5>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            <Link
                href="/news"
                className="flex mb-5 text-blue-600 justify-center my-5 font-semibold text-md "
            >
                Lihat Semua Berita
            </Link>
        </>
    );
};

export default LastNews;
