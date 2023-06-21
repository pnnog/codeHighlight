const fields =  document.querySelectorAll('[required]')

const commonError = [
  'valueMissing', 
  'typeMismatch', 
  'tooShort', 
]

const errorMessages = {
    name: {
      valueMissing: 'Dê um nome legal ao seu projeto.',
      typeMismatch: 'Valor inválido. Insira um nome válido.',
      tooShort:'O nome precisa ser mais longo.'
    },
    description: {
      valueMissing: 'Dê um descrição legal ao seu projeto.',
      typeMismatch: 'Valor inválido. Insira uma descrição válida.',
      tooShort:'A descrição precisa ser mais longa.'
    },
    language:{
      valueMissing: 'Escolha uma linguagem',
    }
}


function validate(e) {
  e.preventDefault()
  const field = e.target
  const errorElement = field.parentElement.parentElement.querySelector('#error-message') 

  let errorMessage = ""
  errorElement.classList.add('hide')

  commonError.forEach(error => {
    if(field.validity[error]){
      errorMessage = errorMessages[field.name][error]
      errorElement.classList.remove('hide')
    }
  })

  errorElement.innerText = errorMessage
}

function validateOnSubmit(e) {
  e.preventDefault()
  validate(e)
}



fields.forEach(field=> {
  field.addEventListener('blur', validate)
  field.addEventListener('invalid', validateOnSubmit)
})
