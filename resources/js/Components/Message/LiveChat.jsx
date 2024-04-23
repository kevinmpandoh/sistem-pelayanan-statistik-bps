import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import { FloatButton } from "antd";
import { usePage, router } from "@inertiajs/react";
import RightChat from "./RightChat";
import LeftChat from "./LeftChat";
import { truncateText } from "../../utils/truncateText";
import ListChat from "./ListChat";

const LiveChat = () => {
    const { auth, conversations, messages } = usePage().props;
    const [showChat, setShowChat] = useState(false);
    const [userId, setUserId] = useState(auth.user.id);
    const [content, setContent] = useState("");
    const [showChatDetail, setShowChatDetail] = useState(false);
    const [conversationId, setConversationId] = useState(0);
    const [pesan, setPesan] = useState([]);

    const submitMessage = async (e) => {
        e.preventDefault();

        router.post(`/chat/${conversationId}/send`, {
            content,
        });
        setContent("");
    };

    const handleChatDetail = (id) => {
        setConversationId(id);
        setShowChatDetail(true);
    };

    useEffect(() => {
        if (conversationId) {
            const fetchMessages = async () => {
                const response = await fetch(
                    `http://localhost:8000/api/messages/${conversationId}`
                );
                const data = await response.json();
                setPesan(data);
            };
            fetchMessages();
        }
    }, [conversationId]);

    return (
        <>
            {!showChat ? (
                <FloatButton
                    onClick={() => setShowChat(!showChat)}
                    className="right-5 md:right-10 hover:bg-gray-50"
                    style={{
                        // right: 10,
                        height: 60,
                        width: 60,
                    }}
                    tooltip={<div>Live Chat</div>}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                            />
                        </svg>
                    }
                />
            ) : (
                <div className="fixed bottom-10 right-5 h-[60%] w-full max-w-sm p-4 bg-gray-50  rounded-md shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-5">
                            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
                                Live Chat
                            </h5>
                            {showChatDetail && auth.user.role_id == 1 && (
                                <button
                                    type="button"
                                    className="text-sm font-semibold text-blue-600 hover:underline dark:text-blue-500"
                                    onClick={() => {
                                        setShowChatDetail(false);
                                        setConversationId(0);
                                    }}
                                >
                                    Lihat Semua
                                </button>
                            )}
                        </div>
                        <button
                            type="button"
                            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                            onClick={() => setShowChat(false)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        id="chat-container"
                        className="flow-root w-full h-[80%] overflow-y-auto"
                        // className={
                        //     showChatDetail || conversations.length <= 1
                        //         ? "flow-root w-full h-[80%] overflow-y-auto"
                        //         : "flow-root w-full h-[90%] overflow-y-auto"
                        // }
                    >
                        <div>
                            {auth.user.role_id === 1 ? (
                                <>
                                    {conversations.length > 0 ? (
                                        <>
                                            {!showChatDetail ? (
                                                <>
                                                    {conversations.map(
                                                        (conversation, key) => (
                                                            <ListChat
                                                                key={key}
                                                                conversation={
                                                                    conversation
                                                                }
                                                                handleChatDetail={
                                                                    handleChatDetail
                                                                }
                                                            />
                                                        )
                                                    )}
                                                </>
                                            ) : (
                                                <ul>
                                                    {pesan.map((msg, index) => (
                                                        <li
                                                            key={index}
                                                            onLoad={() => {
                                                                const chatContainer =
                                                                    document.getElementById(
                                                                        "chat-container"
                                                                    );
                                                                chatContainer.scrollTop =
                                                                    chatContainer.scrollHeight;
                                                            }}
                                                        >
                                                            {msg.user_id ==
                                                            userId ? (
                                                                <RightChat
                                                                    message={
                                                                        msg
                                                                    }
                                                                    index={
                                                                        index
                                                                    }
                                                                />
                                                            ) : (
                                                                <LeftChat
                                                                    message={
                                                                        msg
                                                                    }
                                                                    index={
                                                                        index
                                                                    }
                                                                />
                                                            )}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </>
                                    ) : (
                                        <div className="flex justify-center items-center w-full mt-5">
                                            <h1 className="font-semibold text-md">
                                                Belum ada pesan
                                            </h1>
                                        </div>
                                    )}
                                </>
                            ) : (
                                <ul>
                                    {messages.map((message, index) => (
                                        <li
                                            key={index}
                                            onLoad={() => {
                                                setConversationId(
                                                    message.conversation_id
                                                );
                                                setShowChatDetail(true);

                                                const chatContainer =
                                                    document.getElementById(
                                                        "chat-container"
                                                    );
                                                chatContainer.scrollTop =
                                                    chatContainer.scrollHeight;
                                            }}
                                        >
                                            {message.user_id == userId ? (
                                                <RightChat
                                                    message={message}
                                                    index={index}
                                                />
                                            ) : (
                                                <LeftChat
                                                    message={message}
                                                    index={index}
                                                />
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                    {showChatDetail && conversationId > 0 && (
                        <form action="" onSubmit={(e) => submitMessage(e)}>
                            <div className="flex justify-between gap-5 mt-5">
                                <input
                                    type="text"
                                    id="small-input"
                                    placeholder="Tulis pesan..."
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    autoComplete="off"
                                    autoFocus
                                />

                                <button
                                    type="submit"
                                    className="px-3 py-2 text-sm font-semibold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Kirim
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            )}
        </>
    );
};

export default LiveChat;
