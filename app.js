
function registrar(){
    function Cliente(nombre,apellido,dni,telefono,fecha,mesesPagos,vencimientoMembresia){
        this.nombre=nombre;
        this.apellido=apellido;
        this.dni=dni;
        this.telefono=telefono;
        this.fecha=fecha;
        this.mesesPagos=mesesPagos;
        this.vencimientoMembresia=vencimientoMembresia;

    }
    let nombreRegistro = document.getElementById("nombre").value;
    let apellidoRegistro = document.getElementById("apellido").value;
    let dniRegistro = document.getElementById("dni").value;
    let telefonoRegistro = document.getElementById("tel").value;
    let fechaRegistro = document.getElementById("fecha").value;
    let mesesPagosRegistro = document.getElementById("cantidadMeses").value;
    let vencimientoMembresia = sumaDias(fechaRegistro, mesesPagosRegistro);
    
    
    nuevoCliente = new Cliente(nombreRegistro,apellidoRegistro,dniRegistro,telefonoRegistro,fechaRegistro,mesesPagosRegistro, vencimientoMembresia);
console.log(nuevoCliente);
agregar();
}


contadorCliente = 1;

// Sistema para aumentar la membresía.
// 1° establece el dia de la fecha
let momento = moment().format("DD - MM - YYYY");
console.log(momento)

// 2° Función para sumar X meses a la membresía
function sumaDias(fechaRegistro, meses){
    const fechaVencimiento = moment().add(meses, 'month')
    const fechaFinal = fechaVencimiento.format("DD - MM - YYYY");
    console.log(fechaFinal);
    return fechaFinal;
}

// Sacando el default a los botones del form
document.getElementById("btnRegistrarC").addEventListener("click",function(nodefault){
    nodefault.preventDefault()});
document.getElementById("btnCancelar").addEventListener("click",function(nodefault){
        nodefault.preventDefault()});

// poniendo fecha de hoy al input de fecha de inscripción
document.getElementById("inputFecha").innerHTML = "<input type='text' class='form-control' id='fecha' value='"+momento+"'disabled>"; // "disabled" sin comillas después de value para bloquear la edición del input -------------------------------------------------

let listaClientes = [];
function agregar(){
    if ((momento >= nuevoCliente.fecha) && (momento <= nuevoCliente.vencimientoMembresia)){
        estado = true;
    }
    
    // if (estado = true){
    //     estadoM = "✔ OK";
    // } else {
    //     estadoM = "🚩 NO ACTIVA";
    // }

    let estadoM = (estado = true) ? "✔ OK" :
        (estado = false) ? "🚩 NO ACTIVA" :

    listaClientes.push(nuevoCliente);
    console.log(listaClientes);
    document.getElementById("listaDeClientes").innerHTML += "<tr><th scope='row'>"+(contadorCliente++)+"</th><td>"+nuevoCliente.nombre+"</td><td>"+nuevoCliente.apellido+"</td><td>"+nuevoCliente.dni+"</td><td>"+nuevoCliente.telefono+"</td><td>"+nuevoCliente.fecha+"</td><td>FULL</td><td id='estado'>"+estadoM+"</td><td >"+nuevoCliente.vencimientoMembresia+"</td><td class='tdcenter administrar'><button class='btn' id='deleteUser'>❌</button><button class='btn' id='modifiedUser'>🛠</button></td></tr>";


}



// Buscador de miembros para registrar nuevo pago
// const dniEncontrado = listaClientes.some(buscadorDni => nuevoCliente.dni === document.getElementById("dniBuscado").value);
const valor = document.getElementById("dniBuscado").value
const dniEncontrado = listaClientes.some((cliente) => cliente.dni === valor );
console.log(dniEncontrado)
// function buscadorDni(){
//     nuevoCliente.dni === document.getElementById("dniBuscado").value
// }
// console.log(buscadorDni)