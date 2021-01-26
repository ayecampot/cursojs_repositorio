function Persona(nombre, tamanio, calefaccion) {
    this.nombre = nombre;
    this.tamanio = tamanio;
    this.calefaccion = calefaccion;

    this.consumo = function() {

        return (this.tamanio * 37.96) / 100 + (calefaccion * 20);

    }
}

function historial(personas) {
    var historial = "Tus consumos son:\n";
    for (let persona of personas) {
        historial = historial + "\n" + persona.nombre + ": " + persona.consumo();
    }
    return historial;
}

function mensajeConsumo(huellaCarbono) {
    if (huellaCarbono > 256.94) {
        return "Tu consumo es mayor al promedio";
    } else if (huellaCarbono == 256.94) {
        return "Tu consumo es igual al promedio";
    } else {
        return "Tu consumo está por debajo del promedio ¡Felicitaciones!";
    }
}

var personas = []
var cant_personas = parseInt(prompt("¿Cuantas personas queres cargar? "));

for (var i = 1; i <= cant_personas; i++) {
    var nombre = prompt("¿Cuál es tu nombre?");

    var tamanio = parseInt(prompt("¿Cuantós metros cuadrados tiene tu vivienda? "));

    var calefaccion = parseInt(prompt("En invierno ¿Cúantas horas al día tenés la calefacción prendida? "));

    var persona = new Persona(nombre, tamanio, calefaccion);

    personas.push(persona);
    var huellaCarbono = persona.consumo();

    alert("Hola " + persona.nombre + " " + mensajeConsumo(huellaCarbono) + " sos la persona numero " + i + " en consultar")

}

alert(historial(personas));