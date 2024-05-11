// imports
import Theme from "./classes/theme.js"
import Dropdown from "./classes/dropdown.js"

// selectors
const bodyElement = document.body
const switcher = document.querySelector(".js-switcher")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
const select = document.querySelector(".dropdown")
const allTags = document.getElementsByTagName("*")

// switch theme & set theme based on users device preference
const theme = new Theme(bodyElement, switcher)
window.onload = () => theme.deviceTheme(prefersDark)
switcher.onclick = () => theme.switchTheme()

// dropdown 
select.onchange = () => {
  const dropdown = new Dropdown()
  dropdown.setDropdownWidth(select);
  dropdown.changeFont(select, allTags)
} 






