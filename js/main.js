const $ = (selector) => document.querySelector(selector)

// THEME

$("#change-theme").addEventListener("click", () => {
    const currentTheme = $("body").getAttribute("data-theme")
    if (currentTheme) {
        $("body").removeAttribute("data-theme", "light-theme")
        $("#change-theme").innerText = "Modo Oscuro"
        $("#lightbulb-off").classList.remove("hidden")
        $("#lightbulb-on").classList.add("hidden")
    } else {
        $("body").setAttribute("data-theme", "light-theme")
        $("#change-theme").innerText = "Modo Claro"
        $("#lightbulb-off").classList.add("hidden")
        $("#lightbulb-on").classList.remove("hidden")
    }
})

// INITIALIZE 

const initializeProject = () => {
    $("#top-text").value = "TOP TEXT"
    $(".meme-top-text").innerText = $("#top-text").value
    $("#bottom-text").value = "BOTTOM TEXT"                                
    $(".meme-bottom-text").innerText =  $("#bottom-text").value
    $("#color").value = "#000000"
    $("#font").value = "Impact"
    $("#font-color").value = "#000000"
    $("#section-color").value = "#FFFFFF"
    $("#font-size").value = 40
    $(".spacing").value = 35
    $(".meme-top-text").style.padding = `${$(".spacing").value}px`
    $(".meme-bottom-text").style.padding = `${$(".spacing").value}px`
    $(".interline").value = 1.2
    $(".meme-top-text").style.margin = `${$(".interline").value}%`
    $(".meme-bottom-text").style.margin = `${$(".interline").value}%`
    $(".meme-container").style.textAlign = "center"
}

initializeProject()

window.addEventListener("load", initializeProject)

const hideElement = (element) => element.classList.add("hidden")
const showElement = (element) => element.classList.remove("hidden")

// ASIDE

// FALTA EL BOTON X

$("#aside-text-button").addEventListener("click", () => {
    showElement($(".aside-text"))
    hideElement($(".aside-img"))
})

$("#aside-img-button").addEventListener("click", () => {
    showElement($(".aside-img"))
    hideElement($(".aside-text"))
})

// IMAGE
// URL IMAGE    

$("#img").addEventListener("input", () => {
    const urlImage = $("#img").value
    $(".meme-img").style.backgroundSize = "cover"
    $(".meme-img").style.backgroundImage = `url(${urlImage})`
})

// BACKGROUND

$("#color").addEventListener("input", () => {
    $("article").style.backgroundColor = $("#color").value
    $("span").innerText = $("#color").value.toUpperCase()
})

$(".background-effect").addEventListener("click", () => {
    $(".meme-img").style.backgroundBlendMode = $(".background-effect").value
})


// constantes porque usaba mucho estas etiquetas

const containerTop = $(".meme-top-text-container")
const containerBottom = $(".meme-bottom-text-container")
const topText = $(".meme-top-text")
const bottomText = $(".meme-bottom-text")

// TEXT

$("#top-text").addEventListener("input", () => {
    topText.innerText = $("#top-text").value.toUpperCase()
})

$("#checkbox-top").addEventListener("change", (e) => {
    if (e.target.checked){
        hideElement(containerTop)
    } else {
        showElement(containerTop)
    }
})

$("#checkbox-bottom").addEventListener("change", (e) => {
    if (e.target.checked){
        hideElement(containerBottom)
    } else {
        showElement(containerBottom)
    }
})

$("#bottom-text").addEventListener("input", () => {
    bottomText.innerText = $("#bottom-text").value.toUpperCase()
})


// FONT FAMILY

$("#font").addEventListener("input", () => {
    topText.style.fontFamily = $("#font").value              
    bottomText.style.fontFamily = $("#font").value            
})

// FONT SIZE

$("#font-size").addEventListener("input", () => {
    topText.style.fontSize = `${$("#font-size").value}px`             
    bottomText.style.fontSize = `${$("#font-size").value}px`
})

$(".left").addEventListener("click", () => {
    $(".meme-container").style.textAlign = "left"                     
})

