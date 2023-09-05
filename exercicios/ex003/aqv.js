/*for(var c = 1;c <= 10;c++){
    if (c == 1){
        console.log(`você comeu ${c} pizza`)
    }
    else{
        console.log(`você comeu ${c} pizzas`)
    }
}
if (c >= 10){
    console.log(`você comeu muita pizza!`)
}
console.log('fim do programa')*/

var n1 = 8.2
var n2 = 9.2
var n3 = 9.6
total = (n1 + n2 + n3) / 3
console.log(`sua nota foi ${total}`)
if(total <=4.9){
    console.log('reprovado')
}
else if(total <=6.9){
    console.log('recuperação')
}else if(total == 10){
    console.log('nota maxima!')
}else{
    console.log('aprovado!')
}