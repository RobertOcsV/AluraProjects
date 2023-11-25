let peoplelist = [];
let peopleListSort = [];

function adicionar() {
  // peoplelist.forEach(){

  // }
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

  for (let i = 0; i < peoplelist.length; i++) {
  if (i == peoplelist.length - 1) {
    sorteio.innerHTML += `<p id="lista-sorteio">${peoplelist[i]} -> ${peoplelist[0]}</p>`;
  } else {
    sorteio.innerHTML += `<p id="lista-sorteio">${peoplelist[i]} -> ${peoplelist[i + 1]}</p>`;
  }
}

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