$(".center").addEventListener("click", () => {
    $(".meme-container").style.textAlign = "center"                       
})

$(".right").addEventListener("click", () => {
    $(".meme-container").style.textAlign = "right"                     
})

// FONT COLOR

$("#font-color").addEventListener("input", () => {
    topText.style.color = $("#font-color").value       
    bottomText.style.color = $("#font-color").value
    $("#font-color-span").innerText = $("#font-color").value.toUpperCase()
})

$("#section-color").addEventListener("input", () => {
    containerTop.style.backgroundColor = $("#section-color").value
    containerBottom.style.backgroundColor = $("#section-color").value     
    $("#section-color-span").innerText = $("#section-color").value.toUpperCase()     
})


$("#transparent-background").addEventListener("change", (e) => {
    if (e.target.checked){
        containerTop.style.backgroundColor = "transparent"
        containerTop.style.position = "absolute"
    } else {                                                                   
        containerTop.style.backgroundColor = $("#section-color").value
        containerTop.style.position = "relative"
    }
})

$("#transparent-background").addEventListener("change", (e) => {
    if (e.target.checked){
        containerBottom.style.backgroundColor = "transparent"
        containerBottom.style.position = "absolute"
        containerBottom.style.bottom = 0                                           
    } else {
        containerBottom.style.backgroundColor = $("#section-color").value
    }
})


$(".spacing").addEventListener("input", () => {
    topText.style.padding = `${$(".spacing").value}px`                       
    bottomText.style.padding = `${$(".spacing").value}px`
})                                                                                           

$(".interline").addEventListener("input", () => {
    topText.style.margin = `${$(".interline").value}px 0px`
    bottomText.style.margin = `${$(".interline").value}px 0px`                         
})


$(".shadow-none").addEventListener("click", () => {
    topText.style.textShadow = "none"
    bottomText.style.textShadow = "none"
})

$(".shadow-black").addEventListener("click", () => {
    topText.style.textShadow = "rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
    bottomText.style.textShadow = "rgb(0, 0, 0) 2px 2px, rgb(0, 0, 0) -2px 2px, rgb(0, 0, 0) 2px -2px, rgb(0, 0, 0) -2px -2px"
})

$(".shadow-white").addEventListener("click", () => {
    topText.style.textShadow = "rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px"
    bottomText.style.textShadow = "rgb(255, 255, 255) 2px 2px, rgb(255, 255, 255) -2px 2px, rgb(255, 255, 255) 2px -2px, rgb(255, 255, 255) -2px -2px"
})

$("#brightness").addEventListener("click", () => {
    const rangeValue = $("#brightness").value
    $(".meme-img").style.filter = `brightness(${rangeValue})`
})

$("#opacity").addEventListener("click", () => {
    const rangeValue = $("#opacity").value
    $(".meme-img").style.filter = `opacity(${rangeValue})`
})

$("#contrast").addEventListener("click", () => {                                      // puedo cambiarles el id
    const rangeValue = $("#contrast").value
    $(".meme-img").style.filter = `contrast(${rangeValue}%)`
})

$("#blur").addEventListener("click", () => {
    const rangeValue = $("#blur").value
    $(".meme-img").style.filter = `blur(${rangeValue}px)`
})

$("#grayscale").addEventListener("click", () => {
    const rangeValue = $("#grayscale").value
    $(".meme-img").style.filter = `grayscale(${rangeValue}%)`
})

$("#sepia").addEventListener("click", () => {
    const rangeValue = $("#sepia").value
    $(".meme-img").style.filter = `sepia(${rangeValue}%)`
})

$("#hue-rotation").addEventListener("click", () => {
    const rangeValue = $("#hue-rotation").value
    $(".meme-img").style.filter = `hue-rotate(${rangeValue}deg)`
})

$("#saturation").addEventListener("click", () => {
    const rangeValue = $("#saturation").value
    $(".meme-img").style.filter = `saturation(${rangeValue}%)`
})

$("#invert").addEventListener("click", () => {
    const rangeValue = $("#invert").value
    $(".meme-img").style.filter = `invert(${rangeValue})`
})
