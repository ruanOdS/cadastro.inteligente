const formulario = document.getElementById('formulario');

const nome = document.getElementById('nome');
const email = document.getElementById('email');

const erroNome = document.getElementById('erroNome');
const erroEmail = document.getElementById('erroEmail');

const mensagemSucesso = document.getElementById('mensagemSucesso');

formulario.addEventListener('submit', function(event){

  event.preventDefault();

  let valido = true;

  // VALIDAR NOME
  if(nome.value.trim() === ''){
    erroNome.textContent = 'O nome é obrigatório';
    nome.classList.add('erro');
    nome.classList.remove('sucesso');
    valido = false;

  } else{
    erroNome.textContent = '';
    nome.classList.remove('erro');
    nome.classList.add('sucesso');
  }

  // VALIDAR EMAIL
  if(email.value.trim() === ''){
    erroEmail.textContent = 'O e-mail é obrigatório';
    email.classList.add('erro');
    email.classList.remove('sucesso');
    valido = false;

  } else if(!email.value.includes('@')){
    erroEmail.textContent = 'Digite um e-mail válido';
    email.classList.add('erro');
    email.classList.remove('sucesso');
    valido = false;

  } else{
    erroEmail.textContent = '';
    email.classList.remove('erro');
    email.classList.add('sucesso');
  }

  // SUCESSO
  if(valido){
    mensagemSucesso.textContent = 'Formulário enviado com sucesso 🚀';

    formulario.reset();

    nome.classList.remove('sucesso');
    email.classList.remove('sucesso');
  }

});