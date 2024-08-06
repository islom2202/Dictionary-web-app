class Search {
  constructor(selectors) {
    this.selectors = selectors
  }
  // fetch data
  async fetchData() {
    const api = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    try {
      const res = await fetch(`${api}${this.selectors.searchInput.value}`)
      const [data] = await res.json()
      return data;
    } catch (error) {
      console.error(error)
    }
  }
  // generate html
  generateHTML(data) {
    const resultHeading = `
    <h2 class="result__heading__word">
        <span class="heading--1">${data.word}</span>
        <span class="heading--2">${returnPhonetics("text")}</span>
      </h2>
      <svg width="75" viewBox="0 0 75 75" class="result__heading__audio">
        <use href="./assets/icons/play.svg#play-icon"></use>
      </svg>
      <audio src=${returnPhonetics("audio")}></audio>
   `
    this.selectors.resultHeading.innerHTML = resultHeading
    function returnPhonetics(value) {
      for (let i = 0; i < data.phonetics.length; i++) {
        if (data.phonetics[i][value]) {
          return data.phonetics[i][value]
        }
      }
    }
    // play audio
    document.querySelector(".result__heading__audio").onclick = () => {
      document.querySelector("audio").play()
    }
  }
  // functions
  play() {
    document.querySelector("audio").play()
  }
}

export default Search;