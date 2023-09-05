function toque(){
    var data = new Date
    var ano = data.getFullYear()
    var data = document.getElementById('ynumero')
    if(data.value > ano || data.value < ano-122){
        alert('verifique a data')
    }else{
        var idade = ano-data.value
        var img = document.createElement('img')
        var genero = document.getElementsByName('gen')
        img.setAttribute('id', 'foto')
        if(genero[0].checked){
            genero = 'homem'
            if(idade < 10){
                img.setAttribute('src', 'pexels-ricky-esquivel-1868481.jpg')
            }else if(idade <= 20){
                img.setAttribute('src', 'pexels-sebastiaan-stam-1304647.jpg')
            }else if(idade < 60 ){
                img.setAttribute('src', 'pexels-spencer-selover-428328.jpg')
            }else{
                img.setAttribute('src', 'pexels-thgusstavo-santana-2774292.jpg')
            }
        }else{
            genero = 'mulher'
            if(idade < 10){
                img.setAttribute('src', 'pexels-bin-ziegler-1364756.jpg')
            }else if(idade <= 20){
                img.setAttribute('src', 'pexels-anastasiya-gepp-1462633.jpg')
            }else if(idade < 60 ){
                img.setAttribute('src', 'pexels-mert-coşkun-17997570.jpg')
            }else{
                img.setAttribute('src', 'pexels-pixabay-509236.jpg')
            }
        }
        img.style.borderRadius = '10000px'
        img.style.width = '250px'
        img.style.height = '250px'
        result = document.getElementById('result')
        result.innerHTML = `detectamos um(a) ${genero} de ${idade} anos de idade`
        result.appendChild(img)
    }
}