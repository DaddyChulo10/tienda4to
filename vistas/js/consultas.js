document.addEventListener('DOMContentLoaded', consulta);
let listp = new Array;
let listaproductos;
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
        let cola = JSON.parse(localStorage.getItem('listadepro'))

        cola.splice(idProd, 1)
        localStorage.setItem('listadepro', JSON.stringify(cola));
        location.reload();

    }
    if (e.target.parentElement.classList.contains('modalcate')) {

        const contenedor = e.target.parentElement;
        console.log("obtiene el contenedor padre del link seleccionado 2", contenedor)
        indiceProd = e.target.parentElement.id;

        setTimeout(function () {
            buscarProd(indiceProd)
        }, 1000);
    }
}
//-------------------BUSCAR----------------------------------


function buscarProd(indiceProd) {
    console.log("indice desde modal", indiceProd)

    let lista2 = JSON.parse(localStorage.getItem('listadepro'));
    console.log("lista2", lista2)
    lista2.forEach(function (producto, indice) {
        if (indiceProd == indice) {

            document.getElementById('txtid').value = producto.id
            document.getElementById('txtnombre').value = producto.nombre
            document.getElementById('txtmarca').value = producto.marca
            document.getElementById('txtcosto').value = producto.costo
            document.getElementById('txtcantidad').value = producto.cantidad
            document.getElementById('txtestatus').value = producto.estatus
            document.getElementById('txtsistema').value = producto.sistemao
            document.getElementById('txtprocesador').value = producto.velocidadp
            document.getElementById('txtpantalla').value = producto.pantalla
            document.getElementById('txtbateria').value = producto.bateria
            document.getElementById('txtaudio').value = producto.audio
            document.getElementById('txtcpu').value = producto.cpu
            document.getElementById('txtmemoria').value = producto.memoria
            document.getElementById('txtram').value = producto.ram
            document.getElementById('txtconexion').value = producto.conexion
            document.getElementById('txtfecha').value = producto.fecha


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


function consulta(e) {
    e.preventDefault();
    listp = JSON.parse(localStorage.getItem('listadepro'));
    localStorage.setItem('listadepro', JSON.stringify(listp));

    let datos = document.createElement('p')
    datos.innerText = "";
    let d = document.getElementById('datosCar1')
    d.appendChild(datos)
    let lista = listp;
    lista.forEach(function (z, indice) {

        let renglon = document.createElement('tr');
        renglon.id = "renglon" + x;
        let tabla = document.getElementById("tablaPila1");
        tabla.appendChild(renglon);




        let celda1 = document.createElement('td')
        let miSpan1 = document.createElement('img')
        miSpan1.src = "vistas/img/" + z.foto; 
        miSpan1.width="100";
        miSpan1.height="120";
        celda1.appendChild(miSpan1)
        renglon.appendChild(celda1)


        let celda2 = document.createElement('td')
        let miSpan2 = document.createElement('span')
        miSpan2.innerText = z.id
        celda2.appendChild(miSpan2)
        renglon.appendChild(celda2)


        let celda3 = document.createElement('td')
        let miSpan3 = document.createElement('span')
        miSpan3.innerText = z.nombre
        celda3.appendChild(miSpan3)
        renglon.appendChild(celda3)



        let celda4 = document.createElement('td')
        let miSpan4 = document.createElement('span')
        miSpan4.innerText = z.marca
        celda4.appendChild(miSpan4)
        renglon.appendChild(celda4)


        let celda5 = document.createElement('td')
        let miSpan5 = document.createElement('span')
        miSpan5.innerText = z.costo
        celda5.appendChild(miSpan5)
        renglon.appendChild(celda5)



        let celda6 = document.createElement('td')
        let miSpan6 = document.createElement('span')
        miSpan6.innerText = z.precio
        celda6.appendChild(miSpan6)
        renglon.appendChild(celda6)


        let celda7 = document.createElement('td')
        let miSpan7 = document.createElement('span')
        miSpan7.innerText = z.cantidad
        celda7.appendChild(miSpan7)
        renglon.appendChild(celda7)

        let celda8 = document.createElement('td')
        let miSpan8 = document.createElement('span')
        miSpan8.innerText = z.estatus
        celda8.appendChild(miSpan8)
        renglon.appendChild(celda8)


        let celda9 = document.createElement('td')
        let miSpan9 = document.createElement('span')
        miSpan9.innerText = z.sistemao
        celda9.appendChild(miSpan9)
        renglon.appendChild(celda9)


        let celda10 = document.createElement('td')
        let miSpan10 = document.createElement('span')
        miSpan10.innerText = z.velocidadp
        celda10.appendChild(miSpan10)
        renglon.appendChild(celda10)



        let celda11 = document.createElement('td')
        let miSpan11 = document.createElement('span')
        miSpan11.innerText = z.pantalla
        celda11.appendChild(miSpan11)
        renglon.appendChild(celda11)


        let celda12 = document.createElement('td')
        let miSpan12 = document.createElement('span')
        miSpan12.innerText = z.bateria
        celda12.appendChild(miSpan12)
        renglon.appendChild(celda12)



        let celda13 = document.createElement('td')
        let miSpan13 = document.createElement('span')
        miSpan13.innerText = z.audio
        celda13.appendChild(miSpan13)
        renglon.appendChild(celda13)


        let celda14 = document.createElement('td')
        let miSpan14 = document.createElement('span')
        miSpan14.innerText = z.cpu
        celda14.appendChild(miSpan14)
        renglon.appendChild(celda14)

        let celda15 = document.createElement('td')
        let miSpan15 = document.createElement('span')
        miSpan15.innerText = z.memoria
        celda15.appendChild(miSpan15)
        renglon.appendChild(celda15)



        let celda16 = document.createElement('td')
        let miSpan16 = document.createElement('span')
        miSpan16.innerText = z.ram
        celda16.appendChild(miSpan16)
        renglon.appendChild(celda16)


        let celda17 = document.createElement('td')
        let miSpan17 = document.createElement('span')
        miSpan17.innerText = z.conexion
        celda17.appendChild(miSpan17)
        renglon.appendChild(celda17)

        let celda18 = document.createElement('td')
        let miSpan18 = document.createElement('span')
        miSpan18.innerText = z.fecha
        celda18.appendChild(miSpan18)
        renglon.appendChild(celda18)
























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






