class Search {
  constructor(selectors) {
    this.selectors = selectors
  }
  async fetchData() {
    const api = "https://api.dictionaryapi.dev/api/v2/entries/en/"
    try {
      const res = await fetch(`${api}${this.selectors.searchInput.value}`)
      const [data] = await res.json()
      this.#displayResults(data)
    } catch (error) {
      console.error(error)
    }
  }
  
  #displayResults(data) {
    this.selectors.word.textContent = data.word
    this.selectors.phoneticTranscription.textContent = returnPhonetics("text")
    this.selectors.audio.src = returnPhonetics("audio")

    function returnPhonetics(value){
      for(let i = 0; i < data.phonetics.length; i++) {
        if(data.phonetics[i][value]){
          return data.phonetics[i][value]
        }
      }
    }
  }
  play(){
    this.selectors.audio.play()
  }
}

export default Search;