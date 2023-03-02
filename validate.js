// function valida(input) {
//     const tipoDeInput = input.dataset.tipo

//     if(validadores[tipoDeInput]) {
//         validadores[tipoDeInput](input)
//     }

//     if(input.validity.valid) {
//         input.parentElement.classList.remove('input-container--invalido')
//         input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''
//     } else {
//         input.parentElement.classList.add('input-container--invalido')
//         input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(tipoDeInput, input)
//     }
// }

// const tiposDeErro = [
//     'valueMissing',
//     'typeMismatch',
// ]

// const mensagensDeErro = {
//     nome: {
//         valueMissing: 'O campo de nome não pode estar vazio.'
//     },
//     email: {
//         valueMissing: 'O campo de email não pode estar vazio.',
//         typeMismatch: 'O email digitado não é válido.'
//     },
// }


function validarDados(){
    event.preventDefault()
    var error = document.querySelector('#error')
    error.style.color = 'black'
    
    var expresion = /\w+@\w+\.+[a-z]/

    var mensajesError = []
    
    if (document.form.name.value=="" ) {
        mensajesError.push("Campo nome é obrigatorio")  
        document.form.name.focus()
    
    }else if (document.form.email.value=="") {
        mensajesError.push("Campo e-mail é obrigatorio")
        document.form.email.focus() 

    }else if (document.form.assunto.value=="" ) {
        mensajesError.push("Campo Assunto é obrigatorio")
        document.form.assunto.focus() 

    }else if (document.form.textarea.value=="" || document.form.textarea.value.length < 50 ){
        mensajesError.push("Campo Mensagem é obrigatorio e deve conter pelo menos 50 carateres") 
        document.form.textarea.focus()
    
    } else if (document.form.email.value.indexOf('@')==-1 ||
    document.form.email.value.indexOf('.')==-1 ) {
        mensajesError.push("e-mail inválido")
    }


    error.innerHTML = mensajesError.join(',')

    
}
    document.querySelector('form').addEventListener('submit',validarDados)