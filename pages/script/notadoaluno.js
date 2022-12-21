     const id = document.getElementById("nota");
       let contador = 0;
       let heigth = 35
     function aluno() {
       document.getElementById("p").innerHTML = ' '
       ++contador
       if (contador >= 8) {
         heigth += 10
         id.style.height = `${heigth}%`;
       }
       const nome = prompt('Nome Do aluno');
       let nota1 = Number(prompt('1° nota do aluno'));
       if (isNaN(nota1)) {
         nota1 = 0
       } 
       let nota2 = Number(prompt('2° nota do aluno'));
       if (isNaN(nota2)) {
         nota2 = 0
       } 
       let nota3 = Number(prompt('3° nota do aluno'));
       if (isNaN(nota3)) {
         nota3 = 0
       }
       nota3 = nota3 * 2
       const soma = nota1 + nota2 + nota3
       if (soma >= 240) {
         id.innerHTML += `<span>A nota total do aluno:<mark>${nome}</mark> foi <mark>${soma}</mark> portanto ele foi <strong><mark style="color: green;">Aprovado</mark></strong>.</span><br>`
       }else if (soma >= 170 && soma <= 239) {
         id.innerHTML += `<span>A nota total do aluno:<mark>${nome}</mark> foi <mark>${soma}</mark> portanto ele ficou de <strong><mark style="color: yellow;">Recuperação</mark></strong>.</span><br>`
       }else {
           id.innerHTML += `<span>A nota total do aluno: ${nome} foi ${soma} portanto ele foi <mark  style="color: red;">Reprovado</mark>.</span><br>`
       }}
       function limpar() {
         id.innerHTML = '<p>Clique no botão acima e insira as notas, Lembrando que baseado na maioria das estruturas de ensino a ultima nota do trimestre é dobrada.</p>'

         contador = 0;
         heigth = 35;
         id.style.height = `100vw`;
       }