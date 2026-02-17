const header = document.querySelector("header");
const toggle = document.getElementById("modeToggle");
const icon = toggle.querySelector(".icon");

toggle.addEventListener("click", () => {
    header.classList.toggle("beta");
    header.classList.toggle("legacy");

    if (header.classList.contains("beta")) {
        icon.classList.remove("waves-icon");
        icon.classList.add("circle-icon");
    } else {
        icon.classList.remove("circle-icon");
        icon.classList.add("waves-icon");
    }
});

window.addEventListener("load", () => {
    const popup = document.getElementById("popup");
    const closeBtn = document.getElementById("closePopup");

    popup.classList.add("show");
    document.body.classList.add("body-lock");


    closeBtn.addEventListener("click", () => {
        popup.classList.remove("show");
        document.body.classList.remove("body-lock");
    });
});
