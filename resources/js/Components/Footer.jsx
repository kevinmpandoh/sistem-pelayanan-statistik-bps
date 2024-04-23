import React from "react";

const Footer = () => {
    return (
        <footer className="bg-[#0b2442] dark:bg-gray-900 mt-10">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="/" className="flex items-center">
                            <img
                                src="/img/bps-sulut.png"
                                className="h-16 me-3"
                                alt="FlowBite Logo"
                            />
                        </a>
                    </div>
                    <div className="flex justify-end gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-100 uppercase dark:text-white">
                                Kontak kami
                            </h2>
                            <ul className="text-gray-200 dark:text-gray-400 font-medium">
                                <li className="">
                                    <span>
                                        Badan Pusat Statistik Provinsi Sulawesi
                                        Jl. 17 Agustus Manado
                                    </span>
                                </li>
                                <li>95119</li>
                                <li>Telp (0431) 847044</li>
                                <li>Fax (0431) 842206</li>
                                <li>Email : bps7100@bps.go.id</li>
                            </ul>
                        </div>
                        <div className="px-10">
                            <h2 className=" mb-4 text-sm font-semibold text-white uppercase dark:text-white">
                                Ikuti Kami
                            </h2>
                            <ul className="text-gray-200 dark:text-gray-400 font-medium">
                                <li className="mb-2">
                                    <a
                                        href="https://github.com/themesberg/flowbite"
                                        className="hover:underline "
                                    >
                                        Facebook
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="https://discord.gg/4eeurUVvTy"
                                        className="hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="https://discord.gg/4eeurUVvTy"
                                        className="hover:underline"
                                    >
                                        Twiter
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a
                                        href="https://discord.gg/4eeurUVvTy"
                                        className="hover:underline"
                                    >
                                        Youtube
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-200 sm:text-center dark:text-gray-400">
                        © 2024{" "}
                        <a href="/" className="hover:underline">
                            Badan Pusat Statistik Provinsi Sulawesi Utara™
                        </a>
                        . All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0">
                        <a
                            href="https://www.facebook.com/bpsprovsulut/"
                            className="text-gray-200 hover:text-gray-900 dark:hover:text-white"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Facebook page</span>
                        </a>
                        <a
                            href="https://instagram.com/bpsprovsulut"
                            className="text-gray-200 hover:text-gray-900 dark:hover:text-white ms-5"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 21 16"
                            >
                                <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z" />
                            </svg>
                            <span className="sr-only">Instagram community</span>
                        </a>
                        <a
                            href="https://twitter.com/bpsprovsulut?s=80"
                            className="text-gray-200 hover:text-gray-900 dark:hover:text-white ms-5"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 17"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Twitter page</span>
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCScPiQ0nJdYhrs91wHKTjWA"
                            className="text-gray-200 hover:text-gray-900 dark:hover:text-white ms-5"
                        >
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span className="sr-only">Youtube account</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>

        // <>
        //     <footer className="footer p-10 bg-[#0b2442] text-white mt-20">
        //         <nav>
        //             <h6 className="footer-title">Services</h6>
        //             <a className="link link-hover">Branding</a>
        //             <a className="link link-hover">Design</a>
        //             <a className="link link-hover">Marketing</a>
        //             <a className="link link-hover">Advertisement</a>
        //         </nav>
        //         <nav>
        //             <h6 className="footer-title">Company</h6>
        //             <a className="link link-hover">About us</a>
        //             <a className="link link-hover">Contact</a>
        //             <a className="link link-hover">Jobs</a>
        //             <a className="link link-hover">Press kit</a>
        //         </nav>
        //         <nav>
        //             <h6 className="footer-title">Legal</h6>
        //             <a className="link link-hover">Terms of use</a>
        //             <a className="link link-hover">Privacy policy</a>
        //             <a className="link link-hover">Cookie policy</a>
        //         </nav>
        //     </footer>
        //     <footer className="footer px-10 py-4 border-t bg-[#0b2442] text-white border-gray-600">
        //         <aside className="items-center grid-flow-col">
        //             <svg
        //                 width="24"
        //                 height="24"
        //                 viewBox="0 0 24 24"
        //                 xmlns="http://www.w3.org/2000/svg"
        //                 fillRule="evenodd"
        //                 clipRule="evenodd"
        //                 className="fill-current"
        //             >
        //                 <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
        //             </svg>
        //             <p>
        //                 ACME Industries Ltd. <br />
        //                 Providing reliable tech since 1992
        //             </p>
        //         </aside>
        //         <nav className="md:place-self-center md:justify-self-end">
        //             <div className="grid grid-flow-col gap-4">
        //                 <a>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24"
        //                         className="fill-current"
        //                     >
        //                         <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        //                     </svg>
        //                 </a>
        //                 <a>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24"
        //                         className="fill-current"
        //                     >
        //                         <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        //                     </svg>
        //                 </a>
        //                 <a>
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         width="24"
        //                         height="24"
        //                         viewBox="0 0 24 24"
        //                         className="fill-current"
        //                     >
        //                         <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        //                     </svg>
        //                 </a>
        //             </div>
        //         </nav>
        //     </footer>
        // </>
    );
};

export default Footer;
