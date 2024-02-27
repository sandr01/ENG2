function buscar() {
    const exemploDados = [
        { id: 1, dataSolicitada: '2024-02-26', status: 'concluido', setor: 'Armazém', tipo: 'Produto A', dataEntrega: '2024-03-05', prioridade: 'alta' },
        { id: 2, dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Logística', tipo: 'Produto B', dataEntrega: '2024-03-10', prioridade: 'baixa' }

    ];

    const tabelaResultado = document.getElementById('resultado');
    const tbody = tabelaResultado.getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpar resultados anteriores

    exemploDados.forEach(dado => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${dado.id}</td>
            <td>${dado.dataSolicitada}</td>
            <td>${dado.status}</td>
            <td>${dado.setor}</td>
            <td>${dado.tipo}</td>
            <td>${dado.dataEntrega}</td>
            <td>${dado.prioridade}</td>
        `;
        tbody.appendChild(tr);
    });
}
