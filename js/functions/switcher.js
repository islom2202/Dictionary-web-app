const switchTheme = (switcher) => {
  const body = document.querySelector("body")
  switcher.checked ? body.classList.add('dark') : body.classList.remove('dark')
} 
export default switchTheme;