import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Alert } from "antd";

const ModalLogin = () => {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value;
        setValues((values) => ({
            ...values,
            [key]: value,
        }));
    }

    function handleSubmit(e) {
        // Nilai harus tidak kosong
        if (values.email || values.password) {
            e.preventDefault();
            router.post("/auth/login", values);
        }
        return;
    }

    return (
        <>
            <dialog id="my_modal_login" className="modal">
                <div className="modal-box lg:w-1/3 w-90% max-w-5xl  rounded md:rounded-md">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg text-center">Login</h3>

                    <div className="p-4 md:p-5">
                        {errors.email && (
                            <Alert
                                message="Email atau Password salah!"
                                type="error"
                                showIcon
                                closable
                            />
                        )}
                        <form
                            className="space-y-4 mt-2"
                            action="#"
                            onSubmit={handleSubmit}
                        >
                            <div>
                                <label
                                    htmlFor="email"
                                    name="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Email
                                </label>
                                <input
                                    autoComplete="off"
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="name@example.com"
                                    required
                                    value={values.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label
                                    autoComplete="off"
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <div className="flex justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input
                                            id="remember"
                                            type="checkbox"
                                            defaultValue=""
                                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                                            required=""
                                        />
                                    </div>
                                    <label
                                        htmlFor="remember"
                                        className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        Ingat saya
                                    </label>
                                </div>
                                <a
                                    href="#"
                                    className="text-sm text-blue-700 hover:underline dark:text-blue-500"
                                >
                                    lupa Password?
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-semibold text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Masuk
                            </button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Belum punya akun?{" "}
                                <button
                                    type="button"
                                    className="text-blue-700 hover:underline dark:text-blue-500"
                                    onClick={() => {
                                        document
                                            .getElementById("my_modal_login")
                                            .close();
                                        document
                                            .getElementById("my_modal_register")
                                            .showModal();
                                    }}
                                >
                                    Daftar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ModalLogin;
