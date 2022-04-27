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
            } ña
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

const producto1 = `Pipeta para 2 a 5 kilos`;
const producto2 = `Pipeta para 6 a 10 kilos`;
const producto3 = `Pipeta para 11 a 20 kilos`;
const producto4 = `Pipeta para 21 a 30 kilos`;
const producto5 = `Pipeta para 31 a 40 kilos`;
const producto6 = `Pipeta para 41 a 60 kilos`;



let peso = prompt("Por favor escriba cuanto pesa su mascota en kilos para que el sistema calcule que tipo de pipeta necesita");
if (peso >= 2, peso <= 5) {
    alert("usted tendria que comprar el producto 1");
} else if (peso >= 6, peso <= 10) {
    alert("usted tendria que comprar el producto 2");
} else if (peso >= 11, peso <= 20) {
    alert("usted tendria que comprar el producto 3");
} else if (peso >= 21, peso <= 30) {
    alert("usted tendria que comprar el producto 4");
} else if (peso >= 31, peso <= 40) {
    alert("usted tendria que comprar el producto 5");
} else if (peso >= 41, peso <= 60) {
    alert("usted tendria que comprar el producto 6");
}


let menu = prompt("Escriba el numero de producto que quiere comprar");
while (menu != "") {
    switch (menu) {
        case 1:
            alert("el producto cuesta 300 pesos");
            break;
        case 2:
            alert("el producto cuesta 500 pesos");
            break;
        case 3:
            alert("el producto cuesta 600 pesos");
            break;
        case 4:
            alert("el producto cuesta 700 pesos");
            break;
        case 5:
            alert("el producto cuesta 900 pesos");
            break;
        case 6:
            alert("el producto cuesta 1200 pesos");
            break;

        default:
            break;

    }
}


