
let x
let y
let z
let precoPrato, precoBebida, precoSobremesa, precoTotal;
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
        
        
    }
    if (valor == 2){
        const meuPrato = document.getElementById("prato-2")
        meuPrato.classList.add("selecionado");
        const check = document.querySelector("#prato-2 > .checkmark-circle");
        check.classList.add("check");
        precoPrato = document.querySelector("#prato-2 > .preco").innerHTML;
        
    }
    if(valor == 3){
        const meuPrato = document.getElementById("prato-3")
        meuPrato.classList.add("selecionado");
        const check = document.querySelector("#prato-3 > .checkmark-circle");
        check.classList.add("check");
        precoPrato = document.querySelector("#prato-3 > .preco").innerHTML;
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
        
    }
    if (valor == 2){
        const minhaBebida = document.getElementById("bebida-2")
        minhaBebida.classList.add("selecionado");
        const check = document.querySelector("#bebida-2 > .checkmark-circle");
        check.classList.add("check");
        precoBebida = document.querySelector("#bebida-2 > .preco").innerHTML;
        
        
    }
    if(valor == 3){
        const minhaBebida = document.getElementById("bebida-3")
        minhaBebida.classList.add("selecionado");
        const check = document.querySelector("#bebida-3 > .checkmark-circle");
        check.classList.add("check");
        precoBebida = document.querySelector("#bebida-3 > .preco").innerHTML;
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
    }
    if (valor == 2){
        const minhaSobremesa = document.getElementById("sobremesa-2")
        minhaSobremesa.classList.add("selecionado");
        const check = document.querySelector("#sobremesa-2 > .checkmark-circle");
        check.classList.add("check");
        precoSobremesa = document.querySelector("#sobremesa-2 > .preco").innerHTML;
    }
    if(valor == 3){
        const minhaSobremesa = document.getElementById("sobremesa-3")
        minhaSobremesa.classList.add("selecionado");
        const check = document.querySelector("#sobremesa-3 > .checkmark-circle");
        check.classList.add("check");
        precoSobremesa = document.querySelector("#sobremesa-3 > .preco").innerHTML;
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
     }
}



