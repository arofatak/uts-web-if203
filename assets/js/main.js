// const btnMode = document.getElementById('btnMode');
//
// // Menambahkan fungsi klik pada tombol untuk mengubah tema warna sederhana
// btnMode.addEventListener('click', function() {
//     const currentBg = document.body.style.backgroundColor;
//
//     if (currentBg === 'rgb(44, 62, 80)' || currentBg === '#2c3e50') {
//         // Kembalikan ke Mode Terang
//         document.body.style.backgroundColor = '#f8f9fa';
//         document.body.style.color = '#333';
//         btnMode.textContent = 'Ubah Tema Halaman';
//     } else {
//         // Ubah ke Mode Gelap Ringan
//         document.body.style.backgroundColor = '#2c3e50';
//         document.body.style.color = '#ffffff';
//         btnMode.textContent = 'Kembalikan Tema';
//     }
// });

const btnMode = document.getElementById("btnMode");

btnMode.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        btnMode.textContext = "Kembalikan Tema";
    }
    else {
        btnMode.textContext = "Ubah Tema Halaman";
    }
});