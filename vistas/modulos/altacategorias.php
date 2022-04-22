<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Alta de Categorias
    </h1>

  </section>

  <!-- Main content -->
  <section class="content">

    <!-- Default box -->
    <div class="box">

      <form id="frmProd" action="#">

        <label for="id">Clave del Celular</label>
        <input type="text" id="txtclave" placeholder="Number">
        <span id="id"> </span>
        <br>


        <label for="id">Nombre del Celular</label>
        <input type="text" id="txtnombre" placeholder="Letters">
        <span id="nom"> </span>
        <br>

        <label for="id">Cantidad</label>
        <input type="text" id="txtcanti" placeholder="Letters">
        <span id="canti"> </span>
        <br>

        <label for="id">Modelos</label>
        <input type="text" id="txtmodelo" placeholder="Letters">
        <span id="nom"> </span>
        <br>

        <label for="id">Sistema Operativos</label>
        <select id="txtsistema">
          <option disabled="disabled">Selecciona una opción</option>
          <option>iOS</option>
          <option>Android</option>
        </select>
        <br>


        <button id="Btnagregar">Agregar</button>
        <script src="vistas/js/funcin_cate.js" type="module"></script>
        <script src="vistas/js/validar_cate.js" type="module"></script>
      </form>
    </div>
    <!-- /.box -->

  </section>
  <!-- /.content -->
</div>