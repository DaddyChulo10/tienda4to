import {Producto} from "./Producto.js";
import{validarClave} from "./validar.js";
import{validarNombre} from "./validar.js";
import{validarCosto} from "./validar.js";
document.getElementById('Btnagregar').addEventListener('click',agregarproducto);
document.getElementById('btnimg').addEventListener('change',validarimg);
let bandera;

function validarimg(e){
    e.preventDefault();
    let imagen1=this.files;
    console.log("archivos",this.files);
    let imagen=this.files[0];
    console.log("imagen",imagen);
    console.log('imagen',imagen.type);
    if(imagen.type == "image/jpeg" || imagen.type == "image/png"){
        if(imagen.size<=2000000){
        
        var hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.id = 'txtimagenoculta';
        hiddenInput.value = imagen.name;
        document.getElementById('nombreimagenarticulo').appendChild(hiddenInput);
        bandera=1
    }
    else{
        const mensaje = document.createElement('p');
        mensaje.innerText = "el archivo no debe ser de ese tamaño";
        mensaje.id = 'mensaje';
        mensaje.className = 'mensajaecorrecto';
        let formu=document.getElementById('frmProd');
        formu.insertBefore(mensaje,document.getElementById('lblimg'));
        setTimeout(function(){
            document.getElementById('mensaje').remove();
        }, 9000)
    }
}
 else{
        const mensaje = document.createElement('p');
        mensaje.innerText = "el archivo debe ser formato jpg o png seleccione otro archivo";
        mensaje.id = 'mensaje';
        mensaje.className = 'mensajaecorrecto';
        let formu=document.getElementById('frmProd');
        formu.insertBefore(mensaje,document.getElementById('lblimg'));
        setTimeout(function(){
            document.getElementById('mensaje').remove();
        }, 9000)
    }
    return bandera;
}

function agregarproducto(e){
    e.preventDefault();
    let clave=document.getElementById("txtclave").value;
    let nombre=document.getElementById("txtnombre").value;
    let marca=document.getElementById("txtmarca").value;
    let costo=document.getElementById("txtcosto").value;
    
    //Nuevo//

   let cantidad=document.getElementById("txtcantidad").value;
   let estatus=document.getElementById("sltes").value;
   let sistemao=document.getElementById("sltso").value;
   let velocidadp=document.getElementById("txtpro").value;
   let pantalla=document.getElementById("txtrep").value;
   let bateria=document.getElementById("txtbateria").value;
   let memoria=document.getElementById("sltmemoria").value;
   let audio=document.getElementById("txtaudio").value;
   let cpu=document.getElementById("txtcpu").value;
   let ram=document.getElementById("txtram").value;
   let conexion=document.getElementById("sltcon").value;

    //FIN//
    let fecha=document.getElementById("txtfecha").value;
    let foto=document.getElementById("txtimagenoculta").value;

    
    if(bandera==1 && validarClave() && validarNombre() && validarCosto()){
    let miProd=new Producto(clave,nombre,marca,costo,cantidad,estatus,sistemao,velocidadp,pantalla,bateria,memoria,audio,cpu,ram,conexion,fecha,foto);
    
    let listp=JSON.parse(localStorage.getItem('listadepro'));
    listp.push(miProd);
    localStorage.setItem('listadepro',JSON.stringify(listp));
    console.log(listp);

    subirarch();
    swal({
     title: "producto Registrado",
     text: "& archivo enviado",
     icon: "success",
     button: "Continuar",
    });
}else{
    console.log("error en los datos")
}
}

function subirarch(){
    if (bandera==1){
        console.log("sube archivo")
        const miForm=document.getElementById('frmProd')
        const btnimg=document.getElementById('btnimg')

        const endPoint="./vistas/modulos/subirArchivo.php";
        const miformData = new FormData();
        console.log("btnimg,files")
        miformData.append("btnimg", btnimg.files[0])
        fetch(endPoint,{
            method: "post",
            body: miformData
        })
        .then(function(res){
            return res.json()
        })
        .then(function(datos){
            console.log(datos)
            const mensaje = document.createElement('p');
            mensaje.innerText=JSON.stringify(datos.respPHP)
            mensaje.id='mensaje';
            mensaje.className='mensajeCorrecto';

            miForm.insertBefore(mensajem,document.getElementById('txtnombre'));
            setTimeout(function(){
                document.getElementById('mensaje').remove();
            },6000);
        })
        .catch(console.error);
    }
}



