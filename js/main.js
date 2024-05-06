import switchTheme from "./functions/switcher.js"
// switch theme
const switcher = document.querySelector(".js-switcher")
switcher.onclick = (e) => switchTheme(e.target)
// set theme based on users device preference
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
prefersDark.matches && (switcher.checked = true)
