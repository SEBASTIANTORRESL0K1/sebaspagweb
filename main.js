// uso de var let y const. Se pueden declarar sin iniciar
var gato;
let carro;
console.log(gato);
console.log(carro);

//var es para declarar de nuevo
var gato = "garfield";
console.log(gato);
var gato; "betun";
console.log(gato);

// let no se puede declar de nuevo
let perro = "lobyto";
console.log(perro);
perro = "loki";
console.log(perro);


const direccion = "avenida paseos";
console.log(direccion);

//pueden empezar con letra, guion bajo o $
let $car = "ford mustang";
console.log($car);

//para nombres complejos se usa mayuscula 
let UserName = "Juan"
console.log(UserName);

// TIPOS DE DATOS
//primitivos

let velocidad = 98.5;
console.log(typeof velocidad);

//STRING
let User_Name = "Jose";
console.log(typeof User_Name);

// BOOLEAN
let isActive=true;
console.log(typeof isActive);

// undefined
let nombre;
console.log(typeof nombre);

// null
let edad = null;
console.log(typeof edad);

//bigInt (numeros muy grandes)
let z = 3n ** 55n;
console.log(typeof z);

// symbol- identificador unico
let clave= Symbol("sym");
console.log(typeof clave);

//objetos
//ARRAY (matrices)
let carros=["ford mustang", 500, true];
console.log(typeof carros);

//OBJECT
let $carro = {modelo: "ford mustang", potencia: 300, velocidad: 200};
console.log(typeof carro);

//copiado por referencia
let x = [2,4]

let y = x;

y.push(5);

console.log(x);
console.log(y);
