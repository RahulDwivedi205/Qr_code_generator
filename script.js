
let qrImg = document.getElementById('qrImg');
let image = document.getElementById('image');
let qrText = document.getElementById('qrText');
function generateQR(){
    if (qrText.value.length > 0){
        image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value;
        qrImg.classList.add('showimg')
    }else {
        qrText.classList.add('error');
        setTimeout(() =>{
            qrImg.classList.remove('showimg')
            qrText.classList.remove('error')
        },1000);
    }
}
