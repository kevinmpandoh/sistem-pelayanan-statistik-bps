import React from "react";
import { formatDate } from "../../utils/formatDate";
import { Link } from "@inertiajs/react";

const ListNewData = ({ listNewData, activeTab }) => {
    if (activeTab != "infographic") {
        listNewData = listNewData.slice(0, 6);
    }
    return (
        <>
            <ul className="flex flex-row flex-1 mx-5 md:mx-5 flex-wrap justify-center gap-2 md:px-0">
                {listNewData.map((data, index) =>
                    activeTab != "infographic" ? (
                        <li className="lg:w-[49%] w-full " key={index}>
                            <Link
                                href={`/${activeTab}/${
                                    activeTab === "publication"
                                        ? data.pub_id
                                        : activeTab === "pressrelease"
                                        ? data.brs_id
                                        : "OK"
                                }`}
                                className="flex flex-col md:flex-row p-3 bg-white rounded-xl  hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                                <img
                                    className="object-cover rounded-t-lg md:w-24  md:h-32 md:rounded-none md:rounded-s-lg"
                                    src={
                                        activeTab === "publication"
                                            ? data.cover
                                            : data.thumbnail
                                    }
                                    alt=""
                                />
                                <div className="flex flex-col p-4 leading-normal ">
                                    <p className="font-normal text-gray-700 dark:text-gray-400">
                                        {formatDate(data.rl_date)}
                                    </p>
                                    <h5 className="mb-2 text-md font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {data.title}
                                    </h5>
                                </div>
                            </Link>
                        </li>
                    ) : (
                        <li key={index} className="bg-orang-500">
                            <button
                                type="button"
                                data-modal-target="default-modal"
                                data-modal-toggle="default-modal"
                            >
                                <img
                                    className="object-cover p-2 rounded-t-lg bg-white sm:h-72 max-w-sm"
                                    src={data.img}
                                    alt=""
                                />
                            </button>
                        </li>
                    )
                )}
            </ul>
        </>
    );
};

export default ListNewData;
