document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('credenciais');
  const inputIcon = document.querySelector(".input__icon");
  const inputPassword = document.querySelector("#password");
  inputIcon.addEventListener("click", () => {
      const isPasswordVisible = inputPassword.type === 'password';
      inputPassword.type = isPasswordVisible ? 'text' : 'password';
      inputIcon.classList.toggle("ri-eye-off-line", isPasswordVisible);
      inputIcon.classList.toggle("ri-eye-line", !isPasswordVisible);
  });
  form.addEventListener('submit', function(e) {
      e.preventDefault();
      const usuario = form.querySelector('input[type="text"]').value;
      const senha = form.querySelector('input[type="password"]').value;
      if (usuario === 'admin' && senha === 'admin') {
          window.location.href = 'templates/html/home.html';
      } else {
          alert('Usuário ou senha inválidos!');
      }
  });
});
