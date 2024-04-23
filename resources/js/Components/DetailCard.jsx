import React from "react";
import parse from "html-react-parser";

const DetailCard = ({ data, menu }) => {
    // Fungsi untuk menambahkan className di tag UL
    function addClassName(text) {
        // Menggunakan regex untuk menemukan tag UL dan menambahkan className
        const modifiedHtml = text.replace(
            /<ul>/g,
            '<ul className="space-y-5 mt-2 text-justify text-gray-800 list-disc list-inside dark:text-gray-400">'
        );
        return modifiedHtml;
    }

    return (
        <div class="block w-full p-6 bg-white border border-gray-200 rounded-lg shadow  dark:bg-gray-800 dark:border-gray-700 ">
            <h5 class="mb-5 text-xl md:text-2xl font-bold tracking-tight text-gray-700 dark:text-white">
                {data.title}
            </h5>
            <div className="flex justify-center flex-col md:flex-row ">
                <img
                    src={
                        menu === "publication"
                            ? data.cover
                            : menu === "pressrelease"
                            ? data.thumbnail
                            : data.picture
                    }
                    alt=""
                    className="md:max-w-72 object-cover md:max-h-80"
                />
                <div className="my-5 ml-5">
                    {menu === "publication" && (
                        <div className="flex flex-row gap-10">
                            <ul>
                                <li>Nomor Katalog</li>
                                <li>Nomor Publikasi</li>
                                <li>ISSN/ISBN</li>
                                <li>Ukuran</li>
                                <li>Tanggal Rilis</li>
                            </ul>
                            <ul>
                                <li>: {data.kat_no}</li>
                                <li>: {data.pub_no}</li>
                                <li>: {data.issn}</li>
                                <li>: {data.size}</li>
                                <li>: {data.rl_date}</li>
                            </ul>
                        </div>
                    )}
                    <div className="my-5">
                        {data.abstract ? (
                            <>
                                <h1 className="font-bold ">Abstrak</h1>
                                <p class="font-normal  text-gray-700 dark:text-gray-400">
                                    {menu == "pressrelease"
                                        ? parse(
                                              addClassName(parse(data.abstract))
                                          )
                                        : parse(data.abstract)}
                                </p>
                            </>
                        ) : (
                            <p class="font-normal text-justify text-gray-700 dark:text-gray-400">
                                {/* {parse(processedHtml)} */}
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: parse(data.news),
                                    }}
                                />
                            </p>
                        )}

                        <div className="flex justify-start mt-5">
                            {data.pdf && (
                                <a
                                    href={data.pdf}
                                    class="flex text-white justify-center items-center font-semibold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="w-6 h-6 text-white mr-2"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                                        />
                                    </svg>
                                    Unduh Publikasi
                                </a>
                            )}

                            {data.slide && (
                                <a
                                    href={data.slide}
                                    class="flex justify-center items-center text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                                >
                                    <svg
                                        className="w-6 h-6 "
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 15v2a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-2m-8 1V4m0 12-4-4m4 4 4-4"
                                        />
                                    </svg>{" "}
                                    Unduh Slide
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailCard;
