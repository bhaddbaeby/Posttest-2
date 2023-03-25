// console.log("Pertemuan 3")
const btn = document.getElementById("button");
btn.onclick = login;


function login (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;
    
    
    if( email == "utariw@gmail.com" && pwd == "uutwdh0101") {
        alert("Kamu Berhasil Login");
        window.location.href = "uacademy.html";
    } else {
        alert("Gagal Login");
    }
    register();

}

function register() {
    // Mendapatkan nilai input dari form register
    const email = document.getElementById("email").value;
    const pwd = document.getElementById("pwd").value;

    // Membuat array untuk menyimpan informasi akun
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Mengecek apakah username sudah terdaftar
    const isDuplicate = users.some((user) => user.email === email);

    if (isDuplicate) {
        alert("Username sudah terdaftar!");
        return false;
    }

    users.push({ email, pwd });

    
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registrasi berhasil!");
    return true;
}
