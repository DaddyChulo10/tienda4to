<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Tienda Celulares</title>
  <!-- Tell the browser to be responsive to screen width -->
  <meta content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" name="viewport">
  <link rel="icon" href="vistas/img/manzana.png">
  <!-- Bootstrap 3.3.7 -->
  <link rel="stylesheet" href="vistas/bower_components/bootstrap/dist/css/bootstrap.min.css">
  <!-- Font Awesome -->
  <link rel="stylesheet" href="vistas/bower_components/font-awesome/css/font-awesome.min.css">
  <!-- Ionicons -->
  <link rel="stylesheet" href="vistas/bower_components/Ionicons/css/ionicons.min.css">
  <!-- Theme style -->
  <link rel="stylesheet" href="vistas/dist/css/AdminLTE.css">
  <!-- AdminLTE Skins. Choose a skin from the css/skins
       folder instead of downloading all of them to reduce the load. -->
  <link rel="stylesheet" href="vistas/dist/css/skins/_all-skins.min.css">
  <!-- jQuery -->  
 <link rel="stylesheet" href="vistas/plugins/sweetalert.css">
 <link rel="stylesheet" href="vistas/dist/css/miHoja.css">
 <script src="vistas/plugins/sweetalert.min.js"></script>
<script src="vistas/bower_components/jquery/dist/jquery.min.js"></script>
<!-- Bootstrap 3.3.7 -->
<script src="vistas/bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
<!-- SlimScroll -->
<script src="vistas/bower_components/jquery-slimscroll/jquery.slimscroll.min.js"></script>
<!-- FastClick -->
<script src="vistas/bower_components/fastclick/lib/fastclick.js"></script>
<!-- AdminLTE App -->
<script src="vistas/dist/js/adminlte.min.js"></script>
<!-- AdminLTE for demo purposes -->
<!--<script src="vistas/dist/js/demo.js"></script> -->
<script src="vistas/js/plantilla.js"> </script>


<!-- DataTables -->
<link rel="stylesheet" href="vistas/bower_components/datatables.net-bs/css/dataTables.bootstrap.min.css">

<!-- DataTables -->
<script src="vistas/bower_components/datatables.net/js/jquery.dataTables.min.js"></script>
<script src="vistas/bower_components/datatables.net-bs/js/dataTables.bootstrap.min.js"></script>



  <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
  <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
  <![endif]-->

  <!-- Google Font -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700,300italic,400italic,600italic">
</head>
<body class="hold-transition skin-blue sidebar-collapse sidebar-mini">
<?php
include "modulos/cabecera.php";
include "modulos/menu.php";
if(isset($_GET["ruta"]))
{
  if($_GET["ruta"]=="usuarios" || $_GET["ruta"]=="productos" ||  $_GET["ruta"]=="altaclientes" ||  $_GET["ruta"]=="cliente_consulta"
  || $_GET["ruta"]=="altacategorias" || $_GET["ruta"]=="consul_ca" || $_GET["ruta"]=="consul_pro" || $_GET["ruta"]=="altaproveedor"
  || $_GET["ruta"]=="elCarrito" || $_GET["ruta"]=="marca"|| $_GET["ruta"]=="altaPro"|| $_GET["ruta"]=="consulta")
  {
    include "modulos/".$_GET["ruta"].".php";
  } else {
    include "modulos/404.php";
  }
}
else 
{
  include "modulos/inicio.php";
}


?>

</body>
</html>
