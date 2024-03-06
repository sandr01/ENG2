function buscar() {
    const exemploDados = [
        { dataSolicitada: '2024-02-26', status: 'concluido', setor: 'Ti', tipo: 'Produto A', dataEntrega: '2024-03-05', prioridade: 'alta' },
        { dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Ufac', tipo: 'Produto B', dataEntrega: '2024-03-10', prioridade: 'media' },
        { dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Ifac', tipo: 'Produto C', dataEntrega: '2024-03-10', prioridade: 'alta' },
        { dataSolicitada: '2024-02-25', status: 'em andamento', setor: 'Uninorte', tipo: 'Produto H', dataEntrega: '2024-03-10', prioridade: 'media' },
        { dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Unimeta', tipo: 'Produto Y', dataEntrega: '2024-05-10', prioridade: 'baixa' },
        { dataSolicitada: '2024-02-26', status: 'concluido', setor: 'Ti', tipo: 'Produto A', dataEntrega: '2024-03-05', prioridade: 'alta' },
        { dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Ufac', tipo: 'Produto B', dataEntrega: '2024-03-10', prioridade: 'media' },
        { dataSolicitada: '2024-02-25', status: 'em andamento', setor: 'Ifac', tipo: 'Produto C', dataEntrega: '2024-03-10', prioridade: 'alta' },
        { dataSolicitada: '2024-02-25', status: 'pendente', setor: 'Uninorte', tipo: 'Produto H', dataEntrega: '2024-03-10', prioridade: 'media' },
        { dataSolicitada: '2024-02-25', status: 'andamento', setor: 'Unimeta', tipo: 'Produto Y', dataEntrega: '2024-05-10', prioridade: 'baixa' },
        { dataSolicitada: '2024-02-25', status: 'pendente', setor: 'naosei', tipo: 'Produto Z', dataEntrega: '2024-02-10', prioridade: 'baixa' }
    ];

    // Obter valores do formulário
    const buscaLivre = document.querySelector('.search-bar').value.toLowerCase();
    const dataSolicitada = document.getElementById('dataSolicitada').value;
    const status = document.getElementById('status').value;
    const setor = document.getElementById('setor').value.toLowerCase();
    const tipo = document.getElementById('tipo').value.toLowerCase();
    const dataEntrega = document.getElementById('dataEntrega').value;
    const prioridade = document.getElementById('prioridade').value;

    const tabelaResultado = document.getElementById('resultado');
    const tbody = tabelaResultado.getElementsByTagName('tbody')[0];
    tbody.innerHTML = ''; // Limpar tabela para novos resultados

    const dadosFiltrados = exemploDados.filter(dado => {
        return (buscaLivre === '' || dado.setor.toLowerCase().includes(buscaLivre) || dado.tipo.toLowerCase().includes(buscaLivre))
            && (dataSolicitada === '' || dado.dataSolicitada === dataSolicitada)
            && (status === '' || dado.status === status)
            && (setor === '' || dado.setor.toLowerCase().includes(setor))
            && (tipo === '' || dado.tipo.toLowerCase().includes(tipo))
            && (dataEntrega === '' || dado.dataEntrega === dataEntrega)
            && (prioridade === '' || dado.prioridade === prioridade);
    });

    dadosFiltrados.forEach(dado => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
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
