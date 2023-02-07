alert("Registro de stock");

const usuarioAutorizado = "Leonardo";
const contraseniaAutorizada = "coderhouse";

let usuario = prompt("Por favor, ingrese su usuario");
let contrasenia = prompt("Por favor, ingrese su contraseña");

if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Hola " + usuario + " bienvenido");

    let cantidadArticulo = parseInt(prompt("Ingresar cantidad de articulos: "));

    for(let i = 0; i < cantidadArticulo; i++) {
        let nombreArticulo = prompt("Ingrese nombre de articulo");
        let bodega1 = parseInt(prompt("Ingrese cantidad disponible en bodega 1: "));
        let bodega2 = parseInt(prompt("Ingrese cantidad disponible en bodega 2: "));
        let bodega3 = parseInt(prompt("Ingrese cantidad disponible en bodega 3: "));
        let total = sumaTradicional(bodega1, bodega2, bodega3);
        alert("La cantidad de  " + nombreArticulo + " es " + total);

        let stockpositivo = stockTotal(total);

        if(stockpositivo == true) {
            alert(nombreArticulo + "stock suficiente");
        } else {
            alert(nombreArticulo + "stock insuficiente, hacer pedido.");
        }
    }
} else {
    alert("Usuario o contraseña incorrecta");
}

//Funciones

function sumaTradicional(bodega1, bodega2,bodega3) {
    let total = (bodega1 + bodega2 + bodega3);
    return total;
}

function stockTotal(total) {
    if(total >= 6) {
        return true;
    } else {
        return false;
    }
}