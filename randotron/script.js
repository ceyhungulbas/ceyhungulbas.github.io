const submitButton = document.getElementById("thisIsSubmit")
let result = document.getElementById("result")

function randotron(){
  let valueInput = document.getElementById("inputNumber").value   // Taking Value
  let randomHehe = Math.floor(Math.random() * valueInput);        //Random generator
  randomHehe += 1                             //Ignoring zero value
  result.innerHTML = randomHehe               //Printing random number
  return
}

submitButton.addEventListener("click", randotron)