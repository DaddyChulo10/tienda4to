import { Proveedor } from "./proveedores.js";
import { validarClave } from "./validar_prove.js";
import { validarnombre } from "./validar_prove.js";
import { validarprecio } from "./validar_prove.js";
import { validarcanti } from "./validar_prove.js";




document.getElementById('Btnagregar').addEventListener('click', agregarprove);

let bandera = 1;

function agregarprove(e) {
    e.preventDefault();

    let id = document.getElementById("txtclave").value;
    let nomprove = document.getElementById("txtprove").value;
    let empresa = document.getElementById("txtempresa").value;
    let precio = document.getElementById("txtprecio").value;
    let formapago = document.getElementById("txtfpago").value;
    let cantidad = document.getElementById("txtcanti").value;
    let garantia = document.getElementById("txtpago").value;

    if (bandera == 1 && validarClave() && validarnombre() && validarprecio() && validarcanti()) {

        let micate = new Proveedor(id, nomprove, empresa, precio, formapago, cantidad, garantia);//listacategoria

        let listp = JSON.parse(localStorage.getItem('listaproveedor'));
        listp.push(micate);
        localStorage.setItem('listaproveedor', JSON.stringify(listp));
        console.log(listp);

        //subirarch();
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