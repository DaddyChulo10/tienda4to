import { Categoria } from "./categorias.js";
import { validarClave } from "./validar_cate.js";
import { validarnombre } from "./validar_cate.js";
import { validarcantidad } from "./validar_cate.js";

document.getElementById('Btnagregar').addEventListener('click', agregarcategoria);

let bandera = 1;

function agregarcategoria(e) {
    e.preventDefault();
    let id = document.getElementById("txtclave").value;
    let nombre = document.getElementById("txtnombre").value;
    let cantidad = document.getElementById("txtcanti").value;
    let modelo = document.getElementById("txtmodelo").value;
    let sistemaoper = document.getElementById("txtsistema").value;

    if (bandera == 1 && validarClave() && validarnombre() && validarcantidad()) {
        let micate = new Categoria(id, nombre, cantidad, modelo, sistemaoper);//listacategoria

        let listp = JSON.parse(localStorage.getItem('listacategoria'));
        listp.push(micate);
        localStorage.setItem('listacategoria', JSON.stringify(listp));
        console.log(listp);

        //subirarch();
        swal({
            title: "producto Registrado",
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