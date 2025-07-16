let listar = document.getElementById('listar')
let res = document.getElementById('res')

let nome = document.getElementById('nome')
let matricula = document.getElementById('matricula')

listar.addEventListener('click', ()=>{
    res.innerHTML = ' '

    fetch(`http://localhost:8081/saida`)
    .then(resp => resp.json())
    .then(dados => {
        console.log(dados)
        
        dados.forEach(dad => {
            res.innerHTML += `Data de Solicitacao: ${dad.dataSolicitacao} <br>`
            res.innerHTML += `Hora de Saida:  ${dad.horaSaida} <br>`
            res.innerHTML += `Hora de Retorno:  ${dad.horaRetorno} <br>`
            res.innerHTML += `Motivo:  ${dad.motivo} <br>`
            res.innerHTML += `Local de destino:  ${dad.localDestino} <br>`
            res.innerHTML += `Status:  ${dad.status} <br>`
            res.innerHTML += `Nome do Aluno:  ${dad.nomeAluno} <br>`
            res.innerHTML += `Nome do Professor:  ${dad.nomeProfessor} <br><br>`
        

        
        })
    })
    .catch((err)=>{
        console.error('Erro ao listar os dados das Saídas!',err)
    })
})


