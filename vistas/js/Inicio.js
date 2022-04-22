import { Producto } from "./Producto.js";
import { Carrito } from "./Carrito.js";
import { Usuarios } from "./usuarios.js";
//---------------NUEVO---------------
import { Categoria } from "./categorias.js";
import { Proveedor } from "./proveedores.js";
import { Cliente } from "./cliente.js";

function nuevocliente() {
   let miclien1 = new Cliente("1", "Lucero", "72350", "Lomas de Chapultepec", "Chabacano", "53", "777 439 8967", "edgar@gmail.com", "20", "Femenino");
   let miclien2 = new Cliente("2", "Lucero", "72350", "Lomas de Chapultepec", "Chabacano", "53", "777 439 8967", "edgar@gmail.com", "20", "Femenino");
   let miclien3 = new Cliente("3", "Lucero", "72350", "Lomas de Chapultepec", "Chabacano", "53", "777 439 8967", "edgar@gmail.com", "20", "Femenino");

   let arrCliente = new Array()
   arrCliente.push(miclien1)
   arrCliente.push(miclien2)
   arrCliente.push(miclien3)
   if (localStorage.getItem('listacliente') == null) {
      localStorage.setItem('listacliente', JSON.stringify(arrCliente));
   }

}

function nuevacategoria() {
   let micate1 = new Categoria("1", "Samsung", "2", "Galaxy 10", "Android");
   let micate2 = new Categoria("2", "Iphone", "2", "8 Plus", "Android");
   let micate3 = new Categoria("3", "LG", "2", "X Screem", "Android");

   let arrCategoria = new Array()
   arrCategoria.push(micate1)
   arrCategoria.push(micate2)
   arrCategoria.push(micate3)
   if (localStorage.getItem('listacategoria') == null) {
      localStorage.setItem('listacategoria', JSON.stringify(arrCategoria));
   }

}

function nuevoproveedor() {
   let miprove1 = new Proveedor("1", "Lucero", "Movistar", "1500", "Transferencia bancaria", "10", "5 años");
   let miprove2 = new Proveedor("1", "Lucero", "Movistar", "1500", "Transferencia bancaria", "10", "5 años");
   let miprove3 = new Proveedor("1", "Lucero", "Movistar", "1500", "Transferencia bancaria", "10", "5 años");

   let arrprove = new Array()
   arrprove.push(miprove1)
   arrprove.push(miprove2)
   arrprove.push(miprove3)
   if (localStorage.getItem('listaproveedor') == null) {
      localStorage.setItem('listaproveedor', JSON.stringify(arrprove));
   }
}





//---------------NUEVO---------------

//-------------USUARIOS--------------------------------------------//
function nuevolistasusuarios() {
   let miuser1 = new Usuarios("1", "aa", "11", "Admi");
   let miuser2 = new Usuarios("2", "Fatima", "123", "Usuario");
   let miuser3 = new Usuarios("3", "Edgar", "123", "Usuario");

   let arrUsuarios = new Array()
   arrUsuarios.push(miuser1)
   arrUsuarios.push(miuser2)
   arrUsuarios.push(miuser3)
   if (localStorage.getItem('listausuarios') == null) {
      localStorage.setItem('listausuarios', JSON.stringify(arrUsuarios));
   }

}

//--------------------------------sdssssssssssdd-------//

