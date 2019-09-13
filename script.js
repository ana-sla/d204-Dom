let menu = document.querySelector(".menu"); 
let nav= document.querySelector("nav");

let input = document.querySelector("input");
let botao = document.querySelector("button");
let h2 = document.querySelector("h2");

// Evento


function mostrarMenu(){ //nesse caso nao precisa declarar nemhum parametro no parenteses pq nao vamos inserir nenhum valor 
//INLINE HTML
    // nav.style.display="block"; //dessa forma, usando o style direto do HTML, ele vai colocar as proriedades direto no html, tipo um css inline, que tem a maior prioridade
//CSS    
    //nav.classList.add("visivel"); //aqui ele puxa pelo CSS e diciona uma class no momento do evento.

//JEITO 1
    // if (nav.classList.contains("visivel")){
    //     nav.classList.remove("visivel");
    //  } else{
    //     nav.classList.add("visivel");
    // } // classlist = consulta e faz mudanças dentro de todos os elementos de uma class. 
      //aqui estamos fazendo uma condição dentro do onclick, para fazer aparecer de desaparecer a class 'visivel' no html e funcionar o menu  
      
 //JEITO 2
 
    nav.classList.toggle ("visivel"); //o toggle ja faz a alternancia no hmtl automaticamente
    menu.classList.toggle("ativo");
}

menu.onclick =mostrarMenu; 

function pegarNome(){
    let nome = input.value;
    h2.innerHTML = `Seja bem Vind@ ${nome}`;
    input.value ="";

}

botao.onclick = pegarNome;