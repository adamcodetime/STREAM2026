const header = document.querySelector("header");
const toggle = document.getElementById("modeToggle");
const icon = toggle.querySelector(".icon");

toggle.addEventListener("click", () => {
    header.classList.toggle("beta");
    header.classList.toggle("legacy");

    // Update icon based on mode
    if (header.classList.contains("beta")) {
        icon.classList.remove("waves-icon");
        icon.classList.add("circle-icon");
    } else {
        icon.classList.remove("circle-icon");
        icon.classList.add("waves-icon");
    }
});
