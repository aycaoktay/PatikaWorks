//Çoklu koşul if , else if , else
let userName = prompt("Kullanici Adiniz : ");
let age = prompt("Yasiniz :");

if (userName && age >= 18) {
  console.log("ehliyet alabilirsiz.");
} else if (!userName) {
  console.log("Kullanici Adiniz Yok");
} else if (!(age >= 18)) {
  console.log("Yas Bilgisi Yok veya 18 Yasindan Kucuksunuz");
}

// Ternary operatoru :
// kosul ? dogruysa : yanlissa
/*
let userName = prompt("Kullanıcı Adiniz:");
let info = document.querySelector("#info")

info.innerHTML = ${userName ? userName : "Kullanici bilginiz bulunamadı :("} */

