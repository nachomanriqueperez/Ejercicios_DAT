function setup (){
  formElement = document.getElementById('text');
  writeElement = document.getElementById('write');
  formElement.addEventListener('input',duplicar);
  console.log(formElement);
}

function duplicar() {
    writeElement.innerHTML = formElement.value;
}
