let usuario = prompt("Ingrese su usuario");
while (usuario == "") {
    if (usuario == "") {
        usuario = prompt("Porfavor ingrese un usuario valido");
    } else if (usuario != "") {
        alert("Hola " + usuario)
        break;
    }
}


let contrasenia = prompt("Ahora ingrese su contrasenia");

while (contrasenia == "") {
    if (contrasenia == "") {
        contrasenia = prompt("Porfavor ingrese una contrasenia valida");
    } else if (contrasenia != "") {
        break;
    }
}


let login = prompt(`Hola ${usuario}` + "\ningrese la opcion que desee para continuar" + "\nPara cambiar su usuario ingrese: 1" + "\nPara cambiar su contrasenia ingrese: 2" + "\nPara entrar a la pagina con su usuario y contrasenia actuales solo presione aceptar ")
while (login != "") {
    switch (login) {
        case "1":
            let nuevoUsuario = prompt("Ingrese su nuevo usuario");
            while (nuevoUsuario == "") {
                if (nuevoUsuario == "") {
                    nuevoUsuario = prompt("Porfavor ingrese un usuario valido");
                } else if (nuevoUsuario != "") {
                    break;
                }
            }
            alert(`Su usuario fue cambiado exitosamente a ${nuevoUsuario}`);
            break;
        case "2":
            let nuevaContrasenia = prompt("Ingrese su nuevo contrasenia");
            while (nuevaContrasenia == "") {
                if (nuevaContrasenia == "") {
                    nuevaContrasenia = prompt("Porfavor ingrese un contrasenia valido");
                } else if (nuevaContrasenia != "") {
                    break;
                }
            }
            alert(`Su contrasenia fue cambiado exitosamente a ${nuevaContrasenia}`);
            break;
        default:
            break;
    }
    break;
}

const productos = [
    { id: 0, nombre: "Pipetas de 2 a 5 kilos", precio: 300 },
    { id: 1, nombre: "Pipetas de 6 a 10 kilos", precio: 300 },
    { id: 2, nombre: "Pipetas de 11 a 20 kilos", precio: 300 },
    { id: 3, nombre: "Pipetas de 21 a 30 kilos", precio: 300 },
    { id: 4, nombre: "Pipetas de 31 a 40 kilos", precio: 300 },
    { id: 5, nombre: "Pipetas de 41 a 60 kilos", precio: 300 },
    { id: 6, nombre: "Alimento Dog Chow", precio: 300 },
    { id: 7, nombre: "Alimento Agility", precio: 300 },
    { id: 8, nombre: "Alimento Pedigree", precio: 300 },
    { id: 9, nombre: "Alimento Cat Chow", precio: 300 }];

alert("contamos con estos productos\n " + productos.map((nombre) => nombre.nombre))

class Productos {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
    }
}

let menu = prompt("desea agregar algun producto?\nResponder con si o no")
switch (menu) {
    case "si":
        const productosNuevos = new Productos(10, prompt("describa el producto a agregar" + "\nej: pipeta de x a x kilos" + "\nej: Alimento Mainteinance"), prompt("escriba de forma numerica el precio del nuevo producto" + "\nej: 500"));
        productos.push(productosNuevos);
        break;
    case "":
        alert("no has ingresado ningun valor");
        break;
    default:
        break;

}

for (const producto of productos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h2> ID: ${producto.id}</h2>
                                <p>  Producto: ${producto.nombre}</p>
                                <p> $ ${producto.precio}</p>`;
    document.body.append(contenedor);
    console.log(producto.id);
    console.log(producto.nombre);
    console.log(producto.precio);
}
