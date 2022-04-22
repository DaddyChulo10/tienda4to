import { Cliente } from "./cliente.js";

document.getElementById("btncate").addEventListener('click', guardarcambios)

function guardarcambios(e) {
    e.preventDefault();
    console.log("MODIF objeto");
    let pos = document.getElementById('txtPosicion').value;
    let id = document.getElementById('txtid').value;
    let nombre = document.getElementById('txtnombre').value;
    let codp = document.getElementById('txtcp').value;
    let colonia = document.getElementById('txtcolonia').value;
    let calle = document.getElementById('txtcalle').value;
    let numerocasa = document.getElementById('txtcasa').value;
    let telefono = document.getElementById('txttelefono').value;
    let correo = document.getElementById('txtcorreo').value;
    let edad = document.getElementById('txtedad').value;
    let sexo = document.getElementById('txtsexo').value;

    let fechNow = new Date()
    let fe = fechNow.getDate() + "/" + (fechNow.getMonth() + 1) + "/" + fechNow.getFullYear()

    let miProd = new Cliente(id,nombre,codp,colonia,calle,numerocasa,telefono,correo,edad,sexo);

    console.log(miProd)

    let lista2 = JSON.parse(localStorage.getItem('listacliente'));

    lista2.splice(pos, 1, miProd)
    console.log("lista2".lista2)
    //guarda en el local storage
    localStorage.setItem('listacliente', JSON.stringify(lista2));

    setTimeout(function () {
        swal("Producto modificado!", "GRACIAS !", "success");
        window.location.href = 'index.php?ruta=cliente_consulta'
    }, 1000);


}
