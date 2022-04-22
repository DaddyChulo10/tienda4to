<div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
        <h1>
            Alta de proveedores
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


                <label for="id">Nombre del Proveedor</label>
                <input type="text" id="txtprove" placeholder="Letters">
                <span id="nom"> </span>
                <br>

                <label for="id">Nombre de la Empresa</label>
                <select id="txtempresa">
                    <option disabled="disabled">Selecciona una opción</option>
                    <option>AT&T</option>
                    <option>Movistar</option>
                    <option>Telcel</option>
                    <option>UNEFON</option>
                </select>
                <br>

                <label for="id">Precio</label>
                <input type="text" id="txtprecio" placeholder="Number">
                <span id="precio"> </span>
                <br>

                <label for="id">Forma de Pago</label>
                <select id="txtfpago">
                    <option disabled="disabled">Selecciona una opción</option>
                    <option>Transferencia bancaria</option>
                    <option>Depositos</option>
                    <option>Cheques</option>
                    <option>PayPal</option>
                </select>
                <br>

                <label for="id">Cantidad</label>
                <input type="text" id="txtcanti" placeholder="Letters">
                <span id="canti"> </span>
                <br>

                <label for="id">Garantia</label>
                <select id="txtpago">
                    <option disabled="disabled">Selecciona una opción</option>
                    <option>1 Año</option>
                    <option>3 Años</option>
                    <option>5 Años</option>
                    <option>9 Años</option>
                    <option>12 Años</option>
                    <option>15 Años</option>
                </select>
                <br>




                <button id="Btnagregar">Agregar</button>
                <script src="vistas/js/funci_provee.js" type="module"></script>
                <script src="vistas/js/validar_prove.js" type="module"></script>
            </form>
        </div>
        <!-- /.box -->

    </section>
    <!-- /.content -->
</div>