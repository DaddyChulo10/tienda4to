import { Categoria } from "./categorias.js";

document.getElementById("btncate").addEventListener('click', guardarcambios)

function guardarcambios(e) {
    e.preventDefault();
    console.log("MODIF objeto");
    let pos = document.getElementById('txtPosicion').value;
    let id = document.getElementById('txtid').value;
    let nombre = document.getElementById('txtnombre').value;
    let cantidad = document.getElementById('txtcantidad').value;
    let modelo = document.getElementById('txtmodelos').value;
    let sistema = document.getElementById('txtsistema').value;


    let fechnow = new Date()
    let fe = fechnow.getDate() + " / " + (fechnow.getMonth() + 1) + " / " + (fechnow.getFullYear() + 1);

    let miProd = new Categoria(id, nombre, cantidad, modelo, sistema)
    console.log(miProd)

    let lista2 = JSON.parse(localStorage.getItem('listacategoria'));
    lista2.splice(pos, 1, miProd)
    console.log("lista 2".lista2)
    localStorage.setItem("listacategoria", JSON.stringify(lista2));
    setTimeout(function () {
        swal("Producto modificado!", "Gracias!", "success");
        window.location.href = 'index.php?ruta=consul_ca'
    }, 1500);
}