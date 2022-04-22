document.addEventListener('DOMContentLoaded', consultas);
let listprov = new Array;
let x = 0;
export let indiceProd







//--------------------ELIMINAR------------------------
document.querySelector('#lista').addEventListener('click', elimProdCarrito)

function elimProdCarrito(e) {
    e.preventDefault()

    const miLinkSelected = e.target.parentElement
    console.log("obtiene el contenedor padre del icono seleccionado: NODO etiqueta a", miLinkSelected)

    const idProd = e.target.parentElement.id
    const obj = e.target.parentElement
    console.log("obj", obj)
    if (e.target.parentElement.classList.contains('borrarProd')) {
        console.log("cve", idProd)
        let cola = JSON.parse(localStorage.getItem('listaproveedor'))

        cola.splice(idProd, 1)
        localStorage.setItem('listaproveedor', JSON.stringify(cola));
        location.reload();

    }
    if (e.target.parentElement.classList.contains('modalcate')) {

        const contenedor = e.target.parentElement;
        console.log("obtiene el contenedor padre del link seleccionado 2", contenedor)
        indiceProd = e.target.parentElement.id;

        setTimeout(function () {
            buscarProd(indiceProd)
        }, 3000);
    }
}
//-------------------BUSCAR----------------------------------


function buscarProd(indiceProd) {
    console.log("indice desde modal", indiceProd)

    let lista2 = JSON.parse(localStorage.getItem('listaproveedor'));
    console.log("lista2", lista2)
    lista2.forEach(function (producto, indice) {
        if (indiceProd == indice) {

            document.getElementById('txtid').value = producto.id
            document.getElementById('txtnombre').value = producto.nombre
            document.getElementById('txtempresa').value = producto.empresa
            document.getElementById('txtprecio').value = producto.precios
            document.getElementById('txtformas').value = producto.formapago
            document.getElementById('txtcantidad').value = producto.cantidad
            document.getElementById('txtgarantia').value = producto.garantia

            let hiddenInput = document.createElement('input');
            hiddenInput.type = 'hidden';
            hiddenInput.id = 'txtPosicion'
            hiddenInput.value = indiceProd
            document.getElementById('frmEditProd').appendChild(hiddenInput)
            console.log("producto edited", producto)

        }
    })
}


//-------------------CONSULTA----------------------------------


function consultas(e) {
    e.preventDefault();
    listprov = JSON.parse(localStorage.getItem('listaproveedor'));
    localStorage.setItem('listaproveedor', JSON.stringify(listprov));

    let datos = document.createElement('p')
    datos.innerText = "";
    let d = document.getElementById('datosCar3')
    d.appendChild(datos)
    let lista = listprov;
    lista.forEach(function (z, indice) {

        let renglon = document.createElement('tr');
        renglon.id = "renglon" + x;
        let tabla = document.getElementById("tablaPila3");
        tabla.appendChild(renglon);




        let celda1 = document.createElement('td')
        let miSpan1 = document.createElement('span')
        miSpan1.innerText = z.id
        celda1.appendChild(miSpan1)
        renglon.appendChild(celda1)


        let celda2 = document.createElement('td')
        let miSpan2 = document.createElement('span')
        miSpan2.innerText = z.nombre
        celda2.appendChild(miSpan2)
        renglon.appendChild(celda2)


        let celda3 = document.createElement('td')
        let miSpan3 = document.createElement('span')
        miSpan3.innerText = z.empresa
        celda3.appendChild(miSpan3)
        renglon.appendChild(celda3)



        let celda4 = document.createElement('td')
        let miSpan4 = document.createElement('span')
        miSpan4.innerText = z.precios
        celda4.appendChild(miSpan4)
        renglon.appendChild(celda4)


        let celda5 = document.createElement('td')
        let miSpan5 = document.createElement('span')
        miSpan5.innerText = z.formapago
        celda5.appendChild(miSpan5)
        renglon.appendChild(celda5)

        let celda6 = document.createElement('td')
        let miSpan6 = document.createElement('span')
        miSpan6.innerText = z.cantidad
        celda6.appendChild(miSpan6)
        renglon.appendChild(celda6)


        let celda7 = document.createElement('td')
        let miSpan7 = document.createElement('span')
        miSpan7.innerText = z.garantia
        celda7.appendChild(miSpan7)
        renglon.appendChild(celda7)






        ////////HERRAMIENTAS//////////
        ///////////Eliminar////////////
        let celdaBtns = document.createElement("td")
        celdaBtns.id = "celda" + x
        renglon = document.getElementById("renglon" + x)
        renglon.appendChild(celdaBtns);

        let miDiv = document.createElement("div");
        miDiv.className = "btn-group";
        celdaBtns.appendChild(miDiv);

        //pencil//
        let miIcono = document.createElement('i');
        miIcono.className = "fa fa-pencil"

        let miLinkEdit = document.createElement('a')
        miLinkEdit.href = "#"
        miLinkEdit.id = indice
        miLinkEdit.className = "modalcate btn btn-primary"
        miLinkEdit.setAttribute("data-toggle", "modal")
        miLinkEdit.setAttribute("data-target", "#modalcate")

        miLinkEdit.appendChild(miIcono)
        miDiv.appendChild(miLinkEdit)

        //x///
        let miLink = document.createElement('a')
        miLink.href = "#"
        miLink.id = indice
        miLink.className = "borrarProd btn btn-danger"

        let miIcono3 = document.createElement("i");

        miIcono3.className = "fa fa-times"
        miLink.appendChild(miIcono3)

        miDiv.appendChild(miLink)
        x++
        //////////Editar/////////////;
    });


}