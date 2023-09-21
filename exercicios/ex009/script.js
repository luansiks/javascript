var lista = []
var n = document.getElementById('ynum')
var result = document.getElementById('result')
var resu = document.getElementById('resu')
function ady(){
    var cert = ''
    Number.parseInt(n)
    if(n.value < 1 || n.value > 100){
        alert('numero existente ou numero invalido!')
    }else{
        for(var conta = 0;conta <= lista.length;conta++){
            if(n.value == lista[conta]){
                alert('numero existente ou numero invalido!')
                cert = true
            }
        }
        if(cert == true){
        }
        else{
            Number.parseInt(n.value)
            lista.push(Number(n.value))
            var item = document.createElement('option')
            item.text = `valor  ${n.value} adicionado`
            item.value = `result${n.value}`
            result.appendChild(item)
            n.value = ''
            n.focus()
        }
    }
}

function fim(){
    if(lista.length == 0){
        alert('adicione numeros para finalizar')
    }else{
        resu.innerHTML = ''
        resu.innerHTML += `ao todo temos ${lista.length} numero(s) cadastrado(s)<br><br>`
        var maior = Number(lista[0])
        var menor = Number(lista[0])
        var soma = 0
        for(var pos in lista){  
            soma += Number(lista[pos])
            if(lista[pos] > maior)
                maior = lista[pos]
            if(lista[pos] < menor){
                menor = lista[pos]
            }
            media = soma / lista.length
        }
        resu.innerHTML += `o menor valor é ${menor}<br><br>`
        resu.innerHTML += `o maior valor é ${maior}<br><br>`
        resu.innerHTML += `Somando os valores adicionados temos ${soma}<br><br>`
        resu.innerHTML += `a media é ${media}`
    }
}
