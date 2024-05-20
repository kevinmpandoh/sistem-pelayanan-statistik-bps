import React from "react";

const DropdownFilter = () => {
    return (
        <>
            <form className="ml-5">
                <select
                    id="large"
                    class="block w-full px-4 py-3 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option selected>Pilih Tahun</option>
                    <option value="US">2024</option>
                    <option value="CA">2023</option>
                    <option value="FR">2022</option>
                    <option value="DE">2021</option>
                </select>
            </form>
        </>
    );
};

export default DropdownFilter;
