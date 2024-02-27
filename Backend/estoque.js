function buscar() { // mini infor para teste
    const exemploDados = [
        { id: 1, dataSolicitada: '2024-02-26', status: 'concluido', setor: 'Ti', tipo: 'Produto A', dataEntrega: '2024-03-05', prioridade: 'Alta' },
        { id: 2, dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Ufac', tipo: 'Produto B', dataEntrega: '2024-03-10', prioridade: 'Media' },
        { id: 3, dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Ifac', tipo: 'Produto C', dataEntrega: '2024-03-10', prioridade: 'Alta' },
        { id: 4, dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Uninorte', tipo: 'Produto H', dataEntrega: '2024-03-10', prioridade: 'Media' },
        { id: 5, dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Unimeta', tipo: 'Produto Y', dataEntrega: '2024-05-10', prioridade: 'Baixa' },
        { id: 6, dataSolicitada: '2024-02-25', status: 'pendente', setor: 'naosei', tipo: 'Produto Z', dataEntrega: '2024-02-10', prioridade: 'Baixa' }

    ];

    const tabelaResultado = document.getElementById('resultado');
    const tbody = tabelaResultado.getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpar resultados anteriores depois s

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
