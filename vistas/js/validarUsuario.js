
document.querySelector('#btnlogin').addEventListener('click', crearSesion)

function crearSesion(e) {
    e.preventDefault();
    let ban = false

    let correo = document.querySelector('#txtusuario').value,
        pass = document.querySelector('#txtContra').value
    console.log(correo)
    console.log(pass)
    
    let listaU=JSON.parse(localStorage.getItem('listausuarios'))
    listaU.forEach(function (usu) {
        if (usu.usuario == correo && usu.contaseña == pass) {
            sessionStorage.setItem('sesionUsu', JSON.stringify(usu))
            ban = true
        }
    })
    if (!ban) {
        swal("Usuario o Contraseña", "INCORRECTOS!", "error");
    } else { //alert("bien") ban=false
        swal("Bienvenido!", "Has iniciado sesion!", "success");
        setTimeout(function () {
            window.location.href = 'index.php'
        }, 2000);
    }
}