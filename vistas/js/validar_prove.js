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


document.getElementById('txtprove').addEventListener('blur',validarnombre);
document.getElementById('txtprove').addEventListener('focus',validarnombre2);
///////validar clave
export function validarnombre(){
    let idc=document.getElementById('txtprove').value;
    let caja=document.getElementById('txtprove')
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
    let idc=document.getElementById('txtprove').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtprove')
        caja.className="cajaBien"
    }
}




document.getElementById('txtprecio').addEventListener('blur',validarprecio);
document.getElementById('txtprecio').addEventListener('focus',validarprecio1);
///////validar clave
export function validarprecio(){
    let idc=document.getElementById('txtprecio').value;
    let caja=document.getElementById('txtprecio')
    let expresion=/^([0-9])*$/
    if(!expresion.test(idc)){
        let mensaje=document.getElementById('precio')
        mensaje.innerHTML='<span id="clv" class="msgIncorrecto"> datos incorrectos, solo se aceptan numero</span></br>'
        caja.className="cajaError"
        return false
    }
    else
    return true
}
function validarprecio1(){
    let idc=document.getElementById('txtprecio').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtprecio')
        caja.className="cajaBien"
    }
}




document.getElementById('txtcanti').addEventListener('blur',validarcanti);
document.getElementById('txtcanti').addEventListener('focus',validarcanti1);
///////validar clave
export function validarcanti(){
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
function validarcanti1(){
    let idc=document.getElementById('txtcanti').value;   
    console.log("clave", idc)
    if(idc.length>0){
        if(document.getElementById('clv'))
        document.getElementById('clv').remove()
        let caja=document.getElementById('txtcanti')
        caja.className="cajaBien"
    }
}