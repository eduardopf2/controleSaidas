let atualizar = document.getElementById('atualizar');
let buscar = document.getElementById('buscar');
let res = document.getElementById('res');

buscar.addEventListener('click', (e) => {
    e.preventDefault();
    let id = Number(document.getElementById('id').value);
    res.innerHTML = '';

    fetch(`http://localhost:8081/saida/${id}`)
        .then(resp => {
            if (!resp.ok) throw new Error('Saída não encontrada');
            return resp.json();
        })
        .then(saida => {
            document.getElementById('dataSolicitacao').value = saida.dataSolicitacao;
            document.getElementById('horaSaida').value = saida.horaSaida;
            document.getElementById('horaRetorno').value = saida.horaRetorno;
            document.getElementById('motivo').value = saida.motivo;
            document.getElementById('localDestino').value = saida.localDestino;
            document.getElementById('status').value = saida.status;
            document.getElementById('nomeAluno').value = saida.nomeAluno;
            document.getElementById('nomeProfessor').value = saida.nomeProfessor;
            document.getElementById('aluno_cod').value = saida.aluno_cod;
            document.getElementById('professor_cod').value = saida.professor_cod;
        })
        .catch(err => {
            console.error('Erro ao buscar os dados:', err);
            res.innerHTML = 'Erro ao buscar dados.';
        });
});

atualizar.addEventListener('click', (e) => {
    e.preventDefault();

    let id = Number(document.getElementById('id').value);

    const valores = {
        dataSolicitacao: document.getElementById('dataSolicitacao').value,
        horaSaida: document.getElementById('horaSaida').value,
        horaRetorno: document.getElementById('horaRetorno').value,
        motivo: document.getElementById('motivo').value,
        localDestino: document.getElementById('localDestino').value,
        status: document.getElementById('status').value,
        nomeAluno: document.getElementById('nomeAluno').value,
        nomeProfessor: document.getElementById('nomeProfessor').value,
        aluno_cod: document.getElementById('aluno_cod').value,
        professor_cod: document.getElementById('professor_cod').value
    };

    fetch(`http://localhost:8081/saida/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valores)
    })
        .then(resp => {
            if (!resp.ok) throw new Error('Erro ao atualizar');
            return resp.json();
        })
        .then(data => {
            res.innerHTML = 'Dados atualizados com sucesso!';
        })
        .catch(err => {
            console.error('Erro ao gravar os dados:', err);
            res.innerHTML = 'Erro ao atualizar.';
        });
});
