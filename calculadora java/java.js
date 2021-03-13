
// Verificar valor de entrada
function verificaValor() {
	alert('Atenção, digite apenas o numeros informados na calculadora')
	document.getElementById('campo_txt').value = ''
}

// Variaveis iniciais
var operacao;
var campo_txt;
var ponto = false;

// botões da calculadora
function com1() {
	document.getElementById('campo_txt').value +='1'
}
function com2() {
	document.getElementById('campo_txt').value +='2'
}
function com3() {
	document.getElementById('campo_txt').value +='3'
}
function com4() {
	document.getElementById('campo_txt').value +='4'
}
function com5() {
	document.getElementById('campo_txt').value +='5'
}
function com6() {
	document.getElementById('campo_txt').value +='6'
}
function com7() {
	document.getElementById('campo_txt').value +='7'
}
function com8() {
	document.getElementById('campo_txt').value +='8'
}
function com9() {
	document.getElementById('campo_txt').value +='9'
}
function com0() {
	document.getElementById('campo_txt').value +='0'
}
// ponto da calculadora
function comp() {
	document.getElementById('campo_txt').value +='.'
	ponto = true;
	//console.log(1)
}


// limpar tela da calculadora
function limpar(){
	document.getElementById('campo_txt').value = ''
}
function compC() {
	limpar()
	document.getElementById('result').value = ''
}


// operações matemáticas
function sum() {
	campo_txt = document.getElementById('campo_txt').value
	let oper = ' + ';
	
	operacao = 1
	document.getElementById('result').value = campo_txt + oper
	//console.log(operacao)
	limpar()
}

function sub() {
	campo_txt = document.getElementById('campo_txt').value
	let oper = ' - ';
	operacao = 2
	document.getElementById('result').value = campo_txt + oper
	//console.log(operacao)
	limpar()
}

function mult() {
	campo_txt = document.getElementById('campo_txt').value
	let oper = ' * ';
	operacao = 3
	document.getElementById('result').value = campo_txt + oper
	//console.log(operacao)
	limpar()
}

function div() {
	campo_txt = document.getElementById('campo_txt').value
	let oper = ' / ';
	operacao = 4
	document.getElementById('result').value = campo_txt + oper
	//console.log(operacao)
	limpar()
}

// resolução das operações
function igual() {

	var cmpV = document.getElementById('campo_txt').value
	document.getElementById('result').value += cmpV + ' = '

	// verificação de valor booleano
	if(ponto) {
		campo_txt = parseFloat(campo_txt)
		ponto = false
	} else {
		campo_txt = parseInt(campo_txt)
	}

	if(ponto) {
		cmpV = parseFloat(cmpV)
		ponto = false
	} else {
		cmpV = parseInt(cmpV)
	}


	limpar()

	switch(operacao){
		case 1:
			var soma = campo_txt + cmpV
			document.getElementById('result').value += soma
			break;
		case 2:
			var subtracao = campo_txt - cmpV
			document.getElementById('result').value += subtracao
			break;
		case 3:
			var multiplica = campo_txt * cmpV
			document.getElementById('result').value += multiplica
			break;
		case 4:
			var divid = campo_txt / cmpV
			document.getElementById('result').value += divid
			break;
		default:
	}

}
