import '../styles/RegistroProductos.css'

function RegistroProductos(){
    return(   
    
    <body className="body1">
           
            <div className="cuerpo">
                <form>
                    <h2>Registro productos</h2>
                    <div className="id">
                        <label for="so">ID producto:</label> <br />
                        <input type="text" placeholder="ID producto" />
                    </div>
                    <div className="descripcion">
                        <label for="so">Descripción producto:</label> <br />
                        <input type="text" placeholder="Escriba descripción" />
                    </div>
                    <div className="precio">
                        <label for="so">Precio producto:</label> <br />
                        <input type="number" placeholder="Escriba el precio" value="Precio" min="0" max="any" />
                    </div>
                    <div className="estado">
                        <label for="so">Estado:</label> <br />
                        <select id="so" name="so">
                            <option value="" selected="selected" class="sel">- Seleccione -</option>
                            <option value="especialidad 1">Disponible</option>
                            <option value="especialidad 2">No disponible</option>
                        </select>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <button className ="button1" type="button" class="btn btn-primary" onclick="Registrar()" id="registrar">Registrar producto</button>
                        </div>
                        <div className="col-md-6">
                            <button className ="button1"  type="button" class="btn btn-primary" onclick="salir()" id="salirr">Salir</button>
                        </div>
                    </div>
                </form>
            </div>
        </body>

);
}
export default RegistroProductos;