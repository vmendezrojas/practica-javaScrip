var propertyKey = "Camaro"
var anotherPropertyKey = 65000 + " USD"
let nextProperty = "Naranja"
let miAuto = new Object();
miAuto.marca = "Chevrolet";
miAuto.anio = 2022;
miAuto.esRapido = true;
miAuto.modelo = propertyKey;
miAuto.precio = anotherPropertyKey;
miAuto.color = nextProperty;

for (let key in miAuto) {
    console.log(key + ": " + miAuto[key]);
}

var HOLA = "hola";

var HOLA = "chau";
console.log(HOLA);
