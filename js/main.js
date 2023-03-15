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
    $(".meme-top-text").innerText = "TOP TEXT"
    $("#bottom-text").value = "BOTTOM TEXT"
    $(".meme-bottom-text").innerText = "BOTTOM TEXT"
    $("#color").value = "#000000"
    $("#font").value = "Impact"
    $(".font-size").value = "40"
    $(".spacing").value = "35"
    $(".interline").value = "1.2"
}

initializeProject()

window.addEventListener("load", initializeProject)


// ASIDE

// FALTA EL BOTON X

$("#aside-text-button").addEventListener("click", () => {
    $(".aside-text").classList.remove("hidden")
    $(".aside-img").classList.add("hidden")
})

$("#aside-img-button").addEventListener("click", () => {
    $(".aside-img").classList.remove("hidden")
    $(".aside-text").classList.add("hidden")
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



// TEXT

$("#top-text").addEventListener("input", () => {
    $(".meme-top-text").innerText = $("#top-text").value.toUpperCase()
})

$("#checkbox-top").addEventListener("change", (e) => {
    if (e.target.checked){
        $(".meme-top-text-container").classList.add("hidden")
    } else {
        $(".meme-top-text-container").classList.remove("hidden")
    }
})

$("#checkbox-bottom").addEventListener("change", (e) => {
    if (e.target.checked){
        $(".meme-bottom-text-container").classList.add("hidden")
    } else {
        $(".meme-bottom-text-container").classList.remove("hidden")
    }
})

$("#bottom-text").addEventListener("input", () => {
    $(".meme-bottom-text").innerText = $("#bottom-text").value.toUpperCase()
})

$("#transparent-background").addEventListener("change", (e) => {
    if (e.target.checked){
        $(".meme-top-text-container").classList.add("hidden")
        $(".meme-bottom-text-container").classList.add("hidden")
    } else {
        $(".meme-top-text-container").classList.remove("hidden")
        $(".meme-bottom-text-container").classList.remove("hidden")
    }
})
