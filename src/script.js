const themeButton = document.getElementById("theme-button");
const themeButtonImg = document.getElementById("theme-button-img");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    themeButtonImg.src = "/src/assets/website/dark-mode-button.png";
} else {
    document.documentElement.classList.remove("dark");
    themeButtonImg.src = "/src/assets/website/light-mode-button.png";
}

themeButton.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");

    themeButtonImg.src = isDark
        ? "/src/assets/website/dark-mode-button.png"
        : "/src/assets/website/light-mode-button.png";

    localStorage.setItem("theme", isDark ? "dark" : "light");
});

const hamMenuButton = document.getElementById("ham-menu-btn");
const hamNavMenu = document.getElementById("ham-nav-menu");
const menuToggle = document.getElementById("menu-toggle");

hamMenuButton.addEventListener("click", (event) => {
    menuToggle.classList.toggle("fa-bars");
    menuToggle.classList.toggle("fa-xmark");
    hamNavMenu.classList.toggle("hidden");
});
