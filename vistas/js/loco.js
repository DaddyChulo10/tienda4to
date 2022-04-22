document.getElementById('Btnconsulta').addEventListener('click',consulta);
document.addEventListener('DOMContentLoaded',mostrar);
let x=1
document.querySelector("#tablaPila").addEventListener('click',eliminarProd)


let listp=new Array;
let listaproductos;
function consulta(e) {
    e.preventDefault();
    listp=JSON.parse(localStorage.getItem('listadepro'));
    localStorage.setItem('listadepro',JSON.stringify(listp));
    listaproductos="<tr><td>FOTO</td><td>ID</td><td>NOMBRE</td><td>CATEGORIA</td><td>MATERIALES</td><td>DISEÑADORA</td><td>GEMA</td><td>FECHA</td><td>CANTIDAD</td><td>STATUS</td><td>COSTO</td><td>PRECIO</td><td>ACTUALIZAR</td><td>ELIMINAR</td></tr>";
    for(let x=0; x<listp.length; x++){
    listaproductos +="<tr>";
    let miProdu=listp[x];
    listaproductos +="<td><img class='card-img-top' width:'50' height='50' src='vistas/img/"+miProdu.foto+"' alt='card image cap'></td><td>"+miProdu.id+"</td><td>"+miProdu.nombre+"</td><td>"+miProdu.marca+"</td><td>"+miProdu.materiales+"</td><td>"+miProdu.diseñadora+"</td><td>"+miProdu.gema+"</td><td>"+miProdu.fechaAD+"</td><td>"+miProdu.cantidad+"</td><td>"+miProdu.status+"</td><td>"+miProdu.costo+"</td><td>"+miProdu.precio+"</td><td><img class='card-img-top' width:'25' height='25' src='vistas/img/actu.png' alt='card image cap'></td><td><img class='card-img-top' width:'25' height='25' src='vistas/img/eliminar.png' alt='card image cap'></td></tr>";
 }
 document.getElementById("lista").innerHTML=listaproductos; 
 }

 function eliminarProd(e)
 {
    e.preventDefault()
     //const objeto1=e.target.parentElement
 
     //console.log("Objeto que lanzo el evento: ", objeto1)
 
     //const obj=e.target.parentElement.parentElement.parentElement
     //console.log("obj",obj)

    if(e.target.parentElement.classList.contains("borrarProd"))
    {
        const objeto1=e.target.parentElement
        console.log("Objeto que lanzo el evento: ", objeto1)

        const idProd =e.target.parentElement.id
        console.log("cve",idProd)
        let micon=JSON.parse(localStorage.getItem('listadepro'))
 
        let pila=micon
        pila.splice(idProd,1)
 
        micon=pila
        localStorage.setItem("listadepro",JSON.stringify(micon))
 
        location.reload()
    }
    if(e.target.parentElement.classList.contains("editarProd"))
    {
        console.log("Hola")
        contenedor = e.target.parentElement;
        console.log("Obtiene el contenedor padre del link seleccionado", contenedor)
        indiceProd = e.target.parentElement.id;

        setTimeout(function()
        {
            buscarProd(indiceProd)
        },1000);
    }
 }

function buscarProd(indiceProd)
{
    console.log("Indice desde modal",indiceProd)
    let lista2=JSON.parse(localStorage.getItem("listadepro"));
    console.log("lista2",lista2)

        lista2.forEach(function (producto, indice){
        if(indiceProd==indice){
            document.getElementById('txt_id').value=producto.id
            document.getElementById('txt_nombre').value=producto.nombre
            document.getElementById('txt_marca').value=producto.marca
            document.getElementById('txt_mate').value=producto.materiales
            document.getElementById('txt_dise').value=producto.diseñadora
            document.getElementById('txt_gema').value=producto.gema
            document.getElementById('txt_fecha').value=producto.fechaAD
            document.getElementById('txt_status').value=producto.status
            document.getElementById('txt_cost').value=producto.precio
            let hiddenInput = document.createElement('input');
                hiddenInput.type = "hidden";
                hiddenInput.id = "txtPosicion"
                hiddenInput.value = indiceProd
            document.getElementById("editarProd").appendChild(hiddenInput)
            console.log("Producto editado",producto)
        }
    })
}

