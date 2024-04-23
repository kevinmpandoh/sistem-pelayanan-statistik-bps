export function formatTime(isoString) {
    const date = new Date(isoString);

    const hours = String(date.getHours()).padStart(2, "0"); // Mendapatkan jam (dipad dengan nol jika hanya satu digit)
    const minutes = String(date.getMinutes()).padStart(2, "0"); // Mendapatkan menit (dipad dengan nol jika hanya satu digit)

    return `${hours}:${minutes}`; // Mengembalikan format jam:menit
}
