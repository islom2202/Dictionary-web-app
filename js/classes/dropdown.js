class Dropdown {
  setDropdownWidth(dropdown) {
    if (dropdown.value.length < 5) {
      dropdown.style.width = dropdown.value.length + 3 + "rem"
    } else {
      dropdown.style.width = dropdown.value.length + 1 + "rem"
    }
  }
  changeFont(dropdown, allTags) {
    for (let i = 0; i < allTags.length; i++) {
      if (dropdown.value == "sans-serif") {
        allTags[i].style.setProperty("font-family", '"Inter", sans-serif')
      }
      if (dropdown.value == "serif") {
        allTags[i].style.setProperty("font-family", '"Lora", serif')
      }
      if (dropdown.value == "mono") {
        allTags[i].style.setProperty("font-family",'"Inconsolata", monospace')
      }
    }
  }
}
export default Dropdown