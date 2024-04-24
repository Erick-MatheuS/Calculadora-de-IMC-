$(function(){

    let button = $("button").bind("click", ()=>{

        let altura = $("#altura").val();
        let peso = $("#peso").val();
        let resposta = $("#resposta");

        let imc = peso / (altura * altura);

        if(imc <= 16){
            var descricao = "Magreza grave";
        }else if(imc >= 16 && imc <=16,99){
            var descrição = "Magreza moderada";
        }else if(imc >= 17 && imc <= 18,5){
            var descricao = "Magreza leve";
        }else if(imc >= 18,6 && imc <= 24,9){
            var descricao = "Peso ideal";
        }else if(imc >= 25 && imc <= 29,9){
            var descricao = "Sobrepeso";
        }else if(imc >= 30 && imc <= 34,9){
            var descricao = "Obsidade grau I";
        }else if(imc >= 35 && imc <= 39,9){
            var descricao = "Obesidade II ou severa";
        }else if(imc >= 40){
            var descricao = "Obesidade grau II ou mórbida";
        }
        resposta.html("Seu imc é " + imc + " e o resultado é " + descricao);
    })
})
