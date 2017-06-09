
var salvaButton = document.getElementById("salva");
var lista = document.getElementById("lista");
var texto = document.getElementById("entrada");

salvaButton.onclick = clique;

function clique(){ 
    var newUl = document.createElement('li');    
    newUl.appendChild(document.createTextNode(texto.value))
    lista.appendChild(newUl);
}
   