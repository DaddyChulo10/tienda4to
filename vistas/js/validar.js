import {Producto} from "./Producto.js";
document.getElementById('txtclave').addEventListener('blur',validarClave);
document.getElementById('txtclave').addEventListener('focus',validarClave2);
///////validar clave
export function validarClave(){
    let idc=document.getElementById('txtclave').value;
    let caja=document.getElementById('txtclave')
    let expresion=/^([0-9])*$/
    if(!expresion.test(idc)){
        let mensaje=document.getElementById('id')
        mensaje.innerHTML='<span id="clv" class="msgIncorrecto"> datos incorrectos, solo se aceptan numero</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validarClave2(){
    let idc=document.getElementById('txtclave').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtclave')
        caja.className="cajaBien"
    }
}
///////validar nombre
document.getElementById('txtnombre').addEventListener('blur',validarNombre);
document.getElementById('txtnombre').addEventListener('focus',validarNombre2);

export function validarNombre(){
    let n=document.getElementById('txtnombre').value;
    let caja=document.getElementById('txtnombre')
    let expresion=/^[a-zA-Z0-9\s*]*$/
    if(!expresion.test(n)){
        let mensaje=document.getElementById('nom')
        mensaje.innerHTML='<span id="nomb" class="msgIncorrecto"> datos incorrectos, solo se aceptan letras</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validarNombre2(){
    let n=document.getElementById('txtnombre').value;   
    console.log("nu", n)
    if(n.length>0){
        if(document.getElementById('nomb'))
        document.getElementById('nomb').remove()
        let caja=document.getElementById('txtnombre')
        caja.className="cajaBien"
    }
}
////validar costo
document.getElementById('txtcosto').addEventListener('blur',validarCosto);
document.getElementById('txtcosto').addEventListener('focus',validarCosto2);

export function validarCosto(){
    let num=document.getElementById('txtcosto').value;
    let caja=document.getElementById('txtcosto')
    let expresion=/^([0-9])*$/
    if(!expresion.test(num)){
        let mensaje=document.getElementById('num')
        mensaje.innerHTML='<span id="numb" class="msgIncorrecto"> datos incorrectos, solo se aceptan numeros</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validarCosto2(){
    let num=document.getElementById('txtcosto').value;   
    console.log("nu", num)
    if(num.length>0){
        if(document.getElementById('numb'))
        document.getElementById('numb').remove()
        let caja=document.getElementById('txtcosto')
        caja.className="cajaBien"
    }
}
////validar Cantidad Adquirida
document.getElementById('txtcantidad').addEventListener('blur',validarCan);
document.getElementById('txtcantidad').addEventListener('focus',validarCan2);

export function validarCan(){
    let can=document.getElementById('txtcantidad').value;
    let caja=document.getElementById('txtcantidad')
    let expresion=/^([0-9])*$/
    if(!expresion.test(can)){
        let mensaje=document.getElementById('can')
        mensaje.innerHTML='<span id="numb" class="msgIncorrecto">Datos incorrectos, solo se aceptan numeros</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validarCan2(){
    let can=document.getElementById('txtcantidad').value;   
    console.log("nu", can)
    if(can.length>0){
        if(document.getElementById('can'))
        document.getElementById('can').remove()
        let caja=document.getElementById('txtcantidad')
        caja.className="cajaBien"
    }
}



