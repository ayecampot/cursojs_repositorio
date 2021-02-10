function Persona(tamanio, calefaccion, bombillas, nombre) {
    this.nombre = nombre;
    this.tamanio = tamanio;
    this.calefaccion = calefaccion;
    this.bombillas = bombillas;

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
    var nombre = document.getElementById("nombre").value;
    var tamanio = parseInt(document.getElementById("inputVivienda").value);
    var calefaccion = parseInt(document.getElementById("inputCalefaccion").value);
    var bombillas = parseInt(document.getElementById("inputBombillas").value);
    var persona = new Persona(tamanio, calefaccion, bombillas, nombre);

    var huellaCarbono = persona.consumo();

    var huella = document.getElementById("alert-calculo-huella")
    huella.innerText = consumoHuella(huellaCarbono);

    document.getElementById("alert-calculo").className = "alert alert-success alert-dismissible fade show";
    
var storage = JSON.parse(localStorage.histPersonas);
var nuevoStorage = [];
if (storage.length > 0) {
    nuevoStorage = storage
}
nuevoStorage.push(persona)
localStorage.histPersonas = JSON.stringify(nuevoStorage);
}

var botonCalcular = document.getElementById("calculo");
botonCalcular.addEventListener("click", calcularHuella);


var storage = JSON.parse(localStorage.histPersonas);
if (storage.length > 0) {
    var historial = document.getElementById("historial")
    historial.className = "mb-3 show"

    var historialSelect = document.getElementById("inputHistorial")
    storage.forEach(element => {
        var option = document.createElement("option")
        option.innerHTML = element.nombre
        historialSelect.appendChild(option)
    });
    historialSelect.addEventListener("change", completarHistorial);
}

function completarHistorial(e) {
    var option = document.getElementById("inputHistorial").value
    var storage = JSON.parse(localStorage.histPersonas);
    var persona;
    storage.forEach(element => {
        if(element.nombre == option) {
            persona = element
        }
    });

    document.getElementById("nombre").value = persona.nombre;
    document.getElementById("inputVivienda").value = persona.tamanio;
    document.getElementById("inputCalefaccion").value = persona.calefaccion;
    document.getElementById("inputBombillas").value = persona.bombillas;
}

