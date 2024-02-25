let box = document.getElementById("box");
let img = document.getElementById("img");
let input = document.getElementById("input");

function generate() {
    if(input.value.length > 0){
        img.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
        box.classList.add("show-img")
    }else{
        input.classList.add('error');
        setTimeout(()=>{
            input.classList.remove('error');
        },1000);
    }
}