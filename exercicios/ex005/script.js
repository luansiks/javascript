function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var formano = document.getElementById('yano')
    var result = document.getElementById('result')
    if(formano.value > ano || formano.value < ano-122){
        window.alert('verifique a data')
    }else{
        alert('tudo ok')
        var sex = document.getElementsByName('op')
        var idade = ano - formano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(sex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'pexels-ricky-esquivel-1868481.jpg')
            }else if(idade <= 20){
                img.setAttribute('src', 'pexels-sebastiaan-stam-1304647.jpg')
            }else if(idade < 60){
                img.setAttribute('src', 'pexels-spencer-selover-428328.jpg')
            }else{
                img.setAttribute('src', 'pexels-thgusstavo-santana-2774292.jpg')
            }
        }else{
            genero = 'mulher'
            if(idade >= 0 && idade <= 10){
                img.setAttribute('src', 'pexels-bin-ziegler-1364756.jpg')
            }else if(idade <= 20){
                img.setAttribute('src', 'pexels-anastasiya-gepp-1462633.jpg')
            }else if(idade < 60){
                img.setAttribute('src', 'pexels-mert-coşkun-17997570.jpg')
            }else{
                img.setAttribute('src', 'pexels-pixabay-509236.jpg')
            }
        }
        img.style.width = '300px'
        img.style.borderRadius = '90000px'
        img.style.paddingTop = '10px'
        result.innerHTML = `datectamos um(a) ${genero} de ${idade} anos!`
        result.appendChild(img)
    }
}   