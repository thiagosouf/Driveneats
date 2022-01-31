let x
let y
let z
let precoPrato, nomePrato, precoBebida, nomeBebida, precoSobremesa, nomeSobremesa, precoTotal, somaPrato, somaBebida, somaSobremesa;
function prato(valor){
    document.getElementById("prato-1").classList.remove("selecionado");
    document.getElementById("prato-2").classList.remove("selecionado");
    document.getElementById("prato-3").classList.remove("selecionado");
    document.querySelector("#prato-1 > .checkmark-circle").classList.remove("check");
    document.querySelector("#prato-2 > .checkmark-circle").classList.remove("check");
    document.querySelector("#prato-3 > .checkmark-circle").classList.remove("check");
    

    if (valor == 1){
        const meuPrato = document.getElementById("prato-1")
        meuPrato.classList.add("selecionado");
        const check = document.querySelector("#prato-1 > .checkmark-circle");
        check.classList.add("check");
        precoPrato = document.querySelector("#prato-1 > .preco").innerHTML;
        nomePrato = document.querySelector("#prato-1 > .nome").innerHTML;
        
        
    }
    if (valor == 2){
        const meuPrato = document.getElementById("prato-2")
        meuPrato.classList.add("selecionado");
        const check = document.querySelector("#prato-2 > .checkmark-circle");
        check.classList.add("check");
        precoPrato = document.querySelector("#prato-2 > .preco").innerHTML;
        nomePrato = document.querySelector("#prato-2 > .nome").innerHTML;
        
    }
    if(valor == 3){
        const meuPrato = document.getElementById("prato-3")
        meuPrato.classList.add("selecionado");
        const check = document.querySelector("#prato-3 > .checkmark-circle");
        check.classList.add("check");
        precoPrato = document.querySelector("#prato-3 > .preco").innerHTML;
        nomePrato = document.querySelector("#prato-3 > .nome").innerHTML;
    }
    x=true
    validar()
}

function bebida(valor){
    document.getElementById("bebida-1").classList.remove("selecionado");
    document.getElementById("bebida-2").classList.remove("selecionado");
    document.getElementById("bebida-3").classList.remove("selecionado");
    document.querySelector("#bebida-1 > .checkmark-circle").classList.remove("check");
    document.querySelector("#bebida-2 > .checkmark-circle").classList.remove("check");
    document.querySelector("#bebida-3 > .checkmark-circle").classList.remove("check");
    
    if (valor == 1){
        const minhaBebida = document.getElementById("bebida-1")
        minhaBebida.classList.add("selecionado");
        const check = document.querySelector("#bebida-1 > .checkmark-circle");
        check.classList.add("check");
        precoBebida = document.querySelector("#bebida-1 > .preco").innerHTML;
        nomeBebida = document.querySelector("#bebida-1 > .nome").innerHTML;

        
    }
    if (valor == 2){
        const minhaBebida = document.getElementById("bebida-2")
        minhaBebida.classList.add("selecionado");
        const check = document.querySelector("#bebida-2 > .checkmark-circle");
        check.classList.add("check");
        precoBebida = document.querySelector("#bebida-2 > .preco").innerHTML;
        nomeBebida = document.querySelector("#bebida-2 > .nome").innerHTML;
        
        
    }
    if(valor == 3){
        const minhaBebida = document.getElementById("bebida-3")
        minhaBebida.classList.add("selecionado");
        const check = document.querySelector("#bebida-3 > .checkmark-circle");
        check.classList.add("check");
        precoBebida = document.querySelector("#bebida-3 > .preco").innerHTML;
        nomeBebida = document.querySelector("#bebida-3 > .nome").innerHTML;
    }
    y=true
    validar()
}

