document.getElementById('consultarProfessor').addEventListener('click', (e) => {
    e.preventDefault();

    let id = document.getElementById('id').value;
    let res = document.getElementById('res');

    // Corrigindo a URL e removendo a chave extra }
    fetch(`http://localhost:8081/professor/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Professor não encontrado.');
            }
            return response.json();
        })
        .then(professor => {
            res.innerHTML = `
                <h3>Dados do Professor</h3>
                <p><strong>Nome:</strong> ${professor.nome}</p>
                <p><strong>Sobrenome:</strong> ${professor.sobrenome}</p>
                <p><strong>Matrícula:</strong> ${professor.matricula}</p>
                <p><strong>Telefone:</strong> ${professor.telefone}</p>
                <p><strong>Email:</strong> ${professor.email}</p>
                <hr />`;
        })
        .catch(err => {
            alert(err.message);
            res.innerHTML = '';
        });
});