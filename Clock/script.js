
  var isim = prompt("Adınızı giriniz.");

  if (isim !== null && isim.trim() !== "") {
    var karsilamaMesaji = document.getElementById("karsilamaMesaji");
    var saatVeGun = document.getElementById("saatVeGun");
} else {
    alert("Lütfen Geçerli bir isim giriniz.");
  }


    //Karsilama Mesajını güncellle
    karsilamaMesaji.textContent = "Merhaba, " + isim + "!";

    function viewGreeting() {
    //Anlik saat ve gün bilgisi al
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var day = now.toLocaleDateString('tr-TR');
    console.log(day);

    //Saat ve gün bilgisi güncelle
    saatVeGun.textContent =  hour + ":" + minute+ ":" + second + "---" + day;
    

    setTimeout(viewGreeting , 1000);

 
}
viewGreeting();

//sayfa yüklendiğinde karşılama ekranı gelsin
window.onload = viewGreeting;
