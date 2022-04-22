<header class="main-header">
  <!-- Logo -->
  <a href="index.php" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-mini"><b>S</b>PH</span>
    <!-- logo for regular state and mobile devices -->
    <span class="logo-lg"><b>Shop</b>Phone</span>
  </a>
  <!-- Header Navbar: style can be found in header.less -->
  <nav class="navbar navbar-static-top">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </a>

    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">

        <!-- Boton para Login-->
        <li class="elemento">
          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ventalogin">Iniciar Sesion</button>
        </li>

        <!--Boton para registrar-->
        <li class="elemento">


          <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#ventaregistro">Registrar</button>
        </li>


        <!--Carrito 30/10/2019-->
        <li>
          <a href="index.php?ruta=elCarrito">Carrito</a>
        </li>



      </ul>
    </div>
  </nav>
</header>

<!--_________________________Iniciar sesion____________________________-->


<div class="modal fade bd-example-modal-lg" id="ventalogin" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Usuario</label>
          <input type="text" class="form-control" id="txtusuario" aria-describedby="emailHelp" placeholder="Usuario">
          <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Contraseña</label>
          <input type="password" class="form-control" id="txtContra" placeholder="Contraseña">
        </div>
        <!--
        <div class="form-group">
          <label for="exampleInputEmail1">Rol</label>
          <input type="text" class="form-control" id="txtrol" aria-describedby="emailHelp" placeholder="Administrador o Usiario">
          <small id="emailHelp" class="form-text text-muted">Cliente o Administrador</small>
        </div>-->
        <button type="submit" class="btn btn-primary" id="btnlogin">Iniciar Sesion</button>
        <script src="./vistas/js/validarUsuario.js" type="module"></script>
      </form>

    </div>
  </div>
</div>


<!---- --->

<div class="modal fade bd-example-modal-lg" id="ventaregistro" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">Nuev Usuario</label>
          <input type="text" class="form-control" id="txtnewusu" aria-describedby="emailHelp" placeholder="Usuario">
          <!-- <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>-->
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Nueva Contraseña</label>
          <input type="password" class="form-control" id="txtnewpass" placeholder="Contraseña">
        </div>
        <!--
        <div class="form-group">
          <label for="exampleInputEmail1">Rol</label>
          <input type="text" class="form-control" id="txtrol" aria-describedby="emailHelp" placeholder="Administrador o Usiario">
          <small id="emailHelp" class="form-text text-muted">Cliente o Administrador</small>
        </div>-->
        <button type="submit" class="btn btn-primary" id="btnregi">Registrar Usuario</button>
        <script src="./vistas/js/registrousu.js" type="module"></script>
      </form>
    </div>
  </div>
</div>