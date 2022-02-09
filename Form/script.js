function inputan() {
  let nama = document.getElementById("nama").value;
  let warnama = "* Masukkan Nama Lengkap !";
  if (nama == "") {
    document.getElementById("warnama").innerHTML = warnama;

    console.log(warnama);
  } else {
    localStorage.setItem("hasil-nama", nama);
  }

  let angkatan = document.getElementById("angkatan").value;
  let warangkatan = "* Masukkan Tahun Angkatan !";
  if (angkatan == "") {
    document.getElementById("warangkatan").innerHTML = warangkatan;
    console.log(warangkatan);
  } else {
    localStorage.setItem("tahun-angkatan", angkatan);
  }

  let alasan = document.getElementById("alasan").value;
  let waralasan = "* Masukkan Alasan Anda Masuk UKM K.L.O.S.O !";
  if (alasan == "") {
    document.getElementsByClassName("alamat").innerHTML = waralasan;
    console.log(waralasan);
  } else {
    localStorage.setItem("hasil-alasan", alasan);
  }

  let foto = document.getElementById("foto");
  // console.log(foto.files.name)
  let warfoto = "* Masukkan Foto Anda !";
  if (foto.files.length <= 0) {
    document.getElementsByClassName("foto").innerHTML = warfoto;
    console.log(warfoto);
  } else {
    localStorage.setItem("image", foto.files.name);
  }
}

function pilihanradio() {
  var jurus = "";
  var pilihan = "";
  var pilih = document.getElementsByName("jurusan");
  for (i = 0; i < pilih.length; i++) {
    if (pilih[i].checked) jurus = pilih[i].value;
  }
  localStorage.setItem("pilihan-jurusan", jurus);

  var pilih = document.getElementsByName("gender");
  for (i = 0; i < pilih.length; i++) {
    if (pilih[i].checked) pilihan = pilih[i].value;
  }
  localStorage.setItem("hasil-jenis-kelamin", pilih);
}
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  inputan();
  pilihanradio();
  // window.location.href = "isi.html"
});
