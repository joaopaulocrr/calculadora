let resposta = document.querySelector("#res")
let adicao = document.querySelector("#mais")


insert = (num) => {
            resposta.innerHTML += num 
}

limpar = () => {
   var resultado = document.getElementById("res").textContent
   console.log(resultado)
   document.getElementById("res").innerHTML = resultado.substring(0, resultado.length - 1)
}

operation = () => {
      var res = document.getElementById("res").innerHTML
      if(res) {
            document.getElementById("res").innerHTML = eval(res)
      }
      
}

limpartudo = () => {resposta.innerHTML=""}


