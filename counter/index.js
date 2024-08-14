var number = 0;
document.getElementById("display").textContent = number;


document.getElementById("antecessor").onclick = function antecessor(){

    number -= 1;

    document.getElementById("display").textContent = number;
}

document.getElementById("reset").onclick = function reset(){

    number = 0;

    document.getElementById("display").textContent = number;

}

document.getElementById("successor").onclick = function successor(){

    number += 1;

    document.getElementById("display").textContent = number;
}
