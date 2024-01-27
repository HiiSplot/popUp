let playOnce = true;

window.addEventListener("scroll", () => {
    //NavBar
    if (window.scrollY > 0) {
        navbar.style.height = "50px";
    } else {
        navbar.style.height = "90px"
    }

    let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
    // Permet de faire un pourcentage de la page, permet d'avoir toujours la même dynamique sur chaque format.

    //Image
    if (scrollValue > 0.45) {
        imgImprovise.style.transform = "translateX(0px)"
        imgImprovise.style.opacity = "1"
    }

    //Popup
    if (scrollValue > 0.85 && playOnce) {
        popup.style.opacity = "1";
        popup.style.transform = "none"
        playOnce = false;
    }
});

window.addEventListener("click", () => {
    if (closeBtn.remove) {
        popup.style.opacity = "0";
        popup.style.transform = "translateX(500px)"
    }
})
