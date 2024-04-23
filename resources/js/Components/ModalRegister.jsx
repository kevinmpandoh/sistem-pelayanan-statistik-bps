import React, { useState } from "react";
import { router } from "@inertiajs/react";
import { usePage } from "@inertiajs/react";
import { Alert } from "antd";

const ModalRegister = () => {
    const { errors } = usePage().props;

    console.log(errors);

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: "",
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
            router.post("/auth/register", values);
        }
        return;
    }

    return (
        <>
            <dialog id="my_modal_register" className="modal">
                <div className="modal-box lg:w-1/3 w-90% max-w-5xl  rounded md:rounded-md">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                            ✕
                        </button>
                    </form>
                    <h3 className="font-bold text-lg text-center">Daftar</h3>

                    <div className="p-4 md:p-5">
                        {errors.password && (
                            <Alert
                                message={errors.password}
                                type="error"
                                showIcon
                                closable
                            />
                        )}

                        {errors.email && (
                            <Alert
                                message={errors.email}
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
                                    htmlFor="name"
                                    name="name"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Nama Lengkap
                                </label>
                                <input
                                    autoComplete="off"
                                    type="text"
                                    name="name"
                                    id="name"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    placeholder="Nama Lengkap"
                                    required
                                    value={values.name}
                                    onChange={handleChange}
                                />
                            </div>
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
                            <div>
                                <label
                                    autoComplete="off"
                                    htmlFor="confirm_password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Konfirmasi Password
                                </label>
                                <input
                                    type="password"
                                    name="confirm_password"
                                    id="confirm_password"
                                    value={values.confirm_password}
                                    onChange={handleChange}
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg font-semibold text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >
                                Daftar
                            </button>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                                Sudah punya akun?{" "}
                                <button
                                    className="text-blue-700 hover:underline dark:text-blue-500"
                                    onClick={() => {
                                        document
                                            .getElementById("my_modal_register")
                                            .close();
                                        document
                                            .getElementById("my_modal_login")
                                            .showModal();
                                    }}
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default ModalRegister;
