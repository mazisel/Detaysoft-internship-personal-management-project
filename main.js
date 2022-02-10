var ad = document.querySelector("#adi")
var soyad = document.querySelector("#soyadi")
var nu = document.querySelector("#numara")
var btn = document.querySelector("#kaydetbtn")











btn.addEventListener("click", function f1() {



    if (ad.value == "") {
        ad.style.borderColor = "red";
    }
    if (soyad.value == "") {
        soyad.style.borderColor = "red";
    }
    if (nu.value == "") {
        nu.style.borderColor = "red";
    }
    if (nu.value >= 5529999999 || nu.value <= 5050000000) {
        alert("Geçersiz numara girildi!")
        nu.style.borderColor = "red";
        satirduzenle();
    }


    if (ad.value != "" && soyad.value != "" && nu.value != "") {


        ad.style.borderColor = "black";
        soyad.style.borderColor = "black";
        nu.style.borderColor = "black";

        kytok();
        eklemetest();


    } else {
        kytred();
    }
})

ad.addEventListener("click", function renk() {
    ad.style.borderColor = "black";
    kytred();

})
soyad.addEventListener("click", function renk() {
    soyad.style.borderColor = "black";
    kytred();
})
nu.addEventListener("click", function renk() {
    nu.style.borderColor = "black";
    kytred();
})


function kytok() {
    btn.style.backgroundColor = "#10b62b";
    btn.style.fontSize = "15px"
    btn.textContent = "Kayıt Başarılı!"
}


function kytred() {
    if (btn.textContent != "EKLE") {
        ad.value = "";
        soyad.value = "";
        nu.value = "";
    }

    btn.style.backgroundColor = "black";
    btn.style.fontSize = "25px"
    btn.textContent = "EKLE"


}


function eklemetest() {
    var tablo = document.getElementById("tabloalt");
    var satir = tablo.insertRow(1);
    var hucre1 = satir.insertCell(0);
    var hucre2 = satir.insertCell(1);
    var hucre3 = satir.insertCell(2);
    var hucre4 = satir.insertCell(3);
    hucre1.innerHTML = ad.value;
    hucre2.innerHTML = soyad.value;
    hucre3.innerHTML = nu.value;
    hucre4.innerHTML = "<button onclick= satirsil(this); class='islembtn' id='duzenle'>Sil</button>" +
        "<button onclick= satirduzenle(this) class='islembtn' id='sil'>Düzenle</button>";


}


function satirsil(index) {

    var index = index.parentNode.parentNode.rowIndex;
    document.getElementById("tabloalt").deleteRow(index);


}



function satirduzenle(index) {




    var index = index.parentNode.parentNode.rowIndex;
    var x = document.getElementById("tabloalt").rows[index].cells;

    var deger1 = x[0].textContent;
    var deger2 = x[1].textContent;
    var deger3 = x[2].textContent;




    console.log(deger1)
    console.log(deger2)
    console.log(deger3)



    x[0].innerHTML = "<input class='sonrakiler' id='adduzenle'></input>";
    x[1].innerHTML = "<input class='sonrakiler' id='soyadduzenle'></input>";
    x[2].innerHTML = "<input class='sonrakiler' input type='number' id='nuduzenle'></input>";
    x[3].innerHTML = "<button onclick= kaydet(this);  id='kaydet2'>Kaydet</button>"


    x[0].getElementsByTagName("input")[0].value = deger1;
    x[1].getElementsByTagName("input")[0].value = deger2;
    x[2].getElementsByTagName("input")[0].value = deger3;



}






function kaydet(index) {
    var index = index.parentNode.parentNode.rowIndex;
    var x = document.getElementById("tabloalt").rows[index].cells;

    var degisendeger1 = document.getElementById("adduzenle").value;
    var degisendeger2 = document.getElementById("soyadduzenle").value;
    var degisendeger3 = document.getElementById("nuduzenle").value;

    console.log("kaydet butonunu gördü")



    if (degisendeger1 == "" || degisendeger2 == "" || degisendeger3 == "") {
        if (degisendeger1 == "") {
            alert("Ad alanı boş bırakılamaz.")
        }
        if (degisendeger2 == "") {
            alert("Soyad alanı boş bırakılamaz.")
        }
        if (degisendeger3 == "") {
            alert("Numara alanı boş bırakılamaz.")
        }




        satirduzenle();
    }
    if (degisendeger3 >= 5529999999 || degisendeger3 <= 5040000000) {
        alert("Geçersiz numara girildi!")
        satirduzenle();
    }
    x[0].innerHTML = degisendeger1;
    x[1].innerHTML = degisendeger2;
    x[2].innerHTML = degisendeger3;
    x[3].innerHTML = "<button onclick= satirsil(this); class='islembtn' id='duzenle'>Sil</button>" +
        "<button onclick= satirduzenle(this) class='islembtn' id='sil'>Düzenle</button>";






}


duzenlebtn.addEventListener("click", function a() {


    alert("testduzenlebtn")
})