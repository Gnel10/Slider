let main = document.getElementsByClassName("main")[0]
let img = document.getElementById('img')
let radio = document.getElementsByClassName('radio')[0]
let imgArr = ["img1.jpg", "img2.jpg","img3.jpg","img4.jpg","img5.jpg"] 
let count = 0


img.setAttribute("src", `photo/${imgArr[count]}`)

setInterval(() => {
    count++
    if(count === imgArr.length) count = 0
    img.setAttribute("src", `photo/${imgArr[count]}`)

    for(let i = 0; i < imgArr.length; i++){
        radioBtn[i].removeAttribute("checked")
    }
    radioBtn[count].setAttribute("checked", true)
}, 8000)

function changeSlide(name){
    if(name === 'next'){
        count++
        if(count === imgArr.length) count = 0
        img.setAttribute("src", `photo/${imgArr[count]}`)
    }else{
        count--
        if(count < 0) count = imgArr.length - 1
        img.setAttribute("src", `photo/${imgArr[count]}`)
    }

    for(let i = 0; i < imgArr.length; i++){
        radioBtn[i].removeAttribute("checked")
    }
    radioBtn[count].setAttribute("checked", true)
}

for(let i = 0; i < imgArr.length; i++){
    radio.innerHTML += `
        <input class="radioItem" type="radio" onclick="currentImg(${i})" name="radio-btn" id="radio${i+1}">
    `
}

function currentImg(index){
    img.setAttribute("src", `photo/${imgArr[index]}`)
}

let radioBtn = document.getElementsByClassName('radioItem')
radioBtn[count].setAttribute("checked", true)