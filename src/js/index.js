/* Automatizando o slide */
/* Vai definir o numero do btn selecionado com concatenação */
let indexImage = 1;

/* Determina que o elemento será checado, no documento pelo id */
document.getElementById('radio1').checked = true;

/* Insere um intervalo de troca para o manual-nav com uma function */
setInterval ( function(){
    indexImage++;
    if (indexImage>4){
        indexImage = 1;
    }
    document.getElementById('radio'+indexImage).checked = true;
}, 3000)
/* Vai criar uma contagem automatica do indice radio e, determinar a troca de img a cada 3seg*/