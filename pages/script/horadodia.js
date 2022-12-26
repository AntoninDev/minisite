  const escreve = document.getElementById("horaDia")
  const section = document.getElementById("escrita")
  const body = document.getElementById("body")
   let h1 = document.createElement('h1')
   let p = document.createElement('p')
   let br = document.createElement('br')
   let img = document.createElement('img')
    escreve.appendChild(h1)
    section.appendChild(p)
    section.appendChild(br)
    section.appendChild(img)

  setInterval( function () {
  const hora = new Date().getHours()
  if (hora >= 0 && hora <= 9) {
    var horapm = `0${hora}`
  }else {
    horapm = hora
  }
  const min = new Date().getMinutes()
  const sec = new Date().getSeconds()
  if (hora >= 0 && hora < 6) {
    body.style.background = '#020101'
    body.style.color = 'white'
    h1.innerHTML = 'Hora da Madrugada'
    p.innerHTML= `Boa madrugada, agora são ${horapm}:${min} e ${sec} segundos.`
    img.setAttribute('src', 'midia/images/madrugada.png')
    img.setAttribute('class', 'imgmadrugada')
  }else if (hora < 12) {
    body.style.background = '#FAF86A'
    h1.innerHTML = 'Hora do Dia'
    p.innerHTML= `Bom Dia, agora são ${horapm}:${min} e ${sec} segundos.`
    img.setAttribute('src', 'midia/images/dia.png')
    img.setAttribute('class', 'imgdia')
    }else if (hora < 18) {
    body.style.background = '#759FF4'
    h1.innerHTML = 'Hora da Tarde'
    p.innerHTML= `Boa Tarde, agora são ${horapm}:${min} e ${sec} segundos.`
    img.setAttribute('src', 'midia/images/tarde.png')
    img.setAttribute('class', 'imgtarde')
  }else if (hora <= 23) {
    body.style.background = '#1F1F20'
    body.style.color = 'white'
    h1.innerHTML = 'Hora da Noite'
    p.innerHTML= `Boa Noite, agora são ${horapm}:${min} e ${sec} segundos.`
    img.setAttribute('src', 'midia/images/noite.png')
    img.setAttribute('class', 'imgnoite')
  }else {
    escreve.innerHTML = '[ERROR] Hora invalida!'
  }  }, 1 );