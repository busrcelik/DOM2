import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

//başlık elementine tıklandığında mesaj
document.querySelector("h1").addEventListener("click", function (event) {
  const message = document.createElement("p");
  message.textContent = "Header'a tıkladın!";
  //document.body.append(message);
  //mesajı header'ın altına ekleme
  event.target.parentNode.append(message);
});

//Mouseover Event : Link üzerine fare geldiğinde renk değişecek
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("mouseover", function () {
    link.style.color = "red";
  });

  //fare gidince eski rengi alacak
  link.addEventListener("mouseout", function () {
    link.style.color = "";
  });
});

//keydown event : klavye tuşlarına basıldığında birşeyler olacak
document.addEventListener("keydown", function (event) {
  console.log("Basılan tuş: ${event.key");
  alert("Basılan tış: ${event.key}");
});

// Wheel Event: Sayfayı kaydırırken bir mesaj verecek
document.addEventListener(
  "wheel",
  function (event) {
    // sayfa kaydırma hareketi duracak
    event.preventDefault();

    // Sayfanın hangi yönde kaydırıldığını kontrol et
    if (event.deltaY > 0) {
      alert("Sayfayı aşağıya kaydırdınız!");
    } else {
      alert("Sayfayı yukarıya kaydırdınız!");
    }
  },
  { passive: false }
);

//load sayfa yüklendiğinde çalışacak event
window.addEventListener("load", function () {
  this.alert("Sayfa yüklendi!");
});

//focus eventi
const input = document.getElementById("myInput");

input.addEventListener("focus", function () {
  console.log("Input alanına odaklandınız!");
});

//resize : pencere boyutu değiştirildiğinde tetiklenecek
window.addEventListener("resize", function () {
  this.alert("Pencere boyutu değiştirildi!");
});

//scroll : sayfa üzerinde kaydırma yapıldığında tetiklenir
window.addEventListener("scroll", function () {
  console.log("Sayfa kaldırıldı!");
});

//select : metin seçildiğinde tetiklenir
document.getElementById("textArea").addEventListener("select", function () {
  alert("Metin seçildi!");
});

//dbclick : bir öğeye çift tıklandığında tetiklenir
const dbclickArea = document.getElementById("dblclick-area");
dbclickArea.addEventListener("dblclick", function () {
  alert("Meetne çift tıkladınız!");
});
