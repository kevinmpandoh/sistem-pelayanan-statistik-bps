import React from "react";

const Jumbotron = () => {
    return (
        <section className="bg-center bg-fixed bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    Sistem Pelayanan Data Statistik BPS Provinsi Sulawesi Utara
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Data yang disajikan terintegrasi dengan website
                    sulut.bps.go.id. Sahabat Data dapat memperoleh Informasi
                    Data Indikator Strategis, melihat berita tentang kegiatan
                    BPS, mengunduh Berita Resmi Statistik dan Publikasi serta
                    memperoleh Data yang disajikan secara Visual (Infografis)
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    {/* Scroll ke bawah */}
                </div>
            </div>
        </section>
    );
};

export default Jumbotron;
