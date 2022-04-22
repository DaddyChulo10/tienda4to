import { Cliente } from "./cliente.js";
import { validarClave } from "./validar_cliente.js";
import { validarnombre } from "./validar_cliente.js";
import { validarcod } from "./validar_cliente.js";
import { validatel } from "./validar_cliente.js";
import { valiedad } from "./validar_cliente.js";
import { validacasa } from "./validar_cliente.js";

document.getElementById('Btnagregar').addEventListener('click', agregarcategoria);

let bandera = 1;

function agregarcategoria(e) {
    e.preventDefault();

    let id = document.getElementById("txtclave").value;
    let nombre = document.getElementById("txtcliente").value;
    let cp = document.getElementById("txtcp").value;
    let colonia = document.getElementById("txtcolonia").value;
    let calle = document.getElementById("txtcalle").value;
    let nomcasa = document.getElementById("txtcasa").value;
    let telefono = document.getElementById("txttel").value;
    let correo = document.getElementById("textcorre").value;
    let edad = document.getElementById("txtedad").value;
    let sexo = document.getElementById("txtsex").value;

    if (bandera == 1 && validarClave() && validarnombre() && validarcod() && validatel() && valiedad() && validacasa()) {
        let miclien = new Cliente(id, nombre, cp, colonia, calle, nomcasa, telefono, correo, edad, sexo);

        let listclien = JSON.parse(localStorage.getItem('listacliente'));
        listclien.push(miclien);
        localStorage.setItem('listacliente', JSON.stringify(listclien));
        console.log(listclien);

        swal({
            title: "Producto Registrado",
            text: "& archivo enviado",
            icon: "success",
            button: "Continuar",
        });
    } else {
        swal({
            title: "Error",
            text: "Error en los datos",
            icon: "error",
            button: "Continuar",
        });
        console.log("Error en los datos")
    }

}