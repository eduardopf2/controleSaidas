document.getElementById('consultar').addEventListener('click', (e) => {
    e.preventDefault();


    let id = document.getElementById('id').value

    let resConAlunos = document.getElementById('resConAlunos')


    fetch(`http://localhost:8081/aluno/${id}`)

        .then(response => {
            if (!response.ok) {
                throw new Error('Aluno não encontrado.');
            }
            return response.json();
        })
        .then(aluno => {
            resConAlunos.innerHTML = `
                <h3>Dados do aluno</h3>
                <p><strong>Nome:</strong> ${aluno.nome}</p>
                <p><strong>Sobrenome:</strong> ${aluno.sobrenome}</p>
                <p><strong>Matrícula:</strong> ${aluno.matricula}</p>
                <p><strong>Telefone:</strong> ${aluno.telefone}</p>
                <p><strong>Email:</strong> ${aluno.email}</p>
                <hr />`;
        })
        .catch(error => {
            alert(error);
            resConAlunos.innerHTML = '';
        });
});
