function Persona(nombre, tamanio, bombillas, calefaccion, temperatura, aire, alimento, transporte, vuelos) {
    this.nombre = nombre;
    this.tamanio = tamanio;
    this.bombillas = bombillas;
    this.calefaccion = calefaccion;
    this.temperatura = temperatura;
    this.aire = aire;
    this.alimento = alimento;
    this.transporte = transporte;
    this.vuelos = vuelos;

    this.consumo = function () {
        return tamanio + bombillas + calefaccion + temperatura + aire + alimento + transporte + vuelos;
    }
}

function consumoHuella(huellaCarbono) {
    if (huellaCarbono > 170) {
        return "resultadouno.jpg";
    } else if (huellaCarbono == 170) {
        return "resultadodos.jpg";
    } else {
        return "resultadotres.jpg";
    }
}

function calcularHuella() {
    var nombre = $("#nombre").val();
    var tamanio = parseInt($("#inputVivienda").val());
    var bombillas = parseInt($("#inputBombillas").val());
    var calefaccion = parseInt($("#inputCalefaccion").val());
    var temperatura = parseInt($("#inputTemperatura").val());
    var aire = parseInt($("#inputAire").val());
    var alimento = parseInt($("#inputAlimento").val());
    var transporte = parseInt($("#inputTransporte").val());
    var vuelos = parseInt($("#inputVuelos").val());
    var persona = new Persona(nombre, tamanio, calefaccion, bombillas, calefaccion, temperatura, aire, alimento, transporte, vuelos);

    var huellaCarbono = persona.consumo();

    // $("#alert-calculo-huella")[0].innerText = 
    // $("#alert-calculo")[0].className = "alert alert-success alert-dismissible fade show";

    var puppy = "imagenes/" + consumoHuella(huellaCarbono)
    var imgRes = $('#img-resultado');
    imgRes.attr("src", puppy);

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
    $("#inputBombillas")[0].value = persona.bombillas;
    $("#inputCalefaccion")[0].value = persona.bombillas;
    $("#inputTemperatura")[0].value = persona.temperatura;
    $("#inputAire")[0].value = persona.aire;
    $("#inputAlimento")[0].value = persona.alimento;
    $("#inputTransporte")[0].value = persona.transporte;
    $("#inputVuelos")[0].value = persona.vuelos;
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