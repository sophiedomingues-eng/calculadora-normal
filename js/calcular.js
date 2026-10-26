/*
Operadora aritméticos:
+ soma
- subtração
* multiplicação 
/ divisão
++ incremento (soma mais 1)
-- decremento (subtrai menos 1)


Operadores de Atribuição:
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual
*= multiplicado ou igual

Operadores de sequencia:
+ (serve para concatenar valores
     (string ou variáveis))
-  (serve para subtrair valores
     (strair ou variaveis))

     Operadores de comparação:
     RETORNA TRUE (VERDADEIRO) OU FALSE (FALSO)
     == (comprar 2 valores)
     === (comprar valores e tipo de dado)
     != ( diferente) de valores apenas
     !== (comparar a diferença de valores 
     e tipo de dado)

     < menor  > maior
     <= menor ou igual  >= maior ou igual
     */

     function somar(){
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);
        let resultado = n1 + n2;
        document.getElementById("resultado").innerHTML = resultado;
         //Alterar a cor do resultado caso for negativo
       const corResultado = document.getElementById("resultado");

      if(resultado< 0){
        corResultado.style.backgroundColor =
        "red";
      }
      else{
        corResultado.style.backgroundColor =
        "lightgreen"
      }
     }

     //Alterar a cor do resultado caso for negativo

     


     function subtrair(){
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);
        let resultado = n1 -  n2;
         //Alterar a cor do resultado caso for negativo
        document.getElementById("resultado").innerHTML = resultado;
    

        const corResultado = document.getElementById("resultado");

      if(resultado< 0){
        corResultado.style.backgroundColor =
        "red";
      }
      else{
        corResultado.style.backgroundColor =
        "lightgreen"
      }
    }



        function multiplicar(){
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);
        let resultado = n1 * n2;
         //Alterar a cor do resultado caso for negativo
        document.getElementById("resultado").innerHTML = resultado;
    
    

        const corResultado = document.getElementById("resultado");

      if(resultado< 0){
        corResultado.style.backgroundColor =
        "red";
      }
      else{
        corResultado.style.backgroundColor =
        "lightgreen"
      }
    }

        


    function dividir(){
        let n1 = Number(document.getElementById("num1").value);
        let n2 = Number(document.getElementById("num2").value);

        if (n2 === 0){
           document.getElementById("resultado").innerHTML = "Divisão por 0, não existe";

            document.getElementById("resultado")
            .style.backgroundColor = "yellow";
        }

        else{
          let resultado = n1 / n2;
        document.getElementById("resultado").innerHTML = resultado;
         
        const corResultado = document.getElementById("resultado");

      if(resultado< 0){
        corResultado.style.backgroundColor =
        "red";
      }
      else{
        corResultado.style.backgroundColor =
        "lightgreen"
      }
        }
     
    }


        function limpar(){
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("resultado").innerHTML = "---";
            document.getElementById("resultado").style.backgroundColor = "lightgreen"
        }
