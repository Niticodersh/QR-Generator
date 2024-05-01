const text = document.querySelector("textarea");
const genButton = document.querySelector(".genButton");
const savebutton = document.querySelector(".savebutton");
const result = document.querySelector(".result")

genButton.addEventListener("click", generateQR);
savebutton.addEventListener("click", downloadImg);

// const api = https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

function generateQR(){
    console.log("generating qr code");
    const url = getURL();

    result.src = url;
    console.log(url);
}

async function downloadImg(){
    console.log("downloading image")
    const url = getURL();

    const image = await fetch(url);
    const imageBlob = await image.blob();
    console.log(imageBlob);
    const imageURL = URL.createObjectURL(imageBlob)

    const link = document.createElement('a');
    link.href = imageURL;
    link.download="myQRcode"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function getURL(){
    const value = text.value;
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${value}`;
    return url;
}