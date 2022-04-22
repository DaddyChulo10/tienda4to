<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      consulta

    </h1>
  </section>

  <!-- Main content -->
  <section class="content">

    <!-- Default box -->
    <div class="box">
      <div class="box-header with-border">
        <h3 class="box-title">Pagina Principal</h3>



      </div>
      <div class="box-body">
        <!-- <button id="Btnconsulta">consulta</button>-->

        <!-- Boton para Login-->

        <br>
        <br>
        <br>



        <div id="datosCar1"></div>

        <table id="lista" border="2" class="egt" width="100">
          <thead>
            <tr>
              <th>Fotos </th>
              <th>ID </th>
              <th>Nombre</th>
              <th>Marca</th>
              <th>Costo</th>
              <th>Precio</th>
              <th>Cantidad Adquirida</th>
              <th>Estatus</th>
              <th>Sistema Operativo</th>
              <th>Vel. Procesador</th>
              <th>Resolucion Pantalla</th>
              <th>Tipo de bateria</th>
              <th>Codec audio</th>
              <th>CPU</th>
              <th>Memoria interna</th>
              <th>Memoria RAM</th>
              <th>Conexion</th>
              <th>Fecha</th>
              <th>Funciones</th>
            </tr>
          <tbody id="tablaPila1"></tbody>
          </thead>
        </table>


      </div>
      <!-- /.box-body -->





      <!-- /.box-footer-->
    </div>
    <!-- /.box -->
    <script src="vistas/js/consultas.js" type="module"></script>
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

          <label for="exampleInputEmail1">Marca</label>
          <input type="text" class="form-control" id="txtmarca">

          <label for="exampleInputEmail1">Costo</label>
          <input type="text" class="form-control" id="txtcosto">

          <label for="exampleInputEmail1">Cantidad Adquirida</label>
          <input type="text" class="form-control" id="txtcantidad">

          <label for="exampleInputEmail1">Estatus</label>
          <input type="text" class="form-control" id="txtestatus">

          <label for="exampleInputEmail1">Sistema Operativo</label>
          <input type="text" class="form-control" id="txtsistema">

          <label for="exampleInputEmail1">Velocidad del Procesador</label>
          <input type="text" class="form-control" id="txtprocesador">

          <label for="exampleInputEmail1">Resolución de pantalla</label>
          <input type="text" class="form-control" id="txtpantalla">

          <label for="exampleInputEmail1">Tipo de Bateria</label>
          <input type="text" class="form-control" id="txtbateria">

          <label for="exampleInputEmail1">Codec de audio</label>
          <input type="text" class="form-control" id="txtaudio">

          <label for="exampleInputEmail1">CPU</label>
          <input type="text" class="form-control" id="txtcpu">

          <label for="exampleInputEmail1">Memoria Interna</label>
          <input type="text" class="form-control" id="txtmemoria">

          <label for="exampleInputEmail1">Memoria RAM</label>
          <input type="text" class="form-control" id="txtram">

          <label for="exampleInputEmail1">Conexion</label>
          <input type="text" class="form-control" id="txtconexion">

          <label for="exampleInputEmail1">Fecha</label>
          <input type="text" class="form-control" id="txtfecha">









        </div>
        <button type="submit" class="btn btn-primary" id="btncate">Guardar Cambios</button>
        <script src="./vistas/js/editProductos.js" type="module"></script>
      </form>
    </div>
  </div>
</div>