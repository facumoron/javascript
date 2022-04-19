let nombre = prompt("Ingrese su nombre");
while (nombre == "") {
    if (nombre == "") {
        nombre = prompt("Porfavor ingrese un nombre valido");
    }else if (nombre != "") {
        alert("Hola " + nombre)
        break;
    }
}
/* alert(`Hola ${nombre}`); */

let apellido = prompt("Ahora ingrese su apellido");

while (apellido == "") {
    if (apellido == "") {
        apellido = prompt("Porfavor ingrese un apellido valido");
    }else if (apellido != "") {
        break;
    }
}
/* alert(`Hola ${nombre} ${apellido}`); */

let menu = prompt(`Hola ${nombre} ${apellido}` + "\ningrese la opcion que desee para continuar" + "\nPara cambiar su nombre ingrese: 1" + "\nPara cambiar su apellido ingrese: 2" + "\nPara entrar a la pagina con su nombre y apellido actuales no ingrese nada")
while (menu != "") {
    switch (menu) {
        case "1":
            let nuevoNombre = prompt("Ingrese su nuevo nombre");
            while (nuevoNombre == "") {
                if (nuevoNombre == "") {
                    nuevoNombre = prompt("Porfavor ingrese un nombre valido");
                }else if (nuevoNombre != "") {
                    break;
                }
            }
            alert(`Su nombre fue cambiado exitosamente a ${nuevoNombre}`);
            break;
        case "2":
            let nuevoApellido = prompt("Ingrese su nuevo apellido");
            while (nuevoApellido == "") {
                if (nuevoApellido == "") {
                    nuevoApellido = prompt("Porfavor ingrese un apellido valido");
                }else if (nuevoApellido != "") {
                    break;
                }
            }
            alert(`Su apellido fue cambiado exitosamente a ${nuevoApellido}`);
            break;
        default:
            break;
    }
    break;
}


/* if (nombre == "") {
    alert("por favor ingrese un nombre valido.")
}
else {
   alert("Hola " + nombre) 
} */






