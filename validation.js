const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmar = document.getElementById('confirmar');
const form = document.getElementById('cadastroForm');

nome.addEventListener('blur', () => validarCampo(nome, validarNome));
email.addEventListener('blur', () => validarCampo(email, validarEmail));
senha.addEventListener('input', () => validarCampo(senha, validarSenha));
confirmar.addEventListener('blur', () => validarCampo(confirmar, validarConfirmar));

function validarCampo(input, funcao) {
  const erro = document.getElementById(input.id + '-error');
  const resultado = funcao(input.value);

  if (!resultado.valido) {
    input.classList.add('error');
    input.classList.remove('success');
    erro.textContent = resultado.mensagem;
  } else {
    input.classList.remove('error');
    input.classList.add('success');
    erro.textContent = '';
  }
}

function validarNome(valor) {
  if (!valor) return { valido: false, mensagem: 'Nome obrigatório' };
  if (valor.length < 3) return { valido: false, mensagem: 'Mínimo 3 caracteres' };
  return { valido: true };
}

function validarEmail(valor) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!valor) return { valido: false, mensagem: 'Email obrigatório' };
  if (!regex.test(valor)) return { valido: false, mensagem: 'Email inválido' };
  return { valido: true };
}

function validarSenha(valor) {
  if (valor.length < 8) return { valido: false, mensagem: 'Mínimo 8 caracteres' };
  if (!/[A-Z]/.test(valor)) return { valido: false, mensagem: 'Precisa de letra maiúscula' };
  if (!/[0-9]/.test(valor)) return { valido: false, mensagem: 'Precisa de número' };
  return { valido: true };
}

function validarConfirmar(valor) {
  if (valor !== senha.value) return { valido: false, mensagem: 'Senhas não coincidem' };
  return { valido: true };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Cadastro realizado com sucesso 🚀");
});