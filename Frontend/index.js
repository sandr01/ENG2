document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('credenciais');
  const inputIcon = document.querySelector(".input__icon");
  const inputPassword = document.querySelector("#password");

  // Alternar visibilidade da senha
  inputIcon.addEventListener("click", () => {
      const isPasswordVisible = inputPassword.type === 'password';
      inputPassword.type = isPasswordVisible ? 'text' : 'password';
      inputIcon.classList.toggle("ri-eye-off-line", isPasswordVisible);
      inputIcon.classList.toggle("ri-eye-line", !isPasswordVisible);
  });

  form.addEventListener('submit', function(e) {
      e.preventDefault(); // Impede o envio do formulário

      // Obtem os valores dos inputs
      const usuario = form.querySelector('input[type="text"]').value;
      const senha = form.querySelector('input[type="password"]').value;

      // Verifica se as credenciais correspondem aos valores padrão
      if (usuario === 'admin' && senha === '1234') {
          // Redireciona para a página home se as credenciais estiverem corretas
          window.location.href = 'templates/html/home.html';
      } else {
          // Mostra uma mensagem de erro ou trata o erro de login de alguma forma
          alert('Usuário ou senha inválidos!');
      }
  });
});
