const btnLimpar = document.querySelector("[data-limpar]");
const cardGrid = document.querySelector("[data-grid]");
const form = document.querySelector("[data-form]");

btnLimpar.addEventListener('click', (e) => {

    e.preventDefault();

    form.nome.value = "";
    form.valor.value = "";
    form.imagem.value = "";    
})

form.addEventListener('submit', (e) =>{
    
    e.preventDefault();
    let formData = {
        "nome": e.target.elements["nome"].value,
        "valor": e.target.elements["valor"].value,
        "imagem": e.target.elements["imagem"].value
    }

    cardGrid.appendChild(renderizarCartao(nome, valor, imagem))
    localStorage.setItem("dadosProduto", JSON.stringify(formData));

    form.nome.value = "";
    form.valor.value = "";
    form.imagem.value = "";
})

function renderizarCartao(nome, valor, imagem) {

    const card = document.createElement('div')
    card.className = "main--produtos__card"
    
    card.innerHTML = `
                        <a href="#"><img src="./assets/${imagem.value}.svg" alt="Imagem de um Stormtrooper"></a>
                        <h2 class="main--produtos__card--titulo">${nome.value}</h2>
                        <div class="main--produtos__footer">
                            <span class="main--produtos__card--preco">$ ${valor.value}</span>
                            <a href="#"><img src="./assets/🦆 icon _trash 2_.png" alt="lixeira"></a>
                        </div>
                    `

    return card;
}