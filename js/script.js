import {modal} from './modal.js'
import { AlertError } from './alert-error.js'
import {calculateIMC, isNotANumber} from './utils.js'

// Variáveis

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// Funções

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = isNotANumber(weight) || isNotANumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return;
  }

  AlertError.close()
  const result = calculateIMC(weight, height);
  displayMessageResult(result)
}

function displayMessageResult (result) {
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}