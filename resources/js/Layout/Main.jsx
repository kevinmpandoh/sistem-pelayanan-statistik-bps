import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LiveChat from "../Components/Message/LiveChat";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";
import { Modal, ConfigProvider } from "antd";

export default function Layout({ children }) {
    const { auth, flash } = usePage().props;
    // const [showModal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const isFirstVisit = localStorage.getItem("visited") === null;

        if (isFirstVisit) {
            localStorage.setItem("visited", "true");
            // setShowModal(true);
            setIsModalOpen(true);
        } else {
            // setShowModal(false);
            setIsModalOpen(false);
        }

        window.addEventListener("beforeunload", () => {
            localStorage.removeItem("visited");
        });

        return () => {
            window.removeEventListener("beforeunload", () => {
                localStorage.removeItem("visited");
            });
        };
    }, []);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    return (
        <main className="bg-[#eef0f2]">
            <>
                {flash.message &&
                    Swal.fire({
                        title: flash.message,
                        icon: "success",
                        showConfirmButton: false,
                        timer: 1500,
                        allowOutsideClick: false,
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                            window.location.reload();
                        }
                    })}
                <Navbar />

                {children}

                {auth.user && <LiveChat />}
                <Footer />

                <Modal
                    title=""
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    centered
                    footer={null}
                    width={500}
                    className="rounded-lg m-0 p-0"
                >
                    <img
                        src="/img/hero.png"
                        alt=""
                        className="scale-110 rounded-lg"
                    />
                </Modal>
            </>
        </main>
    );
}
