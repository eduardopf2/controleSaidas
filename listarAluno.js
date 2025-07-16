let listar = document.getElementById('listar')
let res = document.getElementById('res')

let nome = document.getElementById('nome')
let matricula = document.getElementById('matricula')

listar.addEventListener('click', ()=>{
    res.innerHTML = ' '

    fetch(`http://localhost:8081/aluno`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        
        dados.forEach(dad => {
            res.innerHTML += `Nome: ${dad.nome} <br>`
            res.innerHTML += `Matrícula:  ${dad.matricula} <br> <BR>`
        
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os dados dos Alunos!',err)
    })
})


