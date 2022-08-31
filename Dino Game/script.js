const uqbah = document.getElementById("uqbah")
const pohon = document.getElementById("pohon")
function jump() {
    if (dispatchEvent.classList != "jump") {
        uqbah.classList.add("jump");
        setTimeout(function() {
            uqbah.classList.remove("jump");
        }, 300)
    }
}
let checkAlive = setInterval(function() {
    let uqbahTop =
parseInt(window.getComputedStyle(uqbah).getPropertyValue("top"));
    let pohonLeft =
parseInt(window.getComputedStyle(pohon).getPropertyValue("left"));
    if (pohonLeft > 0 && pohonLeft < 70 && uqbahTop >= 143) {
        uqbah.style.animationPlayState = 'paused';
        pohon.style.animationPlayState = 'paused';
        alert("Whoops! Game Over :(");
        window.location.reload(); 
    }
}, 10);
document.addEventListener("keydown", function(event) {
    jump();
})