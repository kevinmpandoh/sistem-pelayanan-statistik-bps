import React, { useState } from "react";

const Pagination = ({ pages, handlePageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const data = Array.from({ length: 50 }, (_, index) => `Item ${index + 1}`);

    // Mendapatkan indeks item awal dan akhir untuk halaman saat ini
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Tautan halaman yang akan ditampilkan
    const pageLinks = [];
    const totalPages = pages;
    const maxPageNumbersDisplayed = 5; // Jumlah tautan halaman yang akan ditampilkan di sekitar halaman saat ini

    if (totalPages <= maxPageNumbersDisplayed) {
        for (let i = 1; i <= totalPages; i++) {
            pageLinks.push(
                <li
                    key={i}
                    onClick={() => paginate(i)}
                    className={
                        currentPage === i
                            ? "z-10 flex items-center justify-center px-3 h-8 leading-tight text-yellow-600 border border-yellow-300 bg-yellow-50 hover:bg-blue-100 hover:text-yellow-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                >
                    {i}
                </li>
            );
        }
    } else {
        const halfDisplay = Math.floor(maxPageNumbersDisplayed / 2);
        let start = Math.max(1, currentPage - halfDisplay);
        let end = Math.min(start + maxPageNumbersDisplayed - 1, totalPages);

        if (end - start < maxPageNumbersDisplayed - 1) {
            start = Math.max(1, end - maxPageNumbersDisplayed + 1);
        }

        if (start > 1) {
            pageLinks.push(
                <li
                    key={1}
                    onClick={() => paginate(1)}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    1
                </li>
            );
            if (start > 2) {
                pageLinks.push(
                    <li
                        key={"ellipsis1"}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        ...
                    </li>
                );
            }
        }

        for (let i = start; i <= end; i++) {
            pageLinks.push(
                <li
                    key={i}
                    onClick={() => paginate(i)}
                    className={
                        currentPage === i
                            ? "z-10 flex items-center justify-center px-3 h-8 leading-tight text-yellow-600 border border-yellow-300 bg-yellow-50 hover:bg-blue-100 hover:text-yellow-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    }
                >
                    {i}
                </li>
            );
        }

        if (end < totalPages) {
            if (end < totalPages - 1) {
                pageLinks.push(
                    <li
                        key={"ellipsis2"}
                        className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        ...
                    </li>
                );
            }
            pageLinks.push(
                <li
                    key={totalPages}
                    onClick={() => paginate(totalPages)}
                    className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    {totalPages}
                </li>
            );
        }
    }

    return (
        <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-8 text-sm">
                <li>
                    <button
                        onClick={() => {
                            currentPage > 1
                                ? handlePageChange(currentPage - 1)
                                : handlePageChange(1);
                        }}
                        class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span class="sr-only">Previous</span>
                        <svg
                            class="w-2.5 h-2.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                    </button>
                </li>
                {pageLinks}
                {/* {Array.from({ length: pages }, (_, i) => (
                    <li key={i}>
                        <button
                            className={
                                currentPage === i + 1
                                    ? "z-10 flex items-center justify-center px-3 h-8 leading-tight text-yellow-600 border border-yellow-300 bg-yellow-50 hover:bg-blue-100 hover:text-yellow-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                    : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            }
                            // onClick={() => setCurrentPage(i + 1)}
                            onClick={() => handlePageChange(i + 1)}
                        >
                            {i + 1}
                        </button>
                    </li>
                ))} */}
                {/* {() => {
                    const items = [];
                    for (let i = m; i <= pages; i++) {
                        items.push(
                            <li key={i}>
                                <button
                                    className={
                                        currentPage === i
                                            ? "z-10 flex items-center justify-center px-3 h-8 leading-tight text-yellow-600 border border-yellow-300 bg-yellow-50 hover:bg-blue-100 hover:text-yellow-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                                            : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                                    }
                                    onClick={() => handlePageChange(i)}
                                >
                                    {i}
                                </button>
                            </li>
                        );
                    }
                    return items;
                }} */}
                <li>
                    <button
                        onClick={() => {
                            currentPage < pages
                                ? handlePageChange(currentPage + 1)
                                : handlePageChange(pages);
                        }}
                        class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                        <span class="sr-only">Next</span>
                        <svg
                            class="w-2.5 h-2.5 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
