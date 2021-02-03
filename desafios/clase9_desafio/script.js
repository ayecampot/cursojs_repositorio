function Persona(tamanio, calefaccion, bombillas) {
    this.tamanio = tamanio;
    this.calefaccion = calefaccion;
    this.bombillas = bombillas

    this.consumo = function () {
        return (this.tamanio * 37.96) / 100 + calefaccion + bombillas * 5;
    }
}

function consumoHuella(huellaCarbono) {
    if (huellaCarbono > 166.94) {
        return "es mayor al promedio";
    } else if (huellaCarbono == 166.94) {
        return "es igual al promedio";
    } else {
        return "está por debajo del promedio ¡Felicitaciones!";
    }
}

function calcularHuella() {
    var tamanio = parseInt(document.getElementById("inputVivienda").value);
    var calefaccion = parseInt(document.getElementById("inputCalefaccion").value);
    var bombillas = parseInt(document.getElementById("inputBombillas").value);

    var persona = new Persona(tamanio, calefaccion, bombillas);
    var huellaCarbono = persona.consumo();

    var huella = document.getElementById("alert-calculo-huella")
    huella.innerText = consumoHuella(huellaCarbono);

    document.getElementById("alert-calculo").className = "alert alert-warning alert-dismissible fade show"
}

var botonCalcular = document.getElementById("calculo");
botonCalcular.addEventListener("click", calcularHuella);

