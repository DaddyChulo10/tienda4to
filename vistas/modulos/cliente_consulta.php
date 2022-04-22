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



        <br>
        <br>



        <div id="datosCar4"></div>

        <table id="lista" border="2" class="egt" width="100">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Codigo Postal</th>
              <th>Colonia</th>
              <th>Calle</th>
              <th>Numero de casa</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Sexo</th>
              <th>Funciones</th>
            </tr>
          <tbody id="tablaPila4"></tbody>
          </thead>
        </table>

        


      </div>
      <!-- /.box-body -->

      <!-- /.box-footer-->
    </div>
    <!-- /.box -->
    <script src="vistas/js/clien_consulta.js" type="module"></script>
  </section>
  <!-- /.content -->
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

          <label for="exampleInputEmail1">Codigo Postal</label>
          <input type="text" class="form-control" id="txtcp">

          <label for="exampleInputEmail1">Colonia</label>
          <input type="text" class="form-control" id="txtcolonia">

          <label for="exampleInputEmail1">Calle</label>
          <input type="text" class="form-control" id="txtcalle">

          <label for="exampleInputEmail1">Numero de casa</label>
          <input type="text" class="form-control" id="txtcasa">

          <label for="exampleInputEmail1">Telefono</label>
          <input type="text" class="form-control" id="txttelefono">

          <label for="exampleInputEmail1">Correo</label>
          <input type="text" class="form-control" id="txtcorreo">

          <label for="exampleInputEmail1">Edad</label>
          <input type="text" class="form-control" id="txtedad">

          <label for="exampleInputEmail1">Sexo</label>
          <input type="text" class="form-control" id="txtsexo">


        </div>
        <button type="submit" class="btn btn-primary" id="btncate">Guardar Cambios</button>
        <script src="./vistas/js/editClientes.js" type="module"></script>
      </form>
    </div>
  </div>
</div>