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
    var nombre = $("#nombre").val();
    var tamanio = parseInt($("#inputVivienda").val());
    var calefaccion = parseInt($("#inputCalefaccion").val());
    var bombillas = parseInt($("#inputBombillas").val());
    var persona = new Persona(tamanio, calefaccion, bombillas, nombre);

    var huellaCarbono = persona.consumo();

    $("#alert-calculo-huella")[0].innerText = consumoHuella(huellaCarbono);

    $("#alert-calculo")[0].className = "alert alert-success alert-dismissible fade show";

    var nuevoStorage = [];
    if (localStorage.getItem("histPersonas") !== null) {
        var storage = JSON.parse(localStorage.histPersonas);
        if (storage.length > 0) {
            nuevoStorage = storage
        }
    }

    nuevoStorage.push(persona)
    localStorage.histPersonas = JSON.stringify(nuevoStorage);
}

function completarHistorial() {
    var option = $("#inputHistorial").val();
    var storage = JSON.parse(localStorage.histPersonas);
    var persona;
    storage.forEach(element => {
        if (element.nombre == option) {
            persona = element
        }
    });

    $("#nombre")[0].value = persona.nombre;
    $("#inputVivienda")[0].value = persona.tamanio;
    $("#inputCalefaccion")[0].value = persona.calefaccion;
    $("#inputBombillas")[0].value= persona.bombillas;
}

$("#calculo").click(calcularHuella);

if (localStorage.getItem("histPersonas") !== null) { 
    var storage = JSON.parse(localStorage.histPersonas);
    if (storage.length > 0) { 
        $("#historial")[0].className = "mb-3 show"

        var historialSelect = $("#inputHistorial");
        storage.forEach(element => {
            var option = document.createElement("option")
            option.innerHTML = element.nombre
            historialSelect[0].appendChild(option)
        });
        historialSelect.change(completarHistorial);
    }
}