function verificar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('txtano')
    res = document.getElementById('res')
    img = document.getElementById('foto')
    txtt = document.getElementById('txtt')
    if (fano.length == 0 || fano.value > ano){
        alert('ERROR - Reveja os dados e digite corretamente')
    } else {
        fsex = document.getElementsByName('sex')
        idade = ano - Number(fano.value)
        genero = ''
        if (fsex[0].checked){
            genero = ('Homem')
            if (idade < 10){
                img.setAttribute('src', 'homemcriança.jpg')
                txtt.innerHTML = ('Esse é um menino de '+ idade + ' anos!')
            } else if (idade < 21){
                img.setAttribute('src', 'adolecente.jpg')
                txtt.innerHTML = ('Esse é um homem de '+ idade + ' anos!')
            } else if (idade < 50){
                img.setAttribute('src', 'homem jovem.jpg')
                txtt.innerHTML = ('Esse é um homem de '+ idade + ' anos!')
            } else if (idade < 90){
                img.setAttribute('src', 'homem idoso.jpg')
                txtt.innerHTML = ('Esse é um homem de '+ idade + ' anos!')
            } else {
                img.setAttribute('src', 'só o pó.jpg')
                txtt.innerHTML = ('Esse é só o pó de '+ idade + ' anos!')}
             } else {
            genero = ('Mulher')
            if (idade < 10){
                img.setAttribute('src', 'menina bebe.jpg')
                txtt.innerHTML = ('Essa é uma menina de '+ idade + ' anos!')
            } else if (idade < 21){
                img.setAttribute('src', 'mulher jovem.jpg')
                txtt.innerHTML = ('Essa é uma mulher de '+ idade + ' anos!')
            } else if (idade < 50){
                img.setAttribute('src', 'mulher.jpg')
                txtt.innerHTML = ('Essa é uma mulher de '+ idade + ' anos!')
            } else if (idade < 90){
                img.setAttribute('src', 'FOTO-IDOSA-1024x669 (1).png')
                txtt.innerHTML = ('Essa é uma mulher de '+ idade + ' anos!')
            } else {
                img.setAttribute('src', 'só o pó.jpg')
                txtt.innerHTML = ('Essa é só o pó de '+ idade + ' anos!')  
            }
        }
    }
}

