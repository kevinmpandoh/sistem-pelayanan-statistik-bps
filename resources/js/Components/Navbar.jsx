import React, { useState } from "react";
import { Link, usePage, router } from "@inertiajs/react";
import { Divider, Drawer, Space } from "antd";
import ModalLogin from "./ModalLogin";
import ModalRegister from "./ModalRegister";

export default function Navbar() {
    const { component } = usePage();
    const { auth } = usePage().props;
    const [open, setOpen] = useState(false);
    console.log(component);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        setOpen(false);
        router.post("/auth/logout");
    };

    return (
        <>
            <Drawer
                className="text-white bg-white"
                onClose={onClose}
                open={open}
                style={{ backgroundColor: "#fff", color: "#333" }}
                extra={
                    <Space>
                        {auth.user && (
                            <div className="">
                                <div className="flex text-sm text-center items-center">
                                    <h1>{auth.user.name}</h1>

                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={`img/${auth.user.img}`}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Space>
                }
            >
                <div>
                    <ul className="">
                        <li>
                            <Link
                                href="/"
                                className={`${
                                    component.includes("Home")
                                        ? "block py-2 p-3 gap-1 font-bold text-yellow-600 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                        : "block py-2 px-3 font-bold text-gray-800 rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }`}
                            >
                                <span>Beranda</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/publication"
                                className={`${
                                    component.includes("Publication")
                                        ? "block py-2 p-3 gap-1 font-bold text-yellow-600 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                        : "block py-2 px-3 font-bold text-gray-800 rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }`}
                            >
                                Publikasi
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pressrelease"
                                className={`${
                                    component.includes("Pressrelease")
                                        ? "block py-2 p-3 gap-1 font-bold text-yellow-600 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                        : "block py-2 px-3 font-bold text-gray-800 rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }`}
                            >
                                <span>Berita Resmi Statistik</span>
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/infographic"
                                className={`${
                                    component.includes("Infographic")
                                        ? "block py-2 p-3 gap-1 font-bold text-yellow-600 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                        : "block py-2 px-3 font-bold text-gray-800 rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }`}
                            >
                                Infografis
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/news"
                                className={`${
                                    component.includes("News")
                                        ? "block py-2 p-3 gap-1 font-bold text-yellow-600 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                        : "block py-2 px-3 font-bold text-gray-800 rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                }`}
                            >
                                Berita
                            </Link>
                        </li>

                        <li>
                            <Divider className="mt-1" />
                            {!auth.user ? (
                                <button
                                    type="button"
                                    onClick={() => {
                                        onClose();
                                        document
                                            .getElementById("my_modal_login")
                                            .showModal();
                                    }}
                                    className="w-full text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Login
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="w-full text-white font-bold bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-md px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Logout
                                </button>
                            )}
                        </li>
                    </ul>
                </div>
            </Drawer>

            <button type="primary">Open</button>
            <nav className="bg-[#0b2442] dark:bg-gray-900 fixed w-full z-20 top-0 start-0  dark:border-gray-600 transition-colors duration-500 ease-in-out">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="https://flowbite.com/"
                        className="flex items-center space-x-3 rtl:space-x-reverse"
                    >
                        <img
                            src="/img/logo-bps.png"
                            alt="Logo BPS"
                            className="w-14"
                        />

                        <span className="self-center lg:text-lg text-sm font-semibold whitespace-nowrap text-white dark:text-white italic font-arial uppercase">
                            <h5>
                                Badan Pusat Statistik <br /> Provinsi Sulawesi
                                Utara
                            </h5>
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        {!auth.user ? (
                            <button
                                type="button"
                                className="text-white hidden lg:block bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                onClick={() =>
                                    document
                                        .getElementById("my_modal_login")
                                        .showModal()
                                }
                            >
                                Login
                            </button>
                        ) : (
                            <div className="flex justify-center items-center">
                                <span className="text-gray-200 text-sm font-semibold items-center mr-2 hidden lg:block">
                                    {auth.user.name}
                                </span>
                                <div className="dropdown dropdown-end hidden lg:block">
                                    <div
                                        tabIndex={0}
                                        role="button"
                                        className="btn btn-ghost btn-circle avatar"
                                    >
                                        <div className="w-10 rounded-full border-2 border-gray-500">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={`img/${auth.user.img}`}
                                            />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="mt-3 z-[1] divide-y divide-gray-100 p-2 shadow menu menu-md dropdown-content bg-base-100 rounded-lg w-52"
                                    >
                                        <li>
                                            <button
                                                type="button"
                                                onClick={handleLogout}
                                            >
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        )}
                        <button
                            className="lg:hidden text-white"
                            onClick={showDrawer}
                            type="button"
                        >
                            <svg
                                className="w-5 h-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 17 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 1h15M1 7h15M1 13h15"
                                />
                            </svg>
                        </button>
                    </div>
                    <div
                        className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 "
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-none lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-none dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link
                                    href="/"
                                    className={`${
                                        component.includes("Home")
                                            ? "block py-2 p-3 gap-1 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                            : "block py-2 px-3 font-semibold text-white rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    }`}
                                >
                                    <span>Beranda</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/publication"
                                    className={`${
                                        component.includes("Publication")
                                            ? "block py-2 p-3 gap-1 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                            : "block py-2 px-3 font-semibold text-white rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    }`}
                                >
                                    Publikasi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/pressrelease"
                                    className={`${
                                        component.includes("Pressrelease")
                                            ? "block py-2 p-3 gap-1 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                            : "block py-2 px-3 font-semibold text-white rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    }`}
                                >
                                    <span>Berita Resmi Statistik</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/infographic"
                                    className={`${
                                        component.includes("Infographic")
                                            ? "block py-2 p-3 gap-1 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                            : "block py-2 px-3 font-semibold text-white rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    }`}
                                >
                                    Infografis
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/news"
                                    className={`${
                                        component.includes("News")
                                            ? "block py-2 p-3 gap-1 font-semibold text-white bg-blue-700 rounded md:bg-transparent md:text-yellow-400 md:py-3 md:dark:text-yellow-400"
                                            : "block py-2 px-3 font-semibold text-white rounded  md:hover:bg-transparent  md:py-3 md:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                                    }`}
                                >
                                    Berita
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <ModalLogin />
            <ModalRegister />
        </>
    );
}
