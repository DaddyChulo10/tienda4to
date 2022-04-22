<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Consulta de Categorias

    </h1>
  </section>

  <!-- Main content -->
  <section class="content">

    <!-- Default box -->
    <div class="box">
      <div class="box-header with-border">
        <h3 class="box-title">Pagina Principal Bienvenidos</h3>



      </div>
      <div class="box-body">
        <!-- <button id="Btnconsulta">consulta</button>-->

        <!-- 


//CATEGORIA
//id,nombre,marca,modelo,sistema op,
        -->


        <br>
        <br>



        <div id="datosCar2"></div>

        <table id="lista" border="2" class="egt" width="100">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Cantidad</th>
              <th>Modelos</th>
              <th>Sistema Operativo</th>
              <th>Funciones</th>
            </tr>
          <tbody id="tablaPila2"></tbody>
          </thead>
        </table>




      </div>
      <!-- /.box-body -->

      <!-- /.box-footer-->
    </div>
    <!-- /.box -->
    <script src="vistas/js/catego_consul.js" type="module"></script>
  </section>

</div>


<!--------------------------FORMULARIO -->
<div class="modal fade bd-example-modal-lg" id="modalcate" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <form id="frmEditProd" method="#" >
        <div class="form-group">

          <label for="exampleInputEmail1">ID</label>
          <input type="text" class="form-control" id="txtid">

          <label for="exampleInputEmail1">Nombre</label>
          <input type="text" class="form-control" id="txtnombre">

          <label for="exampleInputEmail1">Cantidad</label>
          <input type="text" class="form-control" id="txtcantidad">

          <label for="exampleInputEmail1">Modelos</label>
          <input type="text" class="form-control" id="txtmodelos">

          <label for="exampleInputEmail1">Sistema Operativo</label>
          <input type="text" class="form-control" id="txtsistema">


        </div>
        <button type="submit" class="btn btn-primary" id="btncate">Guardar Cambios</button>
        <script src="./vistas/js/editCategorias.js" type="module"></script>
      </form>
    </div>
  </div>
</div>