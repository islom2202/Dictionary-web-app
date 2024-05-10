// imports
import Theme from "./classes/theme.js"

// selectors
const bodyElement = document.body
const switcher = document.querySelector(".js-switcher")
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)")
const dropdown = document.querySelector(".dropdown")
const allTags = document.getElementsByTagName("*")

// switch theme & set theme based on users device preference
switcher.onclick = (e) => new Theme(bodyElement, e.target).switchTheme()
new Theme(bodyElement, switcher).deviceTheme(prefersDark)

// dropdown - set its with
dropdown.onchange = () => setWidth()
function setWidth(){
  if (dropdown.value.length < 5){
    dropdown.style.width = dropdown.value.length + 3 + "rem"
  }else{
    dropdown.style.width = dropdown.value.length + 1 + "rem"
  }
}

dropdown.onchange = () => changeFont()
function changeFont(){
  for(let i = 0; i <= allTags.length; i++){
    if (dropdown.value == "sans-serif") {
      allTags[i].style.setProperty("font-family", '"Inter", sans-serif')
    }
    if (dropdown.value == "serif") {
      allTags[i].style.setProperty("font-family", '"Lora", serif')
    }
    if (dropdown.value == "mono") {
      allTags[i].style.setProperty("font-family", '"Inconsolata", monospace')
    }
  }
}





