import { Skeleton } from "antd";
import React from "react";

const Loading = () => {
    return (
        <div
            role="status"
            class="flex items-center flex-row justify-center h-72 w-42 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
        >
            <span class="sr-only">Loading...</span>
        </div>
    );
};

export default Loading;
