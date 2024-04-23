import React from "react";
import { Link } from "@inertiajs/react";

const Breadcrumb = ({ menu, submenu }) => {
    return (
        <nav className="flex mt-24 mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center  space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <Link
                        href="/"
                        className="inline-flex items-center text-md font-semibold text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    >
                        Beranda
                    </Link>
                </li>

                <li>
                    <div className="flex items-center">
                        <svg
                            className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <Link
                            href={`/${menu}`}
                            className="ms-1 text-md font-semibold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                        >
                            {menu === "publication"
                                ? "Publikasi"
                                : menu === "pressrelease"
                                ? "Berita Resmi Statistik"
                                : menu === "infographic"
                                ? "Infografis"
                                : menu === "news"
                                ? "Berita"
                                : ""}
                        </Link>
                    </div>
                </li>
                {submenu && (
                    <li>
                        <div className="flex items-center ">
                            <svg
                                className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 6 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="m1 9 4-4-4-4"
                                />
                            </svg>
                            <Link
                                href={`#`}
                                className="ms-1 text-md font-semibold text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                            >
                                {submenu}
                            </Link>
                        </div>
                    </li>
                )}
            </ol>
        </nav>
    );
};

export default Breadcrumb;
