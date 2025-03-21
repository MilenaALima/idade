function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var anoNasc = document.getElementById('ano')
    var resposta = document.getElementById('resposta')

    if(anoNasc.value.length == 0 || Number(anoNasc.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(anoNasc.value)
        var sex = ''
        var img = document.createElement('img') /*Criando imagem*/ 
        img.setAttribute('id', 'foto')

        if(sexo[0].checked){
            sex = 'Mulher'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'imagens/menina.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovem_mulher.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/mulher_adulta.png')
            } else {
                img.setAttribute('src', 'imagens/mulher_idosa.png')
            }
        } else {
            sex = 'Homem'
            if (idade >= 0 && idade < 15) {
                img.setAttribute('src', 'imagens/menino.png')
            } else if (idade < 30) {
                img.setAttribute('src', 'imagens/jovem_homem.png')
            } else if (idade < 60) {
                img.setAttribute('src', 'imagens/homem_adulto.png')
            } else {
                img.setAttribute('src', 'imagens/homem_idoso.png')
            }
        }

        resposta.innerHTML = `Detectamos ${sex} com ${idade} anos.`
        resposta.appendChild(img) /*Mostrando a imagem logo abaixo do paragrafo*/
    }
}