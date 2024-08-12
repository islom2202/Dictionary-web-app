class Theme {
  constructor(bodyElement, switcher){
    this.body = bodyElement;
    this.switcher = switcher;
  }
  switchTheme(){
    this.switcher.checked
      ? this.body.classList.add("dark")
      : this.body.classList.remove("dark")
  }
  deviceTheme(preferceDark){
    if(preferceDark.matches){
      this.switcher.checked = true;
      this.body.classList.add("dark")
    }
  }
}
export default Theme;