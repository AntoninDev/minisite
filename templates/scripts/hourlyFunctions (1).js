//Hourly Functions.
//Funções Horarias.
var hora = {}
var min = {}
var mes = {}
var semana = {}
var sec;
var mill;
var diaMes;
var ano;

var getLoopTimeFunctions = setInterval( function () {
var newDate = new Date()
sec = newDate.getSeconds()
mill = newDate.getMilliseconds()
diaMes = newDate.getDate()
ano = newDate.getFullYear()
  hora.am = newDate.getHours()
  min.am = newDate.getMinutes()
  mes.num = newDate.getMonth()
  semana.num = newDate.getDay()
hora.am >= 0 && hora.am <= 9 ? hora.pm = `0${hora.am}` : hora.pm = hora.am;

min.am >= 0 && min.am <= 9 ? min.pm = `0${min.am}` : min.pm = min.am

switch (semana.num) {
case 0:
semana.numString = '1'
semana.nome = 'Domingo';
break
case 1:
semana.numString = '2'
semana.nome = 'Segunda';
break
case 2:
semana.numString = '3'
semana.nome = 'Terça';
break
case 3:
  semana.numString = '4'
semana.nome = 'Quarta';
break
case 4:
semana.numString = '5'
semana.nome = 'Quinta';
break
case 5:
semana.numString = '6'
semana.nome = 'Sexta';
break
case 6:
semana.numString = '7'
semana.nome = 'Sabado';
break
}
switch (mes.num) {
case 0:
mes.numString = '01'
mes.nome = 'Janeiro';
break
case 1:
mes.numString = '02'
mes.nome = 'Fevereiro';
break
case 2:
mes.numString = '03'
mes.nome = 'Março';
break
case 3:
mes.numString = '04'
mes.nome = 'Abril';
break
case 4:
mes.numString = '05'
mes.nome = 'Maio';
break
case 5:
mes.numString = '06'
mes.nome = 'Junho';
break
case 6:
mes.numString = '07'
mes.nome = 'Julho';
break
case 7:
mes.numString = '08'
mes.nome = 'Agosto';
break
case 8:
mes.numString = '09'
mes.nome = 'Setembro';
break
case 9:
mes.numString = '10'
mes.nome = 'Outubro';
break
case 10:
mes.numString = '11'
mes.nome = 'Novembro';
break
case 11:
mes.numString = '12'
mes.nome = 'Dezembro';
break
}
}, 1 );
console.log('template [HourlyFunctions.js] loaded')