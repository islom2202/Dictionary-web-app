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
      <svg  viewBox="0 0 75 75" class="result__heading__playBtn">
        <use href="./assets/icons/play.svg#play-icon"></use>
      </svg>
      <audio src=${returnPhonetics("audio")}></audio>
    `
    let resultList = []
    data.meanings.forEach(
      (e) =>
        (resultList += `
    <li class="result__list__item">
        <h2 class="heading--2" id="pulsate">${e.partOfSpeech}</h2>
        <h3 class="heading--3" id="pulsate">Meaning</h3>
        <ul class="result__list__item__meanings">
          
          ${e.definitions
            .map(
              (def) =>
                `<li id="pulsate">
                <span>${def.definition}</span>
                 ${def.example ? `<span>" ${def.example} "</span>` : ""}
               </li>`
            )
            .join("")}
         
        </ul>
        ${
          e.synonyms.length > 0 ? `
          <small>Synonyms: ${e.synonyms.map(
            (syn) => ` <span>${syn}</span>`
          )}</small>`: ""
        }
        
      </li>
      `)
    )
    this.selectors.resultHeading.innerHTML = resultHeading
    this.selectors.resultList.innerHTML = resultList
    function returnPhonetics(value) {
      for (let i = 0; i < data.phonetics.length; i++) {
        if (data.phonetics[i][value]) {
          return data.phonetics[i][value]
        }
      }
    }
    return [document.querySelector(".result__heading__playBtn")]
  }
  // add functions to generated HTML
  playWord() {
    document.querySelector("audio").play()
  }
}

export default Search;