function sobremesa(valor){
    document.getElementById("sobremesa-1").classList.remove("selecionado");
    document.getElementById("sobremesa-2").classList.remove("selecionado");
    document.getElementById("sobremesa-3").classList.remove("selecionado");
    document.querySelector("#sobremesa-1 > .checkmark-circle").classList.remove("check");
    document.querySelector("#sobremesa-2 > .checkmark-circle").classList.remove("check");
    document.querySelector("#sobremesa-3 > .checkmark-circle").classList.remove("check");
    
    if (valor == 1){
        const minhaSobremesa = document.getElementById("sobremesa-1")
        minhaSobremesa.classList.add("selecionado");
        const check = document.querySelector("#sobremesa-1 > .checkmark-circle");
        check.classList.add("check");
        precoSobremesa = document.querySelector("#sobremesa-1 > .preco").innerHTML;
        nomeSobremesa = document.querySelector("#sobremesa-1 > .nome").innerHTML;
    }
    if (valor == 2){
        const minhaSobremesa = document.getElementById("sobremesa-2")
        minhaSobremesa.classList.add("selecionado");
        const check = document.querySelector("#sobremesa-2 > .checkmark-circle");
        check.classList.add("check");
        precoSobremesa = document.querySelector("#sobremesa-2 > .preco").innerHTML;
        nomeSobremesa = document.querySelector("#sobremesa-1 > .nome").innerHTML;
    }
    if(valor == 3){
        const minhaSobremesa = document.getElementById("sobremesa-3")
        minhaSobremesa.classList.add("selecionado");
        const check = document.querySelector("#sobremesa-3 > .checkmark-circle");
        check.classList.add("check");
        precoSobremesa = document.querySelector("#sobremesa-3 > .preco").innerHTML;
        nomeSobremesa = document.querySelector("#sobremesa-1 > .nome").innerHTML;
    }
    z=true
    validar()
}

function validar(){
    if (x && y && z == true){
        const botaoPedido = document.querySelector(".fechar-pedido")
        botaoPedido.classList.remove("disable")
        botaoPedido.classList.add("enable")
        botaoPedido.innerHTML = "Fechar pedido";
        document.querySelector(".botao-confirmar").disabled = false;
     }
}

function confirmar(){
    document.querySelector(".confirmar").classList.remove("disable-carrinho")
    document.querySelector(".primeiro-item > p:first-child").innerHTML = nomePrato;
    document.querySelector(".segundo-item > p:first-child").innerHTML = nomeBebida;
    document.querySelector(".terceiro-item > p:first-child").innerHTML = nomeSobremesa;
    document.querySelector(".primeiro-item > p:last-child").innerHTML = precoPrato;
    document.querySelector(".segundo-item > p:last-child").innerHTML = precoBebida;
    document.querySelector(".terceiro-item > p:last-child").innerHTML = precoSobremesa;
    somaBebida = precoBebida.replace('R$ ','')
    somaBebida = somaBebida.replace(',','.')
    somaPrato = precoPrato.replace('R$ ','')
    somaPrato = somaPrato.replace(',','.')
    somaSobremesa = precoSobremesa.replace('R$ ','')
    somaSobremesa = somaSobremesa.replace(',','.')
    somaTotal = (parseFloat(somaBebida) + parseFloat(somaPrato) + parseFloat(somaSobremesa)).toFixed(2)
    somaTotal = String(somaTotal)
    somaTotal = somaTotal.replace('.',',')
    document.querySelector(".total-item > p:last-child").innerHTML = 'R$ ' + somaTotal;
}

function cadastrar(){
    let nome = prompt("qual seu nome?")
    let endereco = prompt("qual seu endereço?")
    let mensagem ="Olá, gostaria de fazer o pedido:\n   - Prato: " + nomePrato + "\n   - Bebida: " + nomeBebida +"\n   - Sobremesa: " + nomeSobremesa + "\n   Total: R$ " + somaTotal + "\n\n *NOME:* " + nome + "\n *ENDEREÇO:* " + endereco
    window.open("https://wa.me/+5521920187161?text=" + encodeURIComponent(mensagem)) 
}

function cancelar(){
    document.querySelector(".confirmar").classList.add("disable-carrinho")
}


