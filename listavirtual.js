function adicionarItem() {
    const input = document.getElementById("itemInput");
    const texto = input.value.trim();
  
    if (texto === "") {
      alert("Digite algo para adicionar.");
      return;
    }
  
    const lista = document.getElementById("lista");
    const novoItem = document.createElement("li");
    novoItem.textContent = texto;
    lista.appendChild(novoItem);
  
    input.value = "";
    input.focus();
  
    atualizarEspera();
  }
  
  function atualizarEspera() {
    const lista = document.getElementById("lista");
    const espera = document.getElementById("espera");
  
    // Limpa a lista de espera atual
    espera.innerHTML = "";
  
    // Percorre todos os itens da lista principal e replica na lista de espera
    const itens = lista.getElementsByTagName("li");
  
    for (let i = 0; i < itens.length; i++) {
      const nome = itens[i].textContent;
      const itemEspera = document.createElement("li");
      itemEspera.textContent = nome;
      espera.appendChild(itemEspera);
    }
  }
  