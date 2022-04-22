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

//--------------------

document.getElementById('txtcliente').addEventListener('blur',validarnombre);
document.getElementById('txtcliente').addEventListener('focus',validarnombre2);
///////validar clave
export function validarnombre(){
    let idc=document.getElementById('txtcliente').value;
    let caja=document.getElementById('txtcliente')
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
    let idc=document.getElementById('txtcliente').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtcliente')
        caja.className="cajaBien"
    }
}

//--------------------

document.getElementById('txtcp').addEventListener('blur',validarcod);
document.getElementById('txtcp').addEventListener('focus',validarcod2);
///////validar clave
export function validarcod(){
    let idc=document.getElementById('txtcp').value;
    let caja=document.getElementById('txtcp')
    let expresion=/^([0-9])*$/
    if(!expresion.test(idc)){
        let mensaje=document.getElementById('cp')
        mensaje.innerHTML='<span id="clv" class="msgIncorrecto"> datos incorrectos, solo se aceptan numero</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validarcod2(){
    let idc=document.getElementById('txtcp').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtcp')
        caja.className="cajaBien"
    }
}

//--------------------

document.getElementById('txtcasa').addEventListener('blur',validacasa);
document.getElementById('txtcasa').addEventListener('focus',validacasa2);
///////validar clave
export function validacasa(){
    let idc=document.getElementById('txtcasa').value;
    let caja=document.getElementById('txtcasa')
    let expresion=/^([0-9])*$/
    if(!expresion.test(idc)){
        let mensaje=document.getElementById('cas')
        mensaje.innerHTML='<span id="clv" class="msgIncorrecto"> datos incorrectos, solo se aceptan numero</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validacasa2(){
    let idc=document.getElementById('txtcasa').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtcasa')
        caja.className="cajaBien"
    }
}

//--------------------

document.getElementById('txttel').addEventListener('blur',validatel);
document.getElementById('txttel').addEventListener('focus',validatel2);
///////validar clave
export function validatel(){
    let idc=document.getElementById('txttel').value;
    let caja=document.getElementById('txttel')
    let expresion=/^([0-9])*$/
    if(!expresion.test(idc)){
        let mensaje=document.getElementById('tel')
        mensaje.innerHTML='<span id="clv" class="msgIncorrecto"> datos incorrectos, solo se aceptan numero</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validatel2(){
    let idc=document.getElementById('txttel').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txttel')
        caja.className="cajaBien"
    }
}

//--------------------


document.getElementById('txtedad').addEventListener('blur',valiedad);
document.getElementById('txtedad').addEventListener('focus',valiedad2);
///////validar clave
export function valiedad(){
    let idc=document.getElementById('txtedad').value;
    let caja=document.getElementById('txtedad')
    let expresion=/^([0-9])*$/
    if(!expresion.test(idc)){
        let mensaje=document.getElementById('edad')
        mensaje.innerHTML='<span id="clv" class="msgIncorrecto"> datos incorrectos, solo se aceptan numero</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function valiedad2(){
    let idc=document.getElementById('txtedad').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtedad')
        caja.className="cajaBien"
    }
}

//--------------------

