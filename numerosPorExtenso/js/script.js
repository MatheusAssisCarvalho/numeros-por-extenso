window.addEventListener('load', start); // Sempre fazer para começar o JS

let globalValue = null;
let globalCentena = null;
let globalDezena = null;
let globalUnidade = null;

function start() {
    render();
    activeNumber();
}

function activeNumber() {
    function moveCursor (event) {
        globalValue = event.target.value;
        render();
        porExtenso();
    }
    let inputCursor = document.querySelector('#cursor');
    inputCursor.addEventListener('input', moveCursor);
}

function render() {
    let span = document.querySelector('#numeral');
    span.textContent = globalValue;
}

function porExtenso() {
    let valor = globalValue;

    function valorCento() {
        if (valor >= 900) {
            valor -= 900;
            globalCentena = 'Novecentos';
        } else if (valor >= 800) {
            valor -= 800;
            globalCentena = 'Oitocentos';
        } else if (valor >= 700) {
            valor -= 700;
            globalCentena = 'Setecentos';
        } else if (valor >= 600) {
            valor -= 600;
            globalCentena = 'Seiscentos';
        } else if (valor >= 500) {
            valor -= 500;
            globalCentena = 'Quinhentos';
        } else if (valor >= 400) {
            valor -= 400;
            globalCentena = 'Quatrocentos';
        } else if (valor >= 300) {
            valor -= 300;
            globalCentena = 'Trezentos';
        } else if (valor >= 200) {
            valor -= 200;
            globalCentena = 'Duzentos';
        } else if (valor > 100) {
            valor -= 100;
            globalCentena = 'Cento';
        } else if (valor == 100) {
            valor -= 100;
            globalCentena = 'Cem';
        } else {
            globalCentena = 0;
        }
    }

    function valorDezena() {
        if (valor >= 90 && valor < 100) {
            valor -= 90;
            globalDezena = 'Noventa';
        } else if (valor >= 80) {
            valor -= 80;
            globalDezena = 'Oitenta';
        } else if (valor >= 70) {
            valor -= 70;
            globalDezena = 'Setenta';
        } else if (valor >= 60) {
            valor -= 60;
            globalDezena = 'Sessenta';
        } else if (valor >= 50) {
            valor -= 50;
            globalDezena = 'Cinquenta';
        } else if (valor >= 40) {
            valor -= 40;
            globalDezena = 'Quarenta';
        } else if (valor >= 30) {
            valor -= 30;
            globalDezena = 'Trinta';
        } else if (valor >= 20) {
            valor -= 20;
            globalDezena = 'Vinte';
        } else {
            globalDezena = 0;
        }
    }

    function valorUnidade() {
        if (valor >= 19) {
            valor -= 19;
            globalUnidade = 'Dezenove';
        } else if (valor >= 18) {
            valor -= 18;
            globalUnidade = 'Dezoito';
        } else if (valor >= 17) {
            valor -= 17;
            globalUnidade = 'Dezessete';
        } else if (valor >= 16) {
            valor -= 16;
            globalUnidade = 'Seiscentos';
        } else if (valor >= 15) {
            valor -= 15;
            globalUnidade = 'Quinze';
        } else if (valor >= 14) {
            valor -= 14;
            globalUnidade = 'Quatorze';
        } else if (valor >= 13) {
            valor -= 13;
            globalUnidade = 'Treze';
        } else if (valor >= 12) {
            valor -= 12;
            globalUnidade = 'Doze';
        } else if (valor >= 11) {
            valor -= 11;
            globalUnidade = 'Onze';
        } else if (valor >= 10) {
            valor -= 10;
            globalUnidade = 'Dez';
        } else if (valor >= 9) {
            valor -= 9;
            globalUnidade = 'Nove';
        } else if (valor >= 8) {
            valor -= 8;
            globalUnidade = 'Oito';
        } else if (valor >= 7) {
            valor -= 7;
            globalUnidade = 'Sete';
        } else if (valor >= 6) {
            valor -= 6;
            globalUnidade = 'Seis';
        } else if (valor >= 5) {
            valor -= 5;
            globalUnidade = 'Cinco';
        } else if (valor >= 4) {
            valor -= 4;
            globalUnidade = 'Quatro';
        } else if (valor >= 3) {
            valor -= 3;
            globalUnidade = 'Três';
        } else if (valor >= 2) {
            valor -= 2;
            globalUnidade = 'Dois';
        } else if (valor >= 1) {
            valor -= 1;
            globalUnidade = 'Um';
        } else {
            globalUnidade = 0;
        }
    }
    valorCento();
    valorDezena();
    valorUnidade();
    let span = document.querySelector('#extenso');
    let extensoValue;
    if (globalCentena !== 0 && globalDezena !== 0 && globalUnidade !== 0) {
        extensoValue = globalCentena + ' e ' + globalDezena + ' e ' + globalUnidade;
    } else if (globalCentena === 0 && globalDezena !== 0 && globalUnidade !== 0) {
        extensoValue = globalDezena + ' e ' + globalUnidade;
    } else if (globalCentena === 0 && globalDezena === 0 && globalUnidade !== 0) {
        extensoValue = globalUnidade;
    } else if (globalCentena !== 0 && globalDezena === 0 && globalUnidade !== 0) {
        extensoValue = globalCentena + ' e ' + globalUnidade;
    } else if (globalCentena !== 0 && globalDezena !== 0 && globalUnidade === 0) {
        extensoValue = globalCentena + ' e ' + globalDezena;
    } else if (globalCentena !== 0 && globalDezena === 0 && globalUnidade === 0) {
        extensoValue = globalCentena;
    } else {
        extensoValue = 'Zero';
    }
    span.textContent = extensoValue.toUpperCase();
}