function mostrar()
{
    let con = JSON.parse(localStorage.getItem("listadepro"))
    con.forEach(function(z, indice)
    {
        let renglon = document.createElement("tr")
        renglon.id="renglon"+x;
        let tabla = document.getElementById("tablaPila");
        tabla.appendChild(renglon);

        ////////FOTO///////
        let celda0=document.createElement("td")
        let miSpan0 = document.createElement("span")
            miSpan0.src='./vistas/img/'+z.foto
            celda0.appendChild(miSpan0)
            renglon.appendChild(celda0)

        ////////ID//////////
        let celda1=document.createElement("td")
        let miSpan1 = document.createElement("span")
            miSpan1.innerText=z.id+" indice: " + indice
            celda1.appendChild(miSpan1)
            renglon.appendChild(celda1)

        ////////NOMBRE//////////
        let celda2=document.createElement("td")
        let miSpan2 = document.createElement("span")
            miSpan2.innerText=z.nombre
            celda2.appendChild(miSpan2)
            renglon.appendChild(celda2)

        ////////MARCA//////////
        let celda3=document.createElement("td")
        let miSpan3 = document.createElement("span")
            miSpan3.innerText=z.marca
            celda3.appendChild(miSpan3)
            renglon.appendChild(celda3)

        ////////MATERIALES//////////
        let celda4=document.createElement("td")
        let miSpan4 = document.createElement("span")
            miSpan4.innerText=z.materiales
            celda4.appendChild(miSpan4)
            renglon.appendChild(celda4)

        ////////DISEÑADORA//////////
        let celda5=document.createElement("td")
        let miSpan5 = document.createElement("span")
            miSpan5.innerText=z.diseñadora
            celda5.appendChild(miSpan5)
            renglon.appendChild(celda5)

        ////////GEMA//////////
        let celda6=document.createElement("td")
        let miSpan6 = document.createElement("span")
            miSpan6.innerText=z.gema
            celda6.appendChild(miSpan6)
            renglon.appendChild(celda6)

        ////////FECHA//////////
        let celda7=document.createElement("td")
        let miSpan7 = document.createElement("span")
            miSpan7.innerText=z.fechaAD
            celda7.appendChild(miSpan7)
            renglon.appendChild(celda7)

        ////////CANTIDAD//////////
        let celda8=document.createElement("td")
        let miSpan8 = document.createElement("span")
            miSpan8.innerText=z.cantidad
            celda8.appendChild(miSpan8)
            renglon.appendChild(celda8)

        ////////STATUS//////////
        let celda9=document.createElement("td")
        let miSpan9 = document.createElement("span")
            miSpan9.innerText=z.status
            celda9.appendChild(miSpan9)
            renglon.appendChild(celda9)
        
        
        ////////PRECIO//////////
        let celda10=document.createElement("td")
        let miSpan10 = document.createElement("span")
            miSpan10.innerText=z.costo
            celda10.appendChild(miSpan10)
            renglon.appendChild(celda10)

        ////////PRECIO//////////
        let celda11=document.createElement("td")
        let miSpan11 = document.createElement("span")
            miSpan11.innerText=z.precio
            celda11.appendChild(miSpan11)
            renglon.appendChild(celda11)

        ////////HERRAMIENTAS//////////
        ///////////Eliminar////////////
        let celdaBtns = document.createElement("td")
        celdaBtns.id="celda"+x
        renglon=document.getElementById("renglon"+x)
        renglon.appendChild(celdaBtns);

        let miDiv = document.createElement("div");
        miDiv.className="btn-group";
        celdaBtns.appendChild(miDiv);

        //pencil//
        let miIcono = document.createElement('i');
        miIcono.className="fa fa-pencil"

        let miLinkEdit =document.createElement('a')
        miLinkEdit.href="#"
        miLinkEdit.id=indice
        miLinkEdit.className="editarProd btn btn-primary"
        miLinkEdit.setAttribute("data-toggle", "modal")
        miLinkEdit.setAttribute("data-target", "#editarProd")

        miLinkEdit.appendChild(miIcono)
        miDiv.appendChild(miLinkEdit)

        //x///
        let miLink =document.createElement('a')
        miLink.href="#"
        miLink.id=indice
        miLink.className="borrarProd btn btn-danger"

        let miIcono3 = document.createElement("i");

        miIcono3.className="fa fa-times"
        miLink.appendChild(miIcono3)

        miDiv.appendChild(miLink)
        x++
        //////////Editar/////////////;


    });
}




