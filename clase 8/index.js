/* let productos = [
    {disponible: true},
    {disponible: false},
];

let productosDisponibles = [
    {disponible: true},
    {disponible: true},
    {disponible: true},
    {disponible: true},
];

let productosNoDisponibles = [
    {disponible: false},
    {disponible: false},
    {disponible: false},
    {disponible: false},
];

let respuesta = prompt("que productos desea ver? disponibles o no disponibles..")

if (respuesta === "disponibles") {
    for (const disponibles of productosDisponibles){
        console.log(disponibles.disponibles);
    }
}else if (respuesta === "no disponibles"){
    for (const noDisponibles of productosNoDisponibles){
        console.log(noDisponibles.noDisponibles);
    }
} */

const productos = [{ id: 1,  nombre: "Dog Chow", precio: 320 },
                  {  id: 2,  nombre: "Agility", precio: 400 },
                  {  id: 3,  nombre: "Pedigree"  , precio: 450},
                  {  id: 4,  nombre: "Cat Chow" , precio: 500}];

for (const producto of productos) {
    let contenedor = document.createElement("div");
    //Definimos el innerHTML del elemento con una plantilla de texto
    contenedor.innerHTML = `<h2> ID: ${producto.id}</h2>
                            <p>  Producto: ${producto.nombre}</p>
                            <p> $ ${producto.precio}</p>`;
    document.body.append(contenedor);
}
let respuesta = prompt("quiere cambiar el color de fondo? ingrese si o no")

let colorDelBody = document.getElementsByTagName("body")

if (respuesta === "si") {
    colorDelBody.className
}