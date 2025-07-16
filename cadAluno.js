
    let cadastrarAluno = document.getElementById('cadastrarAluno');
    let resCADaluno = document.getElementById('resCADaluno');

    cadastrarAluno.addEventListener('click', (e) => {
        e.preventDefault();

        let nome = document.getElementById('nome').value;
        let sobrenome = document.getElementById('sobrenome').value;
        let matricula = document.getElementById('matricula').value;
        let telefone = document.getElementById('telefone').value;
        let email = document.getElementById('email').value;

        let dadosAluno = {
            nome: nome,
            sobrenome: sobrenome,
            matricula: matricula,
            telefone: telefone,
            email: email
        };

        resCADaluno.innerHTML = '';

       
        fetch('http://localhost:8081/aluno', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosAluno)
        })
        .then(resp => {
            if (!resp.ok) {
                throw new Error('Erro ao cadastrar aluno.');
            }
            return resp.json();
        })
        .then(dados => {
            resCADaluno.innerHTML = `
                <p><strong>Aluno cadastrado com sucesso!</strong></p>
                <p><strong>Nome:</strong> ${nome}</p>
                <p><strong>Sobrenome:</strong> ${sobrenome}</p>
                <p><strong>Matrícula:</strong> ${matricula}</p>
                <p><strong>Telefone:</strong> ${telefone}</p>
                <p><strong>Email:</strong> ${email}</p>
            `;
        })
        .catch((err) => {
            console.error(err);
            resCADaluno.innerHTML = `<p style="color: red;">Erro ao cadastrar o aluno.</p>`;
        });
    });

