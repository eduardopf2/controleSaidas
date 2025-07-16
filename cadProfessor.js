let cadastrar = document.getElementById('cadastrarProfessor');
let res = document.getElementById('resCADpr');

cadastrar.addEventListener('click', (e) => {
    e.preventDefault();

    let nome = document.getElementById('nmProfessor').value
    let sobrenome = document.getElementById('sobrenome').value
    let matricula = document.getElementById('matricula').value
    let telefone = document.getElementById('telefone').value
    let email = document.getElementById('email').value



    let dadosProfessor = {
        nome: nome,
        sobrenome: sobrenome,
        matricula: matricula,
        telefone: telefone,
        email: email
    };

    res.innerHTML = '';

    // dados via POST
    fetch('http://localhost:8081/professor', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dadosProfessor)
    })
    .then(resp => {
        if (!resp.ok) {
            throw new Error('Erro ao cadastrar professor.');
        }
        return resp.json();
    })
    .then(dados => {
        res.innerHTML = `
            <p><strong>Professor cadastrado com sucesso!</strong></p>
            <p><strong>Nome:</strong> ${nome}</p>
            <p><strong>Sobrenome:</strong> ${sobrenome}</p>
            <p><strong>Matrícula:</strong> ${matricula}</p>
            <p><strong>Telefone:</strong> ${telefone}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;
    })
    .catch((err) => {
        console.error(err);
        res.innerHTML = `<p ">Erro ao cadastrar o professor.</p>`;
    });
});


