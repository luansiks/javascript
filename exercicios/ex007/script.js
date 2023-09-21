function clica(){
    var inicio = document.getElementById("yini")
    var fim = document.getElementById("yfim")
    var passo = document.getElementById("ypas")
    var result = document.getElementById('result')
    if(inicio.value == '' || fim.value == '' || passo.value == ''){
        alert('não podemos continuar verifique os dados')
    }else{
        if(passo.value == 0){
            alert('conderamos 0 sendo igual a 1')
            passo.value = 1
        }
        if(Number.parseInt(inicio.value) <= Number.parseInt(fim.value)){
            result.innerHTML = `o resultado é: `
            while(Number.parseInt(inicio.value) <= Number.parseInt(fim.value)){
                result.innerHTML += Number.parseInt(inicio.value)
                result.innerHTML += ' &#x1F449; '
                inicio.value = Number.parseInt(inicio.value) + Number.parseInt(passo.value)
            }
            result.innerHTML += ' &#x1F3C1; '
            inicio.value = ''
            fim.value = ''
            passo.value = ''
        }
        }
        if(Number.parseInt(fim.value) <= Number.parseInt(inicio.value)){
            while(Number.parseInt(fim.value) <= Number.parseInt(inicio.value)){
                result.innerHTML += Number.parseInt(inicio.value)
                result.innerHTML += ' &#x1F449; '
                inicio.value = Number.parseInt(inicio.value) - Number.parseInt(passo.value)
            }
            result.innerHTML += ' &#x1F3C1; '
            inicio.value = ''
            fim.value = ''
            passo.value = ''
        } 
}
        