
function Persona(tamanio,calefaccion){
    this.tamanio = tamanio;
    this.calefaccion = calefaccion;
           
    this.consumo = function(){
    
        return (this.tamanio * 37.96)/100 + calefaccion * 20;

        }
    }

var tamanio= parseInt(prompt("¿Cuantós metros cuadrados tiene tu vivienda? "));

var calefaccion = parseInt(prompt("¿Cuantós metros cuadrados tiene tu vivienda? "));

var persona = new Persona(tamanio,calefaccion);
var huellaCarbono = persona.consumo();

if (huellaCarbono > 256.94) {
    console.log ("Tu consumo es mayor al promedio");
    alert ("Tu consumo es mayor al promedio");
} else if (huellaCarbono == 256.94){ 
    console.log ("Tu consumo es igual al promedio");
    alert ("Tu consumo es igual al promedio");

} else { 
    console.log ("Tu consumo está por debajo del promedio ¡Felicitaciones!");
    alert ("Tu consumo está por debajo del promedio ¡Felicitaciones!");
}

