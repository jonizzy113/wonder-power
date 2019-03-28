let flight = document.getElementById("flight")
let xray = document.getElementById("xray")
let mindreading = document.getElementById("mindreading")
// let activateAll= document.getElementById("activiate-flight")
// let deactivitaAll =document.getElementById("deactiviate-all")

function flightHandlerFunction() {
  flight.classList.toggle("disabled")
  flight.classList.toggle("enabled")
};

function flightHandlerFunction1() {
  xray.classList.toggle("disabled")
  xray.classList.toggle("enabled")
};

function flightHandlerFunction2() {
  mindreading.classList.toggle("disabled")
  mindreading.classList.toggle("enabled")
};
function activateAll() {
  const section = document.querySelectorAll("#powerList")
  section.classList.toggle("enabled")
}

function deactivateAll() {
  const section = document.querySelectorAll("#powerList") 
  section.classList.toggle("disabled")
}





document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)


document.querySelector("#activate-mindreading").addEventListener("click", flightHandlerFunction2)


document.querySelector("#activate-xray").addEventListener("click", flightHandlerFunction1)


document.querySelectorAll("#activate-all").addEventListener("click", activateAll)


document.querySelectorAll("#deactivate-all").addEventListener("click", deactivateAll)


