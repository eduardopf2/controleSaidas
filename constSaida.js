document.getElementById('consultarSaidas').addEventListener('click', (e) => {
    e.preventDefault();

    let id = document.getElementById('id').value;
    let res = document.getElementById('res');

    fetch(`http://localhost:8081/saida/${id}`)  
        .then(response => {
            if (!response.ok) {
                throw new Error('Saída não encontrada.');
            }
            return response.json();
        })
        .then(saida => {
            res.innerHTML = `
                <p>Data de Solicitação: ${saida.dataSolicitacao}</p>
                <p>Hora de Saída: ${saida.horaSaida}</p>
                <p>Hora de Retorno: ${saida.horaRetorno}</p>
                <p>Motivo: ${saida.motivo}</p>
                <p>Local de Destino: ${saida.localDestino}</p>
                <p>Status: ${saida.status}</p>
                <p>Nome do Aluno: ${saida.nomeAluno}</p>
                <p>Nome do Professor: ${saida.nomeProfessor}</p>
            `;
        })
        .catch(err => {
            alert(err.message);
            res.innerHTML = '';
        });
});
