// aluguel.js

// Função para adicionar um item à tabela
function adicionarItem() {
    // Obter os valores do formulário
    var setor = document.getElementById("setor").value;
    var servidor = document.getElementById("servidor").value;
    var matricula = document.getElementById("matricula").value;
    var dataEmprestimo = document.getElementById("dataEmprestimo").value;
    var dataDevolucao = document.getElementById("dataDevolucao").value;
    var equipamento = document.getElementById("equipamento").value;
    var descricaoEquipamento = document.getElementById("descricaoEquipamento").value;
    var quantidade = document.getElementById("quantidade").value;
    var observacao = document.getElementById("observacao").value;

    // Criar uma nova linha na tabela
    var table = document.getElementById("estoque").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);

    // Adicionar células à nova linha
    var cellSetor = newRow.insertCell(0);
    var cellServidor = newRow.insertCell(1);
    var cellMatricula = newRow.insertCell(2);
    var cellDataEmprestimo = newRow.insertCell(3);
    var cellDataDevolucao = newRow.insertCell(4);
    var cellEquipamento = newRow.insertCell(5);
    var cellDescricaoEquipamento = newRow.insertCell(6);
    var cellQuantidade = newRow.insertCell(7);
    var cellObservacao = newRow.insertCell(8);
    var cellAcoes = newRow.insertCell(9);

    // Preencher as células com os valores do formulário
    cellSetor.innerHTML = setor;
    cellServidor.innerHTML = servidor;
    cellMatricula.innerHTML = matricula;
    cellDataEmprestimo.innerHTML = dataEmprestimo;
    cellDataDevolucao.innerHTML = dataDevolucao;
    cellEquipamento.innerHTML = equipamento;
    cellDescricaoEquipamento.innerHTML = descricaoEquipamento;
    cellQuantidade.innerHTML = quantidade;
    cellObservacao.innerHTML = observacao;

    // Adicionar um botão de remoção
    var removeButton = document.createElement("button");
    removeButton.innerHTML = "Remover";
    removeButton.onclick = function () {
        // Remover a linha ao clicar no botão
        table.deleteRow(newRow.rowIndex);
    };
    cellAcoes.appendChild(removeButton);

    // Limpar os campos do formulário
    limparCampos();
}

// Função para limpar os campos do formulário
function limparCampos() {
    document.getElementById("setor").value = "";
    document.getElementById("servidor").value = "";
    document.getElementById("matricula").value = "";
    document.getElementById("dataEmprestimo").value = "";
    document.getElementById("dataDevolucao").value = "";
    document.getElementById("equipamento").value = "";
    document.getElementById("descricaoEquipamento").value = "";
    document.getElementById("quantidade").value = "";
    document.getElementById("observacao").value = "";
}
