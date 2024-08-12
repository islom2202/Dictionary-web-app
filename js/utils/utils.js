export function addHidden(...RestParams) {
  RestParams.forEach((param) => param.classList.add("hidden"))
}
export function removeHidden(...RestParams) {
  RestParams.forEach((param) => param.classList.remove("hidden"))
}
export function addPulsateId(...RestParams) {
  RestParams.forEach((param) => param.id = 'pulsate');
  RestParams.forEach((param) => param.setAttribute('id', 'pulsate'));
}
export function removePulsateId(...RestParams){
   RestParams.forEach((param) => (param.id = ''))
}