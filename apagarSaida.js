let apagar = document.getElementById('apagar')
let res = document.getElementById('res')

apagar.addEventListener('click', () => {
    let id = Number(document.getElementById('id').value)

    res.innerHTML = ' '

    fetch(`http://localhost:8081/aluno/${id}`, {
        method: 'DELETE'
    })
    .then(resp => {
        console.log(resp)
        console.log(resp.status)
        if(resp.status == 204){
            res.innerHTML +=`Saída excluída com sucesso! <br>`
        }else{
            resp.innerHTML += `Aluno inexistente. Os dados não foram excluídos! <br>`
        }
    })
    .catch((err) => {
        console.error('Erro ao listar os dados!', err)
    })
})


