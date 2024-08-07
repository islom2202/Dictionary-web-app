// imports
import Theme from "./objects/theme.js"
import Dropdown from "./objects/dropdown.js"
import Search  from "./objects/search.js";
// selectors
const selectors = {
  bodyElement: document.body,
  switcher: document.querySelector(".js-switcher"),
  prefersDark: window.matchMedia("(prefers-color-scheme: dark)"),
  select: document.querySelector(".dropdown"),
  allTags: document.getElementsByTagName("*"),
  searchInput: document.querySelector(".js-search"),
  searchIcon: document.querySelector(".js-search-icon"),
  // data for api selectors
  resultHeading: document.querySelector(".result__heading"),
  resultList: document.querySelector(".result__list")
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
const search = new Search(selectors); 
selectors.searchIcon.onclick = async () =>{
    /* fetch data*/
    const data = await search.fetchData()
    /* generate HTML*/
    const [playBtn] = search.generateHTML(data)
    /* add functions to generated HTML*/
    playBtn.onclick = () => search.playWord();
} 
   
   




