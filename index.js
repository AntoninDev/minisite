////////////////////////////////////////////////////////

  const paginas = document.getElementById("paginas")
  const descricao = document.getElementById("descricao")
  const buttons = document.getElementById("buttons")
  let a = document.createElement('a')
  let img = document.createElement('img')
  let p = document.createElement('p')
  let p2 = document.createElement('p')
  let h1 = document.createElement('h1')
  let button = document.createElement('input')
  let button2 = document.createElement('input')
  
  button.setAttribute('type', 'button')
  button2.setAttribute('type', 'button')
  button.setAttribute('class', 'left')
  button.setAttribute('value', '<')
  button2.setAttribute('value', '>')
  buttons.appendChild(button)
  buttons.appendChild(button2)
     paginas.appendChild(a)
     paginas.appendChild(p)
     descricao.appendChild(h1)
     descricao.appendChild(p2)
     a.appendChild(img)
       p.setAttribute('class', 'bolinhas')
       p2.setAttribute('class', 'descricao')
        h1.innerHTML = 'Descrição:'
     
     //Iicializa
      a.setAttribute('href', 'pages/horadodia.html')
      img.setAttribute('src', 'pages/midia/images/sitehorasdodia.jpg')
      img.setAttribute('alt', 'Site Horas do dia')
      p.innerHTML = '○●'
      
      //Descrição
      p2.innerHTML = 'Horas do dia é um site simples que a cada hora do dia tem uma decoração diferente, Entre e veja clicando na imagem acima.'
      
      //Botão
      button.setAttribute('onclick', 'passa()')
      button2.setAttribute('onclick', 'passa()')
      
    function passa() {
      a.setAttribute('href', 'pages/notadoaluno.html')
      img.setAttribute('src', 'pages/midia/images/sitenotadoaluno.jpg')
      img.setAttribute('alt', 'Site Nota do aluno')
      p.innerHTML = '●○'
      
      //Descrição
      p2.innerHTML = 'Calculador de nota do aluno é uma calculadora simples que calcula se o aluno passou ou nao de acordo com suas notas obs: a ultima nota dobra, Entre e veja clicando na imagem acima.'
      
      //Botão
        button.setAttribute('onclick', 'volta()')
        button2.setAttribute('onclick', 'volta()')
        
        window.scroll({top: 1000, behavior:"smooth"})
        
    }
    function volta() {
      
      a.setAttribute('href', 'pages/horadodia.html')
      img.setAttribute('src', 'pages/midia/images/sitehorasdodia.jpg')
      img.setAttribute('alt', 'Site Horas do dia')
      p.innerHTML = '○●'
      //Descrição
      
      p2.innerHTML = 'Horas do dia é um site simples que a cada hora do dia tem uma decoração diferente, Entre e veja clicando na imagem acima.'
      //Botão
      
      button.setAttribute('onclick', 'passa()')
      button2.setAttribute('onclick', 'passa()')  
    }
    ////////////////////////////////////////////////////