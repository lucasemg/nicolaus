function gerarCopias() {

    return Math.floor(Math.random() * 100) + 100;
};

var numCopias = gerarCopias();

function randomClock() {
    return Math.floor(Math.random() * 8000) + 1000;
}

var rand = randomClock();  

document.getElementById("copias").innerHTML = numCopias;

let numeroDescendoCopias = setInterval( function () {
    numCopias = numCopias - 1;

    if (numCopias == 0) {
        clearInterval(numeroDescendoCopias);
    }

    document.getElementById("copias").innerHTML = numCopias;

    
    
}, rand);