let arrProductos = new Array();
let listap = new Array();
/*
  let miProd=new Producto(clave,nombre,marca,costo,cantidad,estatus,sistemao,velocidadp,pantalla,bateria,memoria,audio,cpu,ram,conexion,fecha,foto);
   
*/
var miProd1 = new Producto("1", "Iphone 5S", "Apple", 6000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip5.png");
var miProd2 = new Producto("2", "Iphone 8 Plus", "Apple", 12000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip8.jpg");
var miProd3 = new Producto("3", "Iphone 10 Max", "Apple", 19000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip10.jpg");
var miProd4 = new Producto("4", "Iphone 11 Pro", "Apple", 34000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd5 = new Producto("5", "Iphone 5S", "Apple", 6000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip5.png");
var miProd6 = new Producto("6", "Iphone 8 Plus", "Apple", 12000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip8.jpg");
var miProd7 = new Producto("7", "Iphone 10 Max", "Apple", 19000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip10.jpg");
var miProd8 = new Producto("8", "Iphone 11 Pro", "Apple", 34000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd9 = new Producto("9", "Iphone 10 Max", "Apple", 19000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip10.jpg");
var miProd10 = new Producto("10", "Iphone 11 Pro", "Apple", 34000, 1, "Vigente", "Ios",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Exynos 7420 Octa", "16 GB", "Wifi", "18-10-2019", "ip11.png");

var miProd11 = new Producto("11", "Samsung Galaxy s6", "Samsung", 6000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip10.jpg");
var miProd12 = new Producto("12", "Samsung Galaxy s9", "Samsung", 12000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd13 = new Producto("13", "Samsung Galaxy s10", "Samsung", 19000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd14 = new Producto("14", "Samsung Galaxy s5", "ApSamsungple", 34000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd15 = new Producto("15", "Samsung Galaxy s6", "Samsung", 6000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd16 = new Producto("16", "Samsung Galaxy s9", "Samsung", 12000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd17 = new Producto("17", "Samsung Galaxy s10", "Samsung", 19000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd18 = new Producto("18", "Samsung Galaxy s5", "Samsung", 34000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd19 = new Producto("19", "Samsung Galaxy s6", "Samsung", 19000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip11.png");
var miProd20 = new Producto("20", "Samsung Galaxy s9", "Samsung", 34000, 1, "Vigente", "Android",
   "Snapdragon 625", "IPS LCD", "iones de Litio", "16GB", "mp3", "Intel Atom", "16 GB", "Wifi", "18-10-2019", "ip8.jpg");



arrProductos.push(miProd1); arrProductos.push(miProd2); arrProductos.push(miProd3); arrProductos.push(miProd4);
arrProductos.push(miProd5); arrProductos.push(miProd6); arrProductos.push(miProd7); arrProductos.push(miProd8);
arrProductos.push(miProd9); arrProductos.push(miProd10);
arrProductos.push(miProd11); arrProductos.push(miProd12); arrProductos.push(miProd13); arrProductos.push(miProd14);
arrProductos.push(miProd15); arrProductos.push(miProd16); arrProductos.push(miProd17); arrProductos.push(miProd18);
arrProductos.push(miProd19); arrProductos.push(miProd20);

console.log(arrProductos);
let listaProductos;
document.addEventListener('DOMContentLoaded', mostrar);

let listProd = "";
function mostrar(e) {
   //----------------NUEVO
   nuevacategoria();
   nuevoproveedor();
   nuevocliente();


   //----------------NUEVO
   nuevolistasusuarios();
   e.preventDefault();
   if (localStorage.getItem("listadepro") == null) {
      guardarLocalStorage();
   }
   listap = obtenerListProdLocalStorage()
   listap.forEach(function (prod) {
      listProd += '<div class="col-sm-6 col-md-2 ">';
      listProd += '<div class="card" style="height:200px">';
      listProd += '<img class="card-img-top" width:"100" height="120" src="vistas/img/' + prod.foto + '"alt="card image cap">';
      listProd += '<div class="card-body">';
      listProd += '<h4 class="card-title">' + prod.nombre + "     $" + prod.precio+ '</h4>';

      listProd += '<input type="hidden" id="txtIdProd" value="' + prod.id + '">';
      listProd += '<a href="#" class="addCar">Agregar Al Carrito</a>'
      listProd += '</div></div></div></div>';
   }
   );
   document.getElementById("lista-Prod").innerHTML = listProd;
   console.log(listap)
}
function guardarLocalStorage() {
   localStorage.setItem('listadepro', JSON.stringify(arrProductos));

}
function obtenerListProdLocalStorage() {
   let lista = new Array()
   lista = JSON.parse(localStorage.getItem('listadepro'));
   return lista
}
document.querySelector("#lista-Prod").addEventListener("click", addCarrito)

function addCarrito(e) {
   e.preventDefault();
   console.log("add car")
   if (e.target.classList.contains('addCar')) {
      const contenedor = e.target.parentElement;
      console.log("obtiene el contenedor padre link seleccionado", contenedor)
      let cvePro = contenedor.querySelector('#txtIdProd').value;
      console.log("clave Selected:", cvePro);
      buscarProd(cvePro)
      let miUsuLogueado = JSON.parse(sessionStorage.getItem('sesionUsu'))
      console.log("sesion", miUsuLogueado)
      //idCar,idUsu,cant,fe,listaProd
      let idUsu = miUsuLogueado.id
      let idCar = 1
      let cant = 1
      let fechNow = new Date();
      let fe = fechNow.getDate() + "/" + (fechNow.getMonth() + 1) + "/" + fechNow.getFullYear()
      let miCarrito = new Carrito(idCar, idUsu, cant, fe, listaProd)
      let arrCarritos = new Array()
      arrCarritos.unshift(miCarrito)
      console.log(arrCarritos)
      localStorage.setItem('CarritoUso', JSON.stringify(miCarrito))
   }
}
let listaProd = new Array()
function buscarProd(cvePro) {
   obtenerListProdLocalStorage = JSON.parse(localStorage.getItem('listadepro'))
   obtenerListProdLocalStorage.forEach(function (Producto) {
      if (cvePro == Producto.id) {
         listaProd.unshift(Producto)
         console.log("producto added", Producto)
         swal({
            title: "Celular agregado a tu carrito",
            text: "Gracias por tu compra",
            icon: "success",
            button: "Continuar",
         })
      }
   })
}

