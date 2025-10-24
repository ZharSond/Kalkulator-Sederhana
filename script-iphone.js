function appendValue(value) {
    const display = document.getElementById("display");

    // Cegah memasukkan lebih dari satu operator berturut-turut
    const lastChar = display.value.slice(-1);
    if ("+-*/.-xX÷".includes(lastChar) && "+-*/.-xX÷".includes(value)) return;

    display.value += value;
}

function persen() {
    const display = document.getElementById("display");

    // Konversi nilai input menjadi angka, bagi 100, lalu ubah kembali ke string
    display.value = (parseFloat(display.value) / 100).toString(); 
}


function clearDisplay() {
    document.getElementById("display").value = ""; // Menghapus konten layar
}

function calculate() {
    let display = document.getElementById("display");
    const hasil=display.value.replace("x","*").replace("÷","/"); //mengganti x dengan asteris(*)
    try {
        display.value = eval(hasil); // Menghitung ekspresi matematika
    } catch {
        display.value = "Error"; // Jika ada kesalahan, tampilkan "Error"
    }
}

function hapusTerakhir() {
    let input = document.getElementById("display"); // Ambil input
    input.value = input.value.slice(0, -1); // Hapus karakter terakhir
}

// Tangkap input keyboard
document.addEventListener("keydown", function(event) {
    const display = document.getElementById("display");
    const allowedKeys = /^[0-9+\-*/.]$/; // Hanya angka dan operator

    if (event.key.match(allowedKeys)) {
        appendValue(event.key);
    } else if (event.key === "Enter" || event.key === "=") {
        calculate();
        event.preventDefault(); // Mencegah efek bawaan tombol Enter
    } else if (event.key === "Backspace") {
        hapusTerakhir();
        event.preventDefault(); // Mencegah efek bawaan tombol Backspace
    }
});

function toggleSign() {
    const display = document.getElementById("display");
    
    // Jika input kosong, tidak melakukan apa-apa
    if (display.value === "") return;

    // Konversi ke angka
    let value = parseFloat(display.value);

    // Jika bukan angka, hentikan fungsi
    if (isNaN(value)) return;

    // Ubah nilai menjadi negatif atau positif
    display.value = value * -1;
}

