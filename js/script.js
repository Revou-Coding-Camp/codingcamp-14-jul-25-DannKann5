// Show welcome popup when the page loads
window.addEventListener('DOMContentLoaded', showWelcomePopup);

// Function to show a welcome popup and set the user's name
function showWelcomePopup() {
    let userName = prompt("Please enter your name:");
    if (userName && userName.trim() !== '') {
        document.getElementById('welcome-user').textContent = userName;
    }
}

document.getElementById("order-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Biar gak reload

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const product = document.getElementById("product").value;
    const quantity = document.getElementById("quantity").value;
    const address = document.getElementById("address").value.trim();

    if (!name || !email || !product || !quantity || !address) {
        alert("Lengkapi semua field dulu ya sob!");
        return;
    }

    // Format pesan WhatsApp
    const message = `Kak, pesen dong: \n
Nama: ${name} \n
Email: ${email} \n
Varian: ${getProductName(product)} \n
Jumlah: ${quantity} \n
Alamat: ${address}`;

    const phoneNumber = "621234567891"; // ganti dengan nomor WhatsApp kamu (awali 62, bukan 0)
    const waURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Buka WhatsApp
    window.open(waURL, "_blank");

    // Optional: Reset form
    document.getElementById("order-form").reset();
});

function getProductName(code) {
    switch (code) {
        case "sale-original": return "Sang Origin";
        case "sale-spicy": return "Matcha Le!";
        case "sale-cheese": return "Salkeju";
        default: return "Produk Tidak Dikenal";
    }
}
