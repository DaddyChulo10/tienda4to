import { Proveedor } from "./proveedores.js";


document.getElementById("btncate").addEventListener('click', guardarcambios)

function guardarcambios(e) {
    e.preventDefault();
    console.log("MODIF objeto");
    let pos = document.getElementById('txtPosicion').value;
    let id = document.getElementById('txtid').value;
    let nombre = document.getElementById('txtnombre').value;
    let empresa = document.getElementById('txtempresa').value;
    let precio = document.getElementById('txtprecio').value;
    let formaspago = document.getElementById('txtformas').value;
    let cantidad = document.getElementById('txtcantidad').value;
    let garantia = document.getElementById('txtgarantia').value;

    let fechNow = new Date()
    let fe = fechNow.getDate() + "/" + (fechNow.getMonth() + 1) + "/" + fechNow.getFullYear()

    let miProd = new Proveedor(id,nombre,empresa,precio,formaspago,cantidad,garantia);

    console.log(miProd)

    let lista2 = JSON.parse(localStorage.getItem('listaproveedor'));

    lista2.splice(pos, 1, miProd)
    console.log("lista2".lista2)
    //guarda en el local storage
    localStorage.setItem('listaproveedor', JSON.stringify(lista2));

    setTimeout(function () {
        swal("Producto modificado!", "GRACIAS !", "success");
        window.location.href = 'index.php?ruta=consul_pro'
    }, 3000);


}
