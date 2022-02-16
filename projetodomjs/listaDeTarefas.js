const criarTarefa = (evento) => {

    evento.preventDefault()

    const input = document.querySelector('[data-form-input]');
    const valor = input.value
    
    const conteudo = `<p class="content">${valor}</p>`
    
    input.value= " "
}

const novaTarefa =  document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa ) 