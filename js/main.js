// imports
import Theme from "./objects/theme.js"
import Dropdown from "./objects/dropdown.js"

// selectors
const selectors = {
  bodyElement: document.body,
  switcher: document.querySelector(".js-switcher"),
  prefersDark: window.matchMedia("(prefers-color-scheme: dark)"),
  select: document.querySelector(".dropdown"),
  allTags: document.getElementsByTagName("*"),
  searchInput: document.querySelector(".js-search"),
  searchIcon: document.querySelector(".js-search-icon")
};


// switch theme & set theme based on users device preference
const theme = new Theme(selectors.bodyElement, selectors.switcher)
window.onload = () => theme.deviceTheme(selectors.prefersDark)
selectors.switcher.onclick = () => theme.switchTheme()

// dropdown 
selectors.select.onchange = () => {
  const dropdown = new Dropdown()
  dropdown.setDropdownWidth(selectors.select)
  dropdown.changeFont(selectors.select, selectors.allTags)
} 

// search
let result = null;
selectors.searchIcon.onclick = () => fetchData()
async function fetchData(){
  const api = "https://api.dictionaryapi.dev/api/v2/entries/en/"
  try {
    const res = await fetch(`${api}${selectors.searchInput.value}`)
    const data = await res.json()
    result = data
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}







