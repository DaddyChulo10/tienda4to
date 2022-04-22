document.addEventListener('DOMContentLoaded', mostrar);

let x = 0;


document.querySelector('#tablacar').addEventListener('click', eliminarcarrito);

function eliminarcarrito(e) {
    e.preventDefault();
    const objeto1= e.target.parentElement
    console.log("Objeto que se lanzo el evento",objeto1)
    const idProd=e.target.parentElement.id
    console.log("cve",idProd)
    let micar = JSON.parse(localStorage.getItem('CarritoUso'))
    let lista = micar.listaProducto
    lista.splice(idProd,1)
    micar.listaProducto=lista
    localStorage.setItem('CarritoUso',JSON.stringify(micar))
    location.reload()

}

//Categorias,proveedores,clientes!



function mostrar() {
   
    let car = JSON.parse(localStorage.getItem('CarritoUso'))

    let datos = document.createElement('p')
    datos.innerText = "Clave: " + car.idCar + " Fecha: " + car.fechaCompra;
    let d = document.getElementById('datosCar')
    d.appendChild(datos)
    let lista = car.listaProducto;
    lista.forEach(function (z, indice) {
        let renglon = document.createElement('tr');
        renglon.id = "renglon" + x;
        let tabla = document.getElementById("tablaPila");
        tabla.appendChild(renglon);


        let celda1 = document.createElement('td')
        let miSpan1 = document.createElement('span')
        miSpan1.innerText = z.id  + indice
        celda1.appendChild(miSpan1)
        renglon.appendChild(celda1)


        let celda2 = document.createElement('td')
        let miSpan2 = document.createElement('span')
        miSpan2.innerText = z.nombre
        celda2.appendChild(miSpan2)
        renglon.appendChild(celda2)


        let celda3 = document.createElement('td')
        let miSpan3 = document.createElement('span')
        miSpan3.innerText = z.marca
        celda3.appendChild(miSpan3)
        renglon.appendChild(celda3)



        let celda4 = document.createElement('td')
        let miSpan4 = document.createElement('span')
        miSpan4.innerText = z.sistemao
        celda4.appendChild(miSpan4)
        renglon.appendChild(celda4)


        let celda5 = document.createElement('td')
        let miSpan5 = document.createElement('span')
        miSpan5.innerText = z.cantidad
        celda5.appendChild(miSpan5)
        renglon.appendChild(celda5)



        let celda6 = document.createElement('td')
        let miSpan6 = document.createElement('span')
        miSpan6.innerText = z.memoria
        celda6.appendChild(miSpan6)
        renglon.appendChild(celda6)


        let celda7 = document.createElement('td')
        let miSpan7 = document.createElement('span')
        miSpan7.innerText = z.precio
        celda7.appendChild(miSpan7)
        renglon.appendChild(celda7)

        //BotonEliminar

        let celdabtn = document.createElement('td');
        celdabtn.id = "celda" + x
        renglon = document.getElementById("renglon" + x);
        renglon.appendChild(celdabtn);

        let midiv = document.createElement("div");
        midiv.className = "btn-group";
        celdabtn.appendChild(midiv);

        let milink = document.createElement("a")
        milink.href = "#"
        milink.id = indice
        milink.className = "borraProd btn btn-danger"

        let miIcono3 = document.createElement("i");
        miIcono3.className = "fa fa-times"
        milink.appendChild(miIcono3)
        midiv.appendChild(milink)
        x++
    });
}
