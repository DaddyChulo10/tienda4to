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


document.getElementById('txtnombre').addEventListener('blur',validarnombre);
document.getElementById('txtnombre').addEventListener('focus',validarnombre2);
///////validar clave
export function validarnombre(){
    let idc=document.getElementById('txtnombre').value;
    let caja=document.getElementById('txtnombre')
    let expresion=/^([a-zA-Z])*$/
    if(!expresion.test(idc)){
        let mensaje=document.getElementById('nom')
        mensaje.innerHTML='<span id="clv" class="msgIncorrecto"> datos incorrectos, solo se aceptan numero</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validarnombre2(){
    let idc=document.getElementById('txtnombre').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtnombre')
        caja.className="cajaBien"
    }
}

document.getElementById('txtcanti').addEventListener('blur',validarcantidad);
document.getElementById('txtcanti').addEventListener('focus',validarcantidad2);
///////validar clave
export function validarcantidad(){
    let idc=document.getElementById('txtcanti').value;
    let caja=document.getElementById('txtcanti')
    let expresion=/^([0-9])*$/
    if(!expresion.test(idc)){
        let mensaje=document.getElementById('canti')
        mensaje.innerHTML='<span id="clv" class="msgIncorrecto"> datos incorrectos, solo se aceptan numero</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validarcantidad2(){
    let idc=document.getElementById('txtcanti').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtcanti')
        caja.className="cajaBien"
    }
}