var num = [5,2,3,9,8]
num.push(1)
num.sort()
console.log(num)
console.log(`nosso array tem ${num.length} posições`)
console.log(`o primeiro valor do array é ${num[0]}`)

var valor = num.indexOf(8)
if(valor >= 0){
    console.log(`o valor ${num[valor]} esta na posição ${valor}`)
}else{
    console.log(`o valor não foi encontrado`)
}