document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Enviar dados para o servidor
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'login.php', true);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            document.getElementById('message').innerHTML = xhr.responseText;
        }
    };
    xhr.send('username=' + username + '&password=' + password);
});