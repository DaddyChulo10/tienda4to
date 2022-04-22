<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <section class="content-header">
    <h1>
      Alta de Productos
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

        <label for="id">Marca del Celular</label>
        <select id="txtmarca">
          <option disabled="disabled">Selecciona una opción</option>
          <option>Apple</option>
          <option>Samsung</option>
          <option>LG</option>
          <option>Huawei</option>
        </select>
        <br>

        <label for="id">Costo del celular</label>
        <input type="text" id="txtcosto" placeholder="Number">
        <span id="num"> </span>
        <br>

        <!--Nuevo-->
        <label for="id">Cantidad Adquirida</label>
        <input type="text" id="txtcantidad" placeholder="Number">
        <span id="can"> </span>
        <br>

        <label for="id">Estatus</label>
        <select id="sltes">
          <option disabled="disabled">Selecciona una opción</option>
          <option>Vigente</option>
          <option>Descontinuado</option>
        </select>
        <br>

        <label for="id">Sistema operativo</label>
        <select id="sltso">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>Ios</option>
          <option>Android</option>
        </select>
        <br>

        <label for="id">Velocidad del procesador</label>
        
        <select id="txtpro">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>Snapdragon 625</option>
          <option>HiSilicon Kirin 620</option>
          <option>Octacore Exynos 7880</option>          
        </select>
        <br>


        <label for="id">Resolución de pantalla (mp)</label>
        <select id="txtrep">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>Resolucion HD (720P)</option>
          <option>Resolucion XGA</option>
          <option>Resolucion HD (1080P)</option>          
        </select>
        <br>

        <label for="id">Tipo de bateria</label>
        <select id="txtbateria">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>Niquel-Cadmio (NiCd)</option>
          <option>iones de Litio</option>
          <option>Niquel-Metal Hidruro (NiMH)</option>
          
        </select>
        <br>

        <label for="id">Memoria interna</label>
        <select id="sltmemoria">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>16 GB</option>
          <option>32 GB</option>
          <option>64 GB</option>
          <option>128 GB</option>
          <option>256 GB</option>
        </select>
        <br>

        <label for="id">Còdec de audio</label>
        <select id="txtaudio">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>mp3</option>
          <option>mov</option>
          <option>avi</option>
          <option>mkv</option>       
        </select>


        <br>

        <label for="id">CPU</label>
        <select id="txtcpu">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>Exynos 7420 Octa</option>
          <option>Intel Atom Z3580</option>
          <option>Nvidia Tegra X1</option>
        </select>

        <br>

        <label for="id">Memoria Ram </label>
        <select id="txtram">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>16 GB</option>
          <option>32 GB</option>
          <option>64 GB</option>
          <option>128 GB</option>
          <option>256 GB</option>
        </select>
        <br>

        <label for="id">Conexiones</label>
        <select id="sltcon">
          <option disabled="disabled">Seleccione una opcion</option>
          <option>WIFI</option>
          <option>Bluetoohth</option>
          <option>USB</option>
          <option>GPS</option>
        </select>
        <br>

        <!-- Fin del Nuevo-->
        <label for="id">fecha</label>
        <input type="date" id="txtfecha">
        <br>
        <label for="id">foto</label>
        <input type="file" name="btnimg" id="btnimg">
        <div id="nombreimagenarticulo"></div>
        <label id="lblimg"></label>
        <br>
        <button id="Btnagregar">Agregar</button>
        <script src="vistas/js/funcionesProd.js" type="module"></script>
        <script src="vistas/js/validar.js" type="module"></script>
      </form>
    </div>
    <!-- /.box -->

  </section>
  <!-- /.content -->
</div>