var data;

if (localStorage.getItem("contatos")) {
    data = JSON.parse(localStorage.getItem("contatos"));
} else {
    data = [{
            name: "Ana Britto",
            handle: "ana_britto",
        },
        {
            name: "Ricardo Costa",
            handle: "ricardocosta",
        },
        {
            name: "Tiago Montana",
            handle: "tiagomontana",
        }
    ];

    localStorage.setItem("data", JSON.stringify(data));
}

// create ( pegar o que veio do createcontact e adicionar em data )

// read ( ler data e adicionar na lista )
const list = document.getElementById("contact-list");

data.forEach((pessoa, index)=>{
    var pessoaLi = document.createElement('li')
    var pessoaDiv = document.createElement('div')
    var pessoaP = document.createElement('p')
    var pessoaEdit = document.createElement('button')
    var pessoaRemove = document.createElement('button')
    pessoaP.innerHTML = data[index].name + '</br>' + data[index].handle
    //botao edita
    pessoaEdit.className = "contact-edit"
    pessoaEdit.onclick = () => editar(index)
    //botao remove
    pessoaRemove.className = "contact-remove"
    pessoaRemove.onclick = () => remove(index)
    pessoaDiv.appendChild(pessoaP)
    pessoaDiv.appendChild(pessoaEdit)
    pessoaDiv.appendChild(pessoaRemove)
    pessoaLi.appendChild(pessoaDiv)
    list.appendChild(pessoaLi)
})

// update ( levar para a outra tela com os dados e atualizar )
function editar(numInd){
    localStorage.setItem('index', JSON.stringify(numInd))
    window.location.href='./createcontact.html'
}

// delete ( apagar de data )
function remove(numInd){
    console.log('entrou');
    console.log(data[numInd]);
    data.splice(numInd, 1);
    localStorage.setItem("contatos", JSON.stringify(data));
    location.reload();
}

// busca
const searchInput = document.getElementById("search-input")
searchInput.onkeyup=searchContact
function searchContact() {  
    var input, filter, ul, li, i;
    input = document.getElementById("search-input");
    filter = input.value.toUpperCase();
    filter.length <= 0 ? document.getElementById("showing-contacts").style.display = "none" : document.getElementById("showing-contacts").style.display = "";
    ul = document.getElementById("contact-list");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        if (li[i].textContent.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}