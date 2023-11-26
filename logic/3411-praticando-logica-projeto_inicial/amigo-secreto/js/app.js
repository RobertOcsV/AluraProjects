let peoplelist = [];
let peopleListSort = [];
let sorteio = document.getElementById("lista-sorteio");
let lista = document.getElementById("lista-amigos");

function adicionar() {
  addPeople = document.getElementById("nome-amigo").value;

  if (peoplelist.includes(addPeople)) {
    alert(`${addPeople} Já foi incluido(a)`);
    return;
  }

  if (addPeople.length >= 3) {
    peoplelist.push(addPeople);
    peopleListSort = [...peoplelist];
    updateFriendsList();
  } else {
    alert("é necessário ter 3 caracteres ou mais!");
  }
}

function updateFriendsList() {
  lista.innerHTML = "";

  peoplelist.forEach((addPeople) => {
    lista.innerHTML += `<p id="lista-amigos">${addPeople}</p>`;
  });
}

function sortear() {
  if (peoplelist.length >= 4) {
    embaralharArray(peoplelist);
    embaralharArray(peopleListSort);

    sorteio.innerHTML = "";

    for (let i = 0; i < peoplelist.length; i++) {
      if (i == peoplelist.length - 1) {
        sorteio.innerHTML += `<p id="lista-sorteio">${peoplelist[i]} -> ${peoplelist[0]}</p>`;
      } else {
        sorteio.innerHTML += `<p id="lista-sorteio">${peoplelist[i]} -> ${
          peoplelist[i + 1]
        }</p>`;
      }
    }
  } else {
    alert("É necessário adicionar pelo menos 4 pessoas");
  }
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function reiniciar() {
  peoplelist.length = 0;
  peopleListSort.length = 0;
  sorteio.innerHTML = "";
  lista.innerHTML = "";
}
