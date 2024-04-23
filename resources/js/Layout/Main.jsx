import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LiveChat from "../Components/Message/LiveChat";
import { usePage } from "@inertiajs/react";
import Swal from "sweetalert2";

export default function Layout({ children }) {
    const { auth, flash } = usePage().props;
    return (
        <main className="bg-[#eef0f2]">
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
        </main>
    );
}
