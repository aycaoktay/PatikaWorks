//Create a "close" button append it to each list item
var myNodeList = document.getElementsByTagName("li");
var i ;
for(i=0 ; i<myNodeList.length ; i++){
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className ="close";
    span.appendChild(txt);
    myNodeList[i].appendChild(span);
}
//Kapat butonuna tıkla aktif liste elemanında
var close = document.getElementsByClassName("close");
var i ;
for(i=0 ; i< close.length ; i++){
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.display = "none";

    }
}
//Liste elemanlarının üstünü çizme
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);
// Ekle butonuna tıkladığında yeni liste elemanı oluşturma
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("wtd").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("wtd").value = "";
  
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }
