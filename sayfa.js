let ziyaretciBilgisi = prompt(`Lütfen sistemde gözükmesini istediğiniz adınızı giriniz!`)
if(ziyaretciBilgisi.trim() == ``){
    alert(`Kullanıcı bilginizi eksiksiz giriniz!`)
    window.location.reload()
}

let kullaniciAdi = document.querySelector(`#kullaniciAdi`)
kullaniciAdi.textContent = `Merhaba, ${ziyaretciBilgisi}! Hoşgeldin!`

let saat = document.querySelector(`#saat`)
let dakika = document.querySelector(`#dakika`)
let saniye = document.querySelector(`#saniye`)
 
function tarihSaat() {
    const d = new Date();
    let dSaat = d.getHours();
    let dDakika = d.getMinutes();
    let dSaniye = d.getSeconds();

    saat.textContent = dSaat
    dakika.textContent = dDakika
    saniye.textContent = dSaniye
}

setInterval(tarihSaat, 1000); 