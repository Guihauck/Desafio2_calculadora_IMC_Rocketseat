import {modal} from './modal.js'
import { AlertError } from './alert-error.js'
import {IMC, isNotANumber} from './utils.js'

// Variáveis

const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

// Funções

form.onsubmit = event => {
  event.preventDefault();

  const weight = inputWeight.value
  const height = inputHeight.value

  const showErrorNotNumber = isNotANumber(weight) || isNotANumber(height)

  if (showErrorNotNumber) {
    AlertError.open()
    return;
  }

  AlertError.close()
 
  const result = IMC(weight, height);
  const message = `Seu IMC é de ${result}`

  modal.message.innerText = message
  modal.open()
}