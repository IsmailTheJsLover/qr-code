const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downlodBtn = document.getElementById('downlodBtn');

const qrContainer = document.querySelector('.qr-body');
let size = sizes.value;

generateBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    isEmptyInput()
 });

 sizes.addEventListener('change',(e)=>{
     size = e.target.value;
     isEmptyInput()
 });

 downlodBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downlodBtn.setAttribute("href", imgAtrr);
    }else{
        downlodBtn.setAttribute("href",`${document.querySelector('canvas').toDataURL()}`);
    }
 });

function isEmptyInput(){
    // if(qrText.value.length >0){
    //     generateQRCode();
    // }else{
    //     alert("Enter the text or URL to generate your  QR Code");
    // }
    qrText.value.length >0 ? generateQRCode():  alert("Enter the text or URL to generate your  QR Code");;
}

function generateQRCode(){
    qrContainer.innerHTML = "";
    new QRCode(qrContainer, {
        text:qrText.value,
        height:size,
        width:size,
        colorLight: "#fff",
        colorDark:"#000",
    });
};
// Isamil