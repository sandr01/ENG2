function adicionarItem() {
    var setor = document.getElementById("setor").value;
    var servidor = document.getElementById("servidor").value;
    var dataEmprestimo = document.getElementById("dataEmprestimo").value;
    var dataDevolucao = document.getElementById("dataDevolucao").value;
    var equipamento = document.getElementById("equipamento").value;
    var descricaoEquipamento = document.getElementById("descricaoEquipamento").value;
    var quantidade = document.getElementById("quantidade").value;
    var observacao = document.getElementById("observacao").value;

    var table = document.getElementById("estoque").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    newRow.insertCell(0).innerHTML = setor;
    newRow.insertCell(1).innerHTML = servidor;
    newRow.insertCell(2).innerHTML = dataEmprestimo;
    newRow.insertCell(3).innerHTML = dataDevolucao;
    newRow.insertCell(4).innerHTML = equipamento;
    newRow.insertCell(5).innerHTML = descricaoEquipamento;
    newRow.insertCell(6).innerHTML = quantidade;
    newRow.insertCell(7).innerHTML = observacao;

    var cellAcoes = newRow.insertCell(8);
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remover";
    // Definindo a cor do botão para vermelho
    removeButton.style.backgroundColor = "red";
    removeButton.style.color = "white"; // Muda a cor do texto para branco para melhorar a visibilidade
    removeButton.onclick = function() {
        // Esta linha foi ajustada para corrigir a remoção da linha
        table.deleteRow(this.parentElement.parentElement.rowIndex - 1);
    };
    cellAcoes.appendChild(removeButton);

    limparCampos();
}
