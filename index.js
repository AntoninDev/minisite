  const paginas = document.getElementById("paginas")
  const descricao = document.getElementById("descricao")
  const btnvolta = document.getElementById("btnvolta")
  const btnpassa = document.getElementById("btnpassa")
    function passa() {
      paginas.innerHTML = '<a href="pages/notadoaluno.html"> <img alt="Site Nota do aluno" src="pages/midia/images/sitenotadoaluno.jpg"></a><p class="bolinhas">●○</p>'
      descricao.innerHTML = `<h1>Descrição:</h1>
        <p class="descricao"><strong>Calculador de nota do aluno é uma calculadora simples que calcula se o aluno passou ou nao de acordo com suas notas obs: a ultima nota dobra, Entre e veja clicando na imagem acima.</strong></p>`
        btnvolta.innerHTML = `<button class="left" onclick="volta()"><</button>`
        btnpassa.innerHTML = `<button onclick="volta()">></button>`
        window.scroll({top: 1000, behavior:"smooth"})
    }
    function volta() {
      paginas.innerHTML = '<a href="pages/horadodia.html"> <img alt="Site Horas do dia" src="pages/midia/images/sitehorasdodia.jpg"></a><p class="bolinhas">○●</p>'
      descricao.innerHTML = `<h1>Descrição:</h1>
        <p class="descricao"><strong>Horas do dia é um site simples que a cada hora do dia tem uma decoração diferente, Entre e veja clicando na imagem acima.</strong></p>`
        btnvolta.innerHTML = `<button class="left" onclick="passa()"><</button>`
        btnpassa.innerHTML = `<button onclick="passa()">></button>`
    }
