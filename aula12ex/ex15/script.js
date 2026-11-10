function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 5) {
                // bebe
                img.setAttribute('src', 'bebe-h.png')
            } else if (idade >= 6 && idade < 14) {
                // criança
                 img.setAttribute('src', 'criança-h.png')
            } else if (idade >= 15 && idade < 50) {
                // jovem
                
                 img.setAttribute('src', 'jovem-h.png')
            } else {
                // adulto 
                 img.setAttribute('src', 'adulto-h.png')
            }

        } else if (fsex[1].checked) {
            genero = 'mulher'
             if (idade >= 0 && idade < 5) {
                // bebe
                img.setAttribute('src', 'bebe-m.png')
            } else if (idade >= 6 && idade < 14) {
                // criança
                 img.setAttribute('src', 'criança-m.png')
            } else if (idade >= 15 && idade < 40) {
                // jovem
                
                 img.setAttribute('src', 'jovem-m.png')
            } else {
                // adulto 
                 img.setAttribute('src', 'adulto-m.png')
            }
        }
        
        res.style.textAlign = 'center'    
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
