const $ = (selector) => document.querySelector(selector)
const hideElement = (element) => element.classList.add("hidden")
const showElement = (element) => element.classList.remove("hidden")
const containerTop = $(".meme-top-text-container")
const containerBottom = $(".meme-bottom-text-container")
const topText = $(".meme-top-text")
const bottomText = $(".meme-bottom-text")

// THEME

$(".dark-mode").addEventListener("click", () => {
    $("body").setAttribute("data-theme", "light-theme")
    hideElement($(".lightbulb-off"))
    showElement($(".lightbulb-on"))
})

$(".light-mode").addEventListener("click", () => {
    $("body").removeAttribute("data-theme", "light-theme")
    showElement($(".lightbulb-off"))
    hideElement($(".lightbulb-on"))

})

// INITIALIZE 

const initializeProject = () => {
    $("#top-text").value = "TOP TEXT"
    $(".meme-top-text").innerText = $("#top-text").value
    $("#bottom-text").value = "BOTTOM TEXT"                                
    $(".meme-bottom-text").innerText =  $("#bottom-text").value
    $("#color").value = "#FFFFFF"
    $("#font").value = "Impact"
    $("#font-color").value = "#000000"
    $("#section-color").value = "#FFFFFF"
    $(".meme-top-text").style.padding = `${$(".spacing").value}px`
    $(".meme-bottom-text").style.padding = `${$(".spacing").value}px`
    $(".interline").value = 1.2
    $(".meme-top-text").style.margin = `${$(".interline").value}%`
    $(".meme-bottom-text").style.margin = `${$(".interline").value}%`
    $(".meme-container").style.textAlign = "center"
}

initializeProject()

window.addEventListener("load", initializeProject)

// ASIDE

$(".button-close-aside").addEventListener("click", () => {
    hideElement($("aside"))
})

$("#aside-text-button").addEventListener("click", () => {
    showElement($(".aside-text"))
    hideElement($(".aside-img"))
    showElement($("aside"))
})

$("#aside-img-button").addEventListener("click", () => {
    showElement($(".aside-img"))
    hideElement($(".aside-text"))
    showElement($("aside"))
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

$("#brightness").addEventListener("input", () => {
    $(".meme-img").style.filter = `brightness(${$("#brightness").value})`
})

$("#opacity").addEventListener("input", () => {
    $(".meme-img").style.filter = `opacity(${$("#opacity").value})`
})

$("#contrast").addEventListener("input", () => {                                      
    $(".meme-img").style.filter = `contrast(${$("#contrast").value}%)`
})

$("#blur").addEventListener("input", () => {
    $(".meme-img").style.filter = `blur(${$("#blur").value}px)`
})

$("#grayscale").addEventListener("input", () => {
    $(".meme-img").style.filter = `grayscale(${$("#grayscale").value}%)`
})

$("#sepia").addEventListener("input", () => {
    $(".meme-img").style.filter = `sepia(${$("#sepia").value}%)`
})

$("#hue-rotation").addEventListener("input", () => {
    $(".meme-img").style.filter = `hue-rotate(${$("#hue-rotation").value}deg)`
})

$("#saturate").addEventListener("input", () => {
    $(".meme-img").style.filter = `saturate(${$("#saturate").value}%)`
})

$("#invert").addEventListener("input", () => {
    $(".meme-img").style.filter = `invert(${$("#invert").value})`
})

$(".reset-filter").addEventListener("click", () => {
    $(".meme-img").style.filter = `brightness(${$("#brightness").value = 1})`
    $(".meme-img").style.filter = `opacity(${$("#opacity").value = 1})`
    $(".meme-img").style.filter = `contrast(${$("#contrast").value = 100}%)`
    $(".meme-img").style.filter = `blur(${$("#blur").value = 0}px)`
    $(".meme-img").style.filter = `grayscale(${$("#grayscale").value = 0}%)`
    $(".meme-img").style.filter = `sepia(${$("#sepia").value = 0}%)`
    $(".meme-img").style.filter = `hue-rotate(${$("#hue-rotation").value = 0}deg)`
    $(".meme-img").style.filter = `saturate(${$("#saturate").value = 100}%)`
    $(".meme-img").style.filter = `invert(${$("#invert").value = 0})`
})

const mediaQuery = window.matchMedia("(max-width: 700px)");
mediaQuery.addListener(handleMediaChange);

function handleMediaChange (e) {
    if (e.matches) {
        $(".spacing").value = 15
        topText.style.padding= `${$(".spacing").value}px`
        bottomText.style.padding= `${$(".spacing").value}px`
        $("#font-size").value = 25
        topText.style.fontSize= `${$("#font-size").value}px`
        bottomText.style.fontSize= `${$("#font-size").value}px`
    } else {
        $(".spacing").value = 30
        topText.style.padding= `${$(".spacing").value}px`
        bottomText.style.padding= `${$(".spacing").value}px`
        $("#font-size").value = 40
        topText.style.fontSize= `${$("#font-size").value}px`
        bottomText.style.fontSize= `${$("#font-size").value}px`
    }
}

handleMediaChange(mediaQuery);

const downloadMeme = () => {
    domtoimage.toBlob($(".meme-container")).then((blob) => {
        saveAs(blob, "mi-meme.png")
      })
}

$(".download-meme").addEventListener("click", downloadMeme)
