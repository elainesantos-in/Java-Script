function erificar()
var data = new Date()
var ano = data.getFullYear()
var anoPessoa = document.getElementById('dataNasc')
var resp = document.getElementById('resp')
//poderia ser tambem: var resp = document.querySelector('div#resp')
    if (anoPessoa.value.lenght == 0 || Number(anoPessoal.value) > ano) {
        window.alert('[ERRO] Verifique os dados novamente etente e novamento')
    }
    else {
        var opsex = document.getElementById('tipSex')
        var idade = anoPessoa - ano
        var gênero = ' '
        var img = document.createElement('img')
        img.setAttribute('id','foto')
            // não enendi esse id e foto
        if (opsex[0].checked) {
            gênero = 'Homem'
            
            if (idade >= 0 && idade < 10)
            //Criança
            img.setAttribute('src','fotomenino.png')
            } else if (idade < 21) {
            //Jovem
            img.setAttribute('src','fotojovem.png')
            } else if ( idade < 50) {
            //Homem
            img.setAttribute('src','fotohomem.png')
            } else {
            //Idoso
            img.setAttribute('src','fotosenhor.png')
            }
        } else if (opsex[1].checked) {
            gênero = 'Mulher'

            if (idade >=0 && idade < 10)
            //Criança
            img.setAttribute('src','fotomenino.png')
            } else if  (idade < 21) {
            //Jovem
            img.setAttribute('src','fotomoça.png')
            } else if (idade < 50) {
            //Adulto
            img.setAttribute('src','fotomulher.png')
            } else {
            //Idoso
            img.setAttribute('src','fotosenhora.png')
            }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img) //não entendi esse comando