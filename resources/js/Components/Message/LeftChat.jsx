import React from "react";
import { formatTime } from "../../utils/formatTime";

const LeftChat = ({ message, index }) => {
    return (
        <li className="flex items-center gap-2.5 my-1" key={index}>
            <img
                className="w-8 h-8 rounded-full border border-gray-200"
                src={`img/${message.user.img}`}
                alt="Image Chat"
            />

            <div className="flex flex-col w-auto max-w-[320px] leading-1.5 p-4 shadow border-gray-200 bg-white rounded dark:bg-gray-700">
                <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {message.user.name}
                    </span>
                    <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                        {formatTime(message.created_at)}
                    </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                    {message.content}
                </p>
            </div>
        </li>
    );
};

export default LeftChat;
