import { Producto } from "./Producto.js";

document.getElementById("btncate").addEventListener('click', guardarcambios)

function guardarcambios(e) {
    e.preventDefault();
    console.log("MODIF objeto");

    let pos = document.getElementById('txtPosicion').value;
    let id = document.getElementById('txtid').value;
    let nombre = document.getElementById('txtnombre').value;
    let marca = document.getElementById('txtmarca').value;
    let costo = document.getElementById('txtcosto').value;
    let cantidad = document.getElementById('txtcantidad').value;
    let estatus = document.getElementById('txtestatus').value;
    let sistema = document.getElementById('txtsistema').value;

    let procesa = document.getElementById('txtprocesador').value;
    let pantalla = document.getElementById('txtpantalla').value;
    let bateria = document.getElementById('txtbateria').value;
    let audio = document.getElementById('txtaudio').value;
    let cpu = document.getElementById('txtcpu').value;
    let memoria = document.getElementById('txtmemoria').value;
    let ram = document.getElementById('txtram').value;
    let conexion = document.getElementById('txtconexion').value;
    let fecha = document.getElementById('txtfecha').value;
    let foto="ip11.png";

    let fechnow = new Date()
    let fe = fechnow.getDate() + " / " + (fechnow.getMonth() + 1) + " / " + (fechnow.getFullYear() + 1);


    let miProd = new Producto(id,nombre,marca,costo,cantidad,estatus,sistema,procesa,pantalla,bateria,memoria,audio,cpu,ram,conexion,fecha,foto);
    console.log(miProd)

    let lista2 = JSON.parse(localStorage.getItem('listadepro'));
    lista2.splice(pos, 1, miProd)
    console.log("lista 2".lista2)
    localStorage.setItem("listadepro",JSON.stringify(lista2));
    setTimeout(function(){
        swal("Producto modificado!","Gracias!","success");
        window.location.href='index.php?ruta=consulta'
    },1500);
}