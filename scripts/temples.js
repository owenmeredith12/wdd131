
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.getElementById("navbar");

    const toggleButton = document.createElement("button");
    toggleButton.classList.add("nav-toggle");
    toggleButton.setAttribute("aria-label", "Toggle menu");
    toggleButton.innerHTML = "☰";
    navbar.insertBefore(toggleButton, navbar.firstChild);

    const navMenu = navbar.querySelector(".nav-menu");


    toggleButton.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });


    function updateMenuDisplay() {
        if (window.innerWidth < 768) {
            toggleButton.style.display = "block";
            navMenu.classList.remove("show");
        } else {
            toggleButton.style.display = "none";
            navMenu.classList.remove("show");
        }
    }

    window.addEventListener("resize", updateMenuDisplay);
    updateMenuDisplay();
});


document.addEventListener("DOMContentLoaded", () => {
    const modified = document.getElementById("lastModified");
    if (modified) {
        modified.textContent = "Last modified: " + document.lastModified;
    }
});




