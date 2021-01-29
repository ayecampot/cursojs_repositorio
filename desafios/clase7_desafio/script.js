function HuellaVivienda(tamanio){
    this.tamanio = tamanio;
           
    this.consumo = function(){
    
    	return (this.tamanio * 37.96)/100;

        }
    }

var titulo = document.getElementById("titulo");
titulo.innerHTML = prompt("Ingrese su nombre");
var parrafo = document.createElement("h6");
var resultado= document.getElementsByClassName("resultado");
var tamanioVivienda = parseInt(prompt("¿Cuantós metros cuadrados tiene tu vivienda?"));

var vivienda = new HuellaVivienda(tamanioVivienda);
var consumoVivienda = vivienda.consumo();
if (consumoVivienda > 56.94) {
    parrafo.innerHTML = "Tu consumo es mayor al promedio";
} else if (consumoVivienda == 56.94){ 
    parrafo.innerHTML = "Tu consumo es igual al promedio";
} else { 
    parrafo.innerHTML = "Tu consumo está por debajo del promedio ¡Felicitaciones!";
}

resultado[0].appendChild(parrafo);