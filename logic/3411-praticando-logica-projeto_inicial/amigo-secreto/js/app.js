let peoplelist = []
let peopleListSort = []
function adicionar() {
    addPeople = document.getElementById("nome-amigo").value
    peoplelist.push(addPeople)
    peopleListSort = [...peoplelist]    
    updateFriendsList()    
}

function updateFriendsList(){    
  let lista = document.getElementById("lista-amigos")
  lista.innerHTML = ''
  
    for(addPeople of peoplelist){
       lista.innerHTML += `<p id="lista-amigos">${addPeople}</p>   `
    } 
    
}

function sortear() {
  embaralharArray(peoplelist);
  embaralharArray(peopleListSort);

  let sorteio = document.getElementById('lista-sorteio');
  sorteio.innerHTML = '';

  for (let i = 0; i < peoplelist.length && i < peopleListSort.length; i++) {
      sorteio.innerHTML += `<p id="lista-sorteio">${peoplelist[i]} -> ${peopleListSort[i]}</p>`;
  }

  console.log(peoplelist, peopleListSort);
}

    
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      // Troca os elementos array[i] e array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
