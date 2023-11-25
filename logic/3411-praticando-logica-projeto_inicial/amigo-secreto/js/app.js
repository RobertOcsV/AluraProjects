let peoplelist = [];
let peopleListSort = [];



function adicionar() {
  addPeople = document.getElementById("nome-amigo").value;
  peoplelist.push(addPeople);
  peopleListSort = [...peoplelist];
  updateFriendsList();
}

function updateFriendsList() {  
  let lista = document.getElementById("lista-amigos");
  lista.innerHTML = "";

  peoplelist.forEach((addPeople) => {
    lista.innerHTML += `<p id="lista-amigos">${addPeople}</p>`;
  });
}

function sortear() {
  embaralharArray(peoplelist);
  embaralharArray(peopleListSort);
  let sorteio = document.getElementById("lista-sorteio");

  sorteio.innerHTML = "";

  peoplelist.forEach((addPeople, i) => {
    sorteio.innerHTML += `<p id="lista-sorteio">${addPeople} -> ${peopleListSort[i]}</p>`;
  });

  console.log(peoplelist, peopleListSort);
}

function embaralharArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function reiniciar(){
  peoplelist.length = 0;  
  peopleListSort.length = 0;
  
  sortear()
  updateFriendsList()
}
