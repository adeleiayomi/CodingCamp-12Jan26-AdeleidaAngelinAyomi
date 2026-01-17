// Menggunakan window.onload agar script berjalan setelah DOM siap
window.onload = function() {
    // Meminta nama user melalui prompt
    let name = prompt("Halo! Siapa nama Anda?");
    
    const userNameDisplay = document.getElementById("user-name");
    if (name && name.trim() !== "") {
        userNameDisplay.innerText = name;
    } else {
        userNameDisplay.innerText = "Guest";
    }
    
    // Menampilkan waktu saat ini
    updateTime();
};

function updateTime() {
    const timeDisplay = document.getElementById("current-time");
    const now = new Date();
    timeDisplay.innerText = "Current time : " + now.toString();
}

// Handling form submission
const form = document.getElementById("message-form");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nama = document.getElementById("input-nama").value;
    const tgl = document.getElementById("input-tgl").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const pesan = document.getElementById("input-pesan").value;

    // JavaScript Validation
    if (!nama || !tgl || !pesan) {
        alert("Mohon lengkapi semua data form!");
        return;
    }

    // Tampilkan hasil di box sebelah kanan (Slicing Result)
    const displayResult = document.getElementById("display-result");
    displayResult.innerHTML = `
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tgl}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>
    `;
    
    // Reset form setelah sukses
    form.reset();
    updateTime();
    alert("Terima kasih, pesan Anda telah terkirim!");
});