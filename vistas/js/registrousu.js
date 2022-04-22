import {Usuarios} from "./usuarios.js";

document.querySelector('#btnregi').addEventListener('click', newres)

function newres(e) {
   e.preventDefault();

   let aleatorio = Math.round(Math.random()*1000);
   let usuar = document.getElementById("txtnewusu").value;
   let contra = document.getElementById("txtnewpass").value;

   let nueusu=new Usuarios(aleatorio,usuar,contra,"cliente");

   let listaU=JSON.parse(localStorage.getItem('listausuarios'))
   listaU.unshift(nueusu);
   localStorage.setItem('listausuarios',JSON.stringify(listaU));

   swal("Bienvenido", "Gracias por registrar!", "success");


   console.log("NuevoUsuario",nueusu);
}