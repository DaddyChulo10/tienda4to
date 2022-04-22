import { Producto } from "./Producto.js";
document.getElementById('ver1').addEventListener('click', apple);




function apple(e) {
    let listap = JSON.parse(localStorage.getItem('listadepro'));
    let listProd = "";
    e.preventDefault();
    listap.forEach(function(prod) {
        console.log(prod);
        if(prod.marca=="Apple"){
            listProd += '<div class="col-md-4>"';
            listProd += '<div class="card" style="width: 18rem;">';
            listProd += '<img class="card-img-top" width:"100" height="120" src="vistas/img/' + prod.foto + '"alt="card image cap">';
            listProd += '<div class="card-body">';
            listProd += '<h3 class="card-title">' + prod.nombre + '</h3>';
            listProd += '<p class="card-text">$ ' + prod.precio + '</p>';
            listProd += '<p class="card-text">Marca: ' + prod.marca + '</p>';
            listProd += '</div></div></div>';
        }
        
    } 
    );

    document.getElementById("lista-mar").innerHTML=listProd;
}
//--------------------------------------

document.getElementById('ver2').addEventListener('click', samsung);




function samsung(e) {
    let listap = JSON.parse(localStorage.getItem('listadepro'));
    let listProd = "";
    e.preventDefault();
    listap.forEach(function(prod) {
        console.log(prod);
        if(prod.marca=="Samsung"){
            listProd += '<div class="col-md-4>"';
            listProd += '<div class="card" style="width: 18rem;">';
            listProd += '<img class="card-img-top" width:"100" height="120" src="vistas/img/' + prod.foto + '"alt="card image cap">';
            listProd += '<div class="card-body">';
            listProd += '<h3 class="card-title">' + prod.nombre + '</h3>';
            listProd += '<p class="card-text">$ ' + prod.precio + '</p>';
            listProd += '<p class="card-text">Marca: ' + prod.marca + '</p>';
            listProd += '</div></div></div>';
        }
        
    } 
    );

    document.getElementById("lista-mar2").innerHTML=listProd;
}
