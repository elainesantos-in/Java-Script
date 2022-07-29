function verificar()
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamento')
    }else {
        var fsex = documento.getElementsByName ('radsex')
        var idade = ano - Number(fano.value) > ano
        var gênero =  ' '
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0] - checked)
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                //Criança
                img.setAttribute('src','fotomenino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','fotojovem.png')
            } else if (idade < 50) {
                //Adulto 
                img.setAtribute('src','fotohomem.png')
            } else {
                img.setAttribute('src', 'fotosenhor.png')
            } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute ('src','fotomenina.png')
             } else if (idade < 21) {
                //Jovem
                img.setAttribute('src','fotomoça.png')
            } else if (idade < 50) {
                //Adulto 
                img.setAtribute('src','fotomulher.png')
            } else {
                img.setAttribute('src', 'fotosenhora.png')
            }
        }

        res.getElementsByClassName.textAlign = 'center'
        reportError.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

       