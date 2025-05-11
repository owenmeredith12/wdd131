document.addEventListener("DOMContentLoaded", () => {
    const modified = document.getElementById("lastModified");
    if (modified) {
        modified.textContent = "Last modified: " + document.lastModified;
    }
});