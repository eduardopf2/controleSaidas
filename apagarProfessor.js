let apagar = document.getElementById('apagar');
let res = document.getElementById('res');

apagar.addEventListener('click', () => {
    let id = Number(document.getElementById('id').value);

    res.innerHTML = '';

    fetch(`http://localhost:8081/professor/${id}`, {
        method: 'DELETE'
    })
    .then(resp => {
        console.log(resp);
        console.log(resp.status);

        if (resp.status === 204) {
            res.innerHTML += `Professor excluído com sucesso! <br>`;
        } else {
            res.innerHTML += `Professor inexistente. Os dados não foram excluídos! <br>`;
        }
    })
    .catch((err) => {
        console.error('Erro ao tentar excluir os dados!', err);
        res.innerHTML += `Erro ao tentar excluir o professor.`;
    });
});
