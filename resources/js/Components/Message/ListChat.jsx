import React from "react";
import { truncateText } from "../../utils/truncateText";

const ListChat = ({ handleChatDetail, conversation, key }) => {
    return (
        <button
            type="button"
            className="flex items-center justify-start w-[95%] mt-2 bg-white py-3 shadow rounded-md dark:hover:bg-meta-4 "
            key={key}
            onClick={() => handleChatDetail(conversation.id)}
        >
            <div className="relative h-14 w-14 rounded-full mx-2 ">
                <img src={`http://127.0.0.1:8000/img/default.png`} alt="User" />
            </div>

            <div className="flex  items-start justify-start">
                <div className="flex flex-col justify-start items-start">
                    <h5 className="font-semibold text-black dark:text-white">
                        {conversation.user2.name}
                    </h5>
                    <p>
                        <span className="text-sm text-gray-600  dark:text-white">
                            {truncateText(
                                conversation.messages[
                                    conversation.messages.length - 1
                                ].content,
                                20
                            )}
                        </span>
                    </p>
                </div>
            </div>
        </button>
    );
};

export default ListChat;
