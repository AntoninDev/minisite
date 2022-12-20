const escreve = document.getElementById("horaDia")
  const section = document.getElementById("escrita")
  const body = document.getElementById("body")
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
    escreve.innerHTML = '<h1>Hora da Madrugada</h1>'
    section.innerHTML= `<p>Boa madrugada, agora são ${horapm}:${min} e ${sec} segundos.</p><br><img src="midia/images/madrugada.png" class="imgmadrugada">`
  }else if (hora < 12) {
    body.style.background = '#FAF86A'
    escreve.innerHTML = '<h1>Hora do Dia</h1>'
    section.innerHTML= `<p>Bom dia, agora são ${horapm}:${min} e ${sec} segundos.</p><br> <img class="imgdia" src="midia/images/dia.png">`
    }else if (hora < 18) {
    body.style.background = '#759FF4'
    escreve.innerHTML = '<h1>Hora da Tarde</h1>'
    section.innerHTML= `<p>Boa tarde, agora são ${horapm}:${min} e ${sec} segundos.</p><br><img src="midia/images/tarde.png" class="imgtarde">`
  }else if (hora <= 23) {
    body.style.background = '#1F1F20'
    body.style.color = 'white'
    escreve.innerHTML = '<h1>Hora da Noite</h1>'
    section.innerHTML= `<p>Boa noite, agora são ${horapm}:${min} e ${sec} segundos.</p><br><img src="midia/images/noite.png" class="imgnoite">`
  }else {
    escreve.innerHTML = '[ERROR] Hora invalida!'
  }  }, 1 );
  
