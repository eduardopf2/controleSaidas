let cadastrar = document.getElementById('cadastrar')
let res = document.getElementById('res')


let dataSolicitacao = document.getElementById('dataSolicitacao')
let horaSaida = document.getElementById('horaSaida')
let horaRetorno = document.getElementById('horaRetorno')
let motivo = document.getElementById('motivo')
let localDestino = document.getElementById('localDestino')
let statusInput = document.getElementById('status')
let nomeAluno = document.getElementById('nomeAluno')
let nomeProfessor = document.getElementById('nomeProfessor')
let aluno_cod = document.getElementById('aluno_cod')
let professor_cod = document.getElementById('professor_cod')

cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    const valores = {
        dataSolicitacao: dataSolicitacao.value,
        horaSaida: horaSaida.value,
        horaRetorno: horaRetorno.value,
        motivo: motivo.value,
        localDestino: localDestino.value,
        status: statusInput.value,
        nomeAluno: nomeAluno.value,
        nomeProfessor: nomeProfessor.value,
        aluno_cod: Number(aluno_cod.value),
        professor_cod: Number(professor_cod.value)
    }

    console.log(valores)


    res.innerHTML = ' '

    fetch(`http://localhost:8081/saida`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(valores)
    })
    .then(resp => resp.json())
    .then(dadosGrav => {
        console.log(dadosGrav)
        res.innerHTML += `Data de Solicitação: ${dadosGrav.dataSolicitacao} <br>`
        res.innerHTML += `Hora da Saída: ${dadosGrav.horaSaida} <br>`
        res.innerHTML += `Hora do Retorno: ${dadosGrav.horaRetorno} <br>`
        res.innerHTML += `Motivo: ${dadosGrav.motivo} <br>`
        res.innerHTML += `Destino: ${dadosGrav.localDestino} <br>`
        res.innerHTML += `Status: ${dadosGrav.status} <br>`
        res.innerHTML += `Nome do Aluno: ${dadosGrav.nomeAluno} <br>`
        res.innerHTML += `Nome do Professor: ${dadosGrav.nomeProfessor} <br>`
        res.innerHTML += `Código de identificação do Aluno: ${valores.aluno_cod} <br>`
        res.innerHTML += `Código de identificação do Professor: ${valores.professor_cod} <br>`
    })
    .catch((err)=>{
        console.error('Erro ao gravar os dados no banco de dados!',err)
    })

})