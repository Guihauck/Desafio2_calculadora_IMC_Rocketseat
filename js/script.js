// Variáveis

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

//const modalWrapper = document.querySelector(".modal-wrapper")
//const modalMessage = document.querySelector(".modal .title span")
//const modalBtnClose = document.querySelector(".modal .close-popup")

//Estruturando dados do Modal

const modal = {
  wrapper: document.querySelector(".modal-wrapper"),
  message: document.querySelector(".modal .title span"),
  buttonClose: document.querySelector(".modal .close-popup"),

  open() {
    modal.wrapper.classList.add('open')
  },
  close() {
    modal.wrapper.classList.remove('open')
  }
}

// Funções

form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}

let IMC = (weight, height) => {
  return (weight / (height / 100) ** 2).toFixed(2);
}

modal.buttonClose.onclick = () => {
  modal.close()
}