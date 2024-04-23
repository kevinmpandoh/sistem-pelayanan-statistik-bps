import React from "react";
import { formatTime } from "../../utils/formatTime";

const RightChat = ({ index, message }) => {
    return (
        <li className="flex justify-end items-center my-2 mr-3" key={index}>
            <div className="flex justify-start items-start flex-col w-auto min-w-[100px] leading-1.5 px-4 py-2 shadow border-gray-200 bg-blue-600 rounded dark:bg-gray-700">
                <div className="flex space-x-2 rtl:space-x-reverse">
                    <span className="text-sm font-bold text-white dark:text-white">
                        {message.user.name}
                    </span>
                    <span className="text-sm font-normal text-white dark:text-gray-400">
                        {formatTime(message.created_at)}
                    </span>
                </div>
                <p className="text-sm font-normal py-2.5 text-white dark:text-white">
                    {message.content}
                </p>
            </div>
            <img
                className="w-8 h-8 rounded-full border border-gray-200 ml-2"
                src={`http://127.0.0.1:8000/img/${message.user.img}`}
                alt="Logo Chat"
            />
        </li>
    );
};

export default RightChat;
