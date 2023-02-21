
//Clase Cliente

class Cliente {
    constructor(nombre, apellido, dni, local){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.local = local;
    }
}

const clienteBenjamin = new Cliente("Benjamin", "Etcheverry", 1212121, "Fiambreria BYA");
const clienteCamila = new Cliente("Camila", "Rodriguez", 41678921, "Piubellaz");
const clienteFacundo = new Cliente("Facundo", "Garcia", 21965412, "Despensa Azul");
const clienteAgustin = new Cliente("Agustin", "Gonzalez", 37396325, "kiosco 24hs");

const arrayClientes = [clienteBenjamin, clienteCamila, clienteFacundo, clienteAgustin];

console.log(arrayClientes);

class articulo {
    constructor(nombre, contenidoneto){
        this.nombre = nombre;
        this.contenidoneto = contenidoneto;
    }
}
    const articuloYerba = new articulo("yerba", "1 kg")
    const articuloCacao = new articulo("cacao", "180 gr")
    const articuloGalletitas = new articulo("Pitusas", "250 gr")

    const arrayArticulo = [articuloYerba, articuloCacao, articuloGalletitas];

    console.log(arrayArticulo);


//Función con el menú de opciones: 

function menu() {
    alert("Bienvenido a bodegas del sol");
    const usuarioAutorizado = "Leonardo";
const contraseniaAutorizada = "coderhouse";

let usuario = prompt("Por favor, ingrese su usuario");
let contrasenia = prompt("Por favor, ingrese su contraseña");

if(usuario === usuarioAutorizado && contrasenia === contraseniaAutorizada) {
    alert("Hola " + usuario + " bienvenido");

    let opcion = parseInt(prompt("Ingrese una opción: 1)Alta de Cliente 2) Baja de Cliente 3) Modificación de Cliente 4) Consulta de Cliente 5) Control de Stock 6) Salir"));
    return opcion;
}
}

//Alta de cliente: 

function altaCliente() {
    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let dni = parseInt(prompt("Ingrese el DNI del cliente:"));
    let local = parseInt(prompt("Ingrese nombre del local: "));
    let cliente = new Cliente(nombre, apellido, dni, local);
    arrayClientes.push(cliente);
    console.log(arrayClientes);
}

//Baja de cliente: 

function bajaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente:  "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);
    arrayClientes.splice(indice, 1);
    console.log(arrayClientes);
}

//Modificar un cliente: 

function modificacionCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente:  "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    let indice = arrayClientes.indexOf(cliente);

    let nombre = prompt("Ingrese el nombre del cliente: ");
    let apellido = prompt("Ingrese el apellido del cliente: ");
    let saldo = parseInt(prompt("Ingrese el nombre del local:  "));
    let clienteModificado = new Cliente(nombre, apellido, dni, saldo);

    arrayClientes.splice(indice, 1, clienteModificado);
    console.log(arrayClientes);
}

//Consultar de cliente:

function consultaCliente() {
    let dni = parseInt(prompt("Ingrese el DNI del cliente:  "));
    let cliente = arrayClientes.find(cliente => cliente.dni === dni);
    console.log(cliente);
}

//Control de stock

function cantidadArticulo() {

let cantidadArticulo = parseInt(prompt("Ingresar cantidad de articulos: "));

    for (let i = 0; i < cantidadArticulo; i++) {
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
    
}
 //Funcion suma

function sumaTradicional(bodega1, bodega2,bodega3) {
    let total = (bodega1 + bodega2 + bodega3);
    return total;
}

function stockTotal(total) {
    if(total >= 20) {
        return true;
    } else {
        return false;
}
}


//Salir: 

function salir() {
    alert("Adios");
}

//Ejecuto el programa: 

let opcion = menu();

switch(opcion) {
    case 1: 
        altaCliente();
        break;
    case 2:
        bajaCliente();
        break;
    case 3: 
        modificacionCliente();
        break;
    case 4: 
        consultaCliente();
        break;
    case 5: 
        cantidadArticulo(1);
        break;
    case 6:
        salir;
        break;
    default:
        alert("La opcion ingresada, es incorrecta");
        break;
}

