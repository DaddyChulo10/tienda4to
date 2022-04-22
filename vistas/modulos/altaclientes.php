<div class="content-wrapper">
    <section class="content-header">
        <h1>
            Alta de proveedores
        </h1>

    </section>

    <section class="content">

        <div class="box">

            <form id="frmProd" action="#">

                <label for="id">Clave del cliente</label>
                <input type="text" id="txtclave" placeholder="Number">
                <span id="id"> </span>
                <br>

                <label for="id">Nombre del cliente</label>
                <input type="text" id="txtcliente" placeholder="Letters">
                <span id="nom"> </span>
                <br>

                <label for="id">Codigo Postal</label>
                <input type="text" id="txtcp" placeholder="Letters">
                <span id="cp"> </span>
                <br>

                <label for="id">Colonia</label>
                <input type="text" id="txtcolonia" placeholder="Letters">
                <span id="col"> </span>
                <br>

                <label for="id">Calle</label>
                <input type="text" id="txtcalle" placeholder="Letters">
                <span id="call"> </span>
                <br>

                <label for="id">Numero de la Casa</label>
                <input type="text" id="txtcasa" placeholder="Letters">
                <span id="cas"> </span>
                <br>

                <label for="id">Telefono</label>
                <input type="text" id="txttel" placeholder="Letters">
                <span id="tel"> </span>
                <br>

                <label for="id">Correo</label>
                <input type="email" id="textcorre" placeholder="Letters" required>
                <br>

                <label for="id">Edad</label>
                <input type="text" id="txtedad" placeholder="Letters">
                <span id="edad"> </span>
                <br>

                <label for="id">Sexo</label>
                <select id="txtsex">
                    <option disabled="disabled">Selecciona una opción</option>
                    <option>Mujer</option>
                    <option>Hombre</option>
                    <option>Indefinido</option>
                    <option>Otro</option>
                </select>
                <br>

                <button id="Btnagregar">Agregar</button>
                <script src="vistas/js/funci_clien.js" type="module"></script>
                <script src="vistas/js/validar_cliente.js" type="module"></script>
            </form>
        </div>
    </section>
</div>