function ndt(){
    numero = document.getElementById("ynum")
    Number.parseInt(numero)
    result = document.getElementById("result")
    if(numero.value.length == 0){
        alert('insira um valor!')
    }else{
        result.innerHTML = ''
        for(var c = 1;c <= 10;c++){
           var item = document.createElement('option')  
           item.text = `${numero.value} x ${c} = ${numero.value*c}`
           item.value = `result${c}`
           result.appendChild(item)
        }
    }
}