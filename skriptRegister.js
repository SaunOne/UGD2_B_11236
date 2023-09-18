
document.getElementById("deskripsiId").value = "";
function cekKosong(data){
    if(data.nama === ""){
        return "Nama Masih Kosong";
    } else if(data.nim === ""){
        return "Nim Masih Kosong";
    } else if(data.prodi === ""){
        return "Prodi Masih Kosong";
    } else if(data.tgl === ""){
        return "Tanggal Masih Kosong";
    } else if(data.tlp === ""){
        return "No Telepon Tidak Boleh Kosong";
    } else if(data.email === ""){
        return "Email Masih Kosong";
    } else if(data.pass === ""){
        return "Password Masin Kosong";
    } else if(data.photo === ""){
        return "Foto Masih Kosong";
    } else if(!cekGender(data.gender)){
        return "Jenis Kelamin Masih Kosong";
    } else if(!cekHoby(data.hoby)){
        return "Hobi Masih Kosong";
    } else if(data.deskripsi === ""){
        return "Deskripsi Masih Kosong";
    } else {
        return "Berhasil";
    }
};

function cekGender(gender){
    
    for(let i = 0;i < gender.length;i++){
        if(gender[i].checked){
            a = true;
            break;
        } else {
            a = false;
        }
    };
    return a;
}

function cekHoby(hoby){
    
    for(let i = 0;i < hoby.length;i++){
        if(hoby[i].checked){
            a = true;
            break;
        } else {
            a = false;
        }
    };
    return a;
}


const submitButton = document.getElementById("submitId");
const resetButton = document.getElementById("resetId");
const hideButton = document.getElementById("hideId");
const passInput = document.getElementById("passId");

hideButton.addEventListener("click",function(e){
    if(hideButton.src == "http://127.0.0.1:5500/images/hide.png"){
        hideButton.src = "images/unhide.png";
        passInput.type = "text";
    } else {
        hideButton.src = "images/hide.png";
        passInput.type = "password";
    }
    
});



submitButton.addEventListener("click",function(e){
    e.preventDefault();
    let data = {
        nama: document.getElementById("namaId").value,
        nim: document.getElementById("nimId").value,
        prodi: document.getElementById("prodiId").value,
        tgl: document.getElementById("dateId").value,
        tlp: document.getElementById("tlpId").value,
        email: document.getElementById("emailId").value,
        pass: document.getElementById("passId").value,
        photo: document.getElementById("photoId").value,
        gender: document.querySelectorAll("input[name='gender']"),
        hoby: document.querySelectorAll("input[name='hoby']"),
        deskripsi: document.getElementById("deskripsiId").value,
    };
    
    if(cekKosong(data) === "Berhasil"){
        const con = confirm("Apakah Sudah Yakin Datah Benar ??");
        if(con === true){
            reset();
            alert("Data Berhasil Disimpan!!");
        }
        
    } else {
        alert(cekKosong(data));
        
    };


});

resetButton.addEventListener("click",function(e){
    e.preventDefault();
    reset();
});


function reset(){
    document.getElementById("namaId").value = "";
    document.getElementById("namaId").value = "";
    document.getElementById("nimId").value = "";
    document.getElementById("prodiId").value = "";
    document.getElementById("dateId").value = "";
    document.getElementById("tlpId").value = "";
    document.getElementById("emailId").value = "";
    document.getElementById("passId").value = "";
    document.getElementById("photoId").value = "";
    document.querySelectorAll('input[name="gender"]').forEach(function(e){
        e.checked = false;
    });
    document.querySelectorAll('input[name="hoby"]').forEach(function(e){
        e.checked = false;
    });
    document.getElementById("deskripsiId").value = "";
}






