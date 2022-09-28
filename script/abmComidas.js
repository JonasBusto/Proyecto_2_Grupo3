// Declaración de las variables necesarias para realizar el ABM comidas
const inputNuevoNombre = document.getElementById("input-nuevo-nombre");
const textareaNuevaDesc = document.getElementById("textarea-nueva-desc");
const selectNuevoCat = document.getElementById("select-nuevo-cat");
const inputNuevoPrecio = document.getElementById("input-nuevo-precio");
const inputNuevaImgUrl = document.getElementById("input-nueva-img-url");
const btnGuardar = document.getElementById("btn-guardar");
const tBodyInyectar = document.getElementById("tbody-inyectar");
const inputBuscar = document.getElementById("input-buscar");
const divAlertaDestacadoRepetido = document.getElementById("div-alerta-destacado");
const limiteCaracteres = document.getElementById("limite-caracteres-desc");
const divAlertaCaracteres = document.getElementById("alerta-limite-superado");

// Defino una clase del tipo Comida para simplificar la declaración de objetos del tipo Comida
class Comida {
    constructor(id, nombre, desc, cat, precio, url, destacado) {
        this.id = id;
        this.nombre = nombre;
        this.descripcion = desc;
        this.categoria = cat;
        this.precio = precio;
        this.url = url;
        this.destacado = destacado;
    }
}

// Cargo comidas en el localStorage
if (JSON.parse(localStorage.getItem("Comidas")) === null) {
    let arrayComidasInicial = [];
    arrayComidasInicial.push(new Comida(0, "pizza", "desc1", "pizza", "190", "url", true));
    localStorage.setItem("Comidas", JSON.stringify(arrayComidasInicial));
}

// arrayComidasAux --> Contendra siempre lo del localStorage
let arrayComidasAux = JSON.parse(localStorage.getItem("Comidas")) || [];

// arrayComidas --> Solo contendra el/los elemento/s que busque, es un array de apoyo unicamente
let arrayComidas = arrayComidasAux;


// Funcion auxiliar que utilizo para verificar la existencia de una comida en el localStorage
function funcionVerificarExistenciaAUX(index) {
    let encontrado = false;
    let encontradoIndex = 0;

    for (let i = 0; i < arrayComidasAux.length; i++) {
        if (arrayComidasAux[i].id === index) {
            encontradoIndex = i;
            encontrado = true;
            i = arrayComidasAux.length;
        } else {
            encontrado = false;
        }
    }

    return [encontrado, encontradoIndex];
}

// Funcion que elimina la comida en función del id de la misma, que se recibe por parametros
function eliminarComida(index) {
    arrayComidas = JSON.parse(localStorage.getItem("Comidas")).filter(comida => comida.id !== index);
    localStorage.setItem("Comidas", JSON.stringify(arrayComidas));
    location.reload();
}

// Funcion que modifica la comida en función del id de la misma, que se recibe por parametros
function modificarComida(index) {
    const inputModificadoNombre = document.getElementById("input-modificado-nombre" + index);
    const inputNuevoPrecio = document.getElementById("input-nuevo-precio" + index);
    const nuevaDesc = document.getElementById("textarea-nueva-descripcion" + index);
    const alerta = document.getElementById("inyectar-alerta" + index);

    let encontrado = funcionVerificarExistenciaAUX(index)[0];
    let encontradoIndex = funcionVerificarExistenciaAUX(index)[1];

    if (encontrado) {
        if (inputModificadoNombre.value.trim() === "" || inputNuevoPrecio.value.trim() === "" || nuevaDesc.value.trim() === "" || nuevaDesc.value.length > 100) {
            alerta.innerHTML = `
            <h6 class="text-danger">*VERIFIQUE LOS DATOS QUE INGRESA*</h6>
            `
            setTimeout(() => {
                alerta.innerHTML = "";
            }, 1500);
        } else {
            arrayComidasAux[encontradoIndex].nombre = inputModificadoNombre.value;
            arrayComidasAux[encontradoIndex].precio = inputNuevoPrecio.value;
            arrayComidasAux[encontradoIndex].descripcion = nuevaDesc.value;
            localStorage.setItem("Comidas", JSON.stringify(arrayComidasAux));
            location.reload();
        }
    }
}

function destacarComida(index) {
    // La variable booleana sirve para mostrar unicamente un mensaje si al hacer click sobre la comida
    // destacada, intentamos volverla a destacar
    let auxBoolMensajeDestacado = false;

    // Recorro en un "for" activando el destacado a una comida y quitandole a la anterior
    for (let i = 0; i < arrayComidasAux.length; i++) {
        if (arrayComidasAux[i].id === index) {
            if (arrayComidasAux[i].destacado === true) {

                // Esto me sirve de forma que si hago click en el elemento ya destacado, detenga el "for" 
                // y active la variable booleana para mostrar el mensaje de que la comida ya esta destacad y no
                // recargue la pagina
                auxBoolMensajeDestacado = true;
                i = arrayComidasAux.length
            } else {
                arrayComidasAux[i].destacado = true;
            }
        } else {
            arrayComidasAux[i].destacado = false;
        }
    }

    // Muestre un alerta y añado un setTimeOut para quitar dicha alerta la cabo de 1.5 seg.
    if (auxBoolMensajeDestacado) {
        divAlertaDestacadoRepetido.innerHTML = `
                <h6 class="m-0">COMIDA YA DESTACADA!!</h6>
                 `
        setTimeout(() => {
            divAlertaDestacadoRepetido.innerHTML = "";
        }, 1500);
    } else {
        localStorage.setItem("Comidas", JSON.stringify(arrayComidasAux));
        location.reload();
    }

}

// Función que modifica la URL de la Imagen verificando si la input asociada a la URL no esta vacia
// Caso contrario, muestra un alerta inyectada en el modal de modificar Imagen
const modificarIMGurl = (index) => {
    const inputModificarUrl = document.getElementById("input-modificar-url" + index);
    const alerta = document.getElementById("inyectar-alerta-url" + index);
    let encontrado = funcionVerificarExistenciaAUX(index)[0];
    let encontradoIndex = funcionVerificarExistenciaAUX(index)[1];

    if (encontrado) {
        if (inputModificarUrl.value.trim() === "") {
            alerta.innerHTML = `
            <h6 class="text-danger">*CAMPO "Nueva URL" VACIO*</h6>
            `
            setTimeout(() => {
                alerta.innerHTML = "";
            }, 1500);
        } else {
            arrayComidasAux[encontradoIndex].url = inputModificarUrl.value;
            localStorage.setItem("Comidas", JSON.stringify(arrayComidasAux));
            location.reload();
        }
    }

}

// Función que actualiza la tabla de comidas imprimiendolas en pantalla
const actualizarPagina = () => {
    tBodyInyectar.innerHTML = "";
    for (let i = 0; i < arrayComidas.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row" class="text-center pt-3">${arrayComidas[i].id}</th>
        <td class="text-center pt-3">${arrayComidas[i].nombre}</td>
        <td class="text-center pt-3">${arrayComidas[i].precio}$</td>
        <td class="text-center pt-3">${arrayComidas[i].categoria}</td>
        <td>
            <div>
                <div class="w-100 d-flex justify-content-center">
                    <a class="mx-auto anchor-btn-ver" data-bs-toggle="modal" data-bs-target="#modalVerDesc${arrayComidas[i].id}">VER MAS</a>
                </div>

                <div class="modal fade" data-bs-backdrop="static" id="modalVerDesc${arrayComidas[i].id}"
                    tabindex="-1" aria-labelledby="modalVerDesc${arrayComidas[i].id}Label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalVerDesc${arrayComidas[i].id}Label">Descripción</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h5>Comida #${arrayComidas[i].id}: ${arrayComidas[i].nombre}</h5>
                                <div class="d-flex flex-column align-items-center">

                                    <p>${arrayComidas[i].descripcion}</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <div class="d-flex justify-content-center">
                                    <button type="button" class="btn mx-4"
                                        data-bs-dismiss="modal">Cerrar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td>
            <div>
                <!-- MODAL VER IMAGENES -->
                <div class="w-100 d-flex justify-content-center">
                    <a data-bs-toggle="modal" data-bs-target="#modalVerImagenes${arrayComidas[i].id}"
                    class="text-decoration-none anchor-btn-ver">VER</a>
                </div>
                
                <div class="modal fade" data-bs-backdrop="static" id="modalVerImagenes${arrayComidas[i].id}"
                    tabindex="-1" aria-labelledby="modalVerImagenes${arrayComidas[i].id}Label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalVerImagenes${arrayComidas[i].id}Label">Imagenes (Comida: ${arrayComidas[i].nombre} - #${arrayComidas[i].id})
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex flex-column align-items-center">
                                <div class="d-flex flex-column w-100">
                                    <div class="d-flex flex-column container-fluid">
                                        <div class="row m-0">
                                            <div class="col-12 d-flex flex-column">
                                                <p class="mx-4">Imagen principal: </p>
                                                <img class="img-fluid"
                                                    src="${arrayComidas[i].url}"
                                                    alt="img_comida.png">
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <button class="btn mx-4" data-bs-dismiss="modal">Cerrar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </td>
        <td class="div-btn-destacado">
            <div class="d-flex my-2 justify-content-center">
                <a><i class="fa-solid fa-star ${arrayComidas[i].destacado ? "text-warning" : "color-icono"}" id="btn-destacado${arrayComidas[i].id}"></i></a>
            </div>
        </td>
        <td class="td-col-opciones-comida py-3">
            <!-- MODAL ELIMINAR COMIDA -->
            <div>
                <a><i class="fa-solid fa-trash color-icono ${arrayComidas[i].destacado ? "btn-eliminar-desactivado" : ""}" data-bs-toggle="modal"
                        data-bs-target="#modalEliminarComida${arrayComidas[i].id}"></i></a>

                <div class="modal fade" data-bs-backdrop="static" id="modalEliminarComida${arrayComidas[i].id}"
                    tabindex="-1" aria-labelledby="modalEliminarComida${arrayComidas[i].id}Label"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalEliminarComida${arrayComidas[i].id}Label">Eliminar
                                    comida</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div
                                class="modal-body container d-flex flex-column align-items-center">
                                <p class="fw-bold">¿Esta seguro de eliminar la comida "${arrayComidas[i].nombre}"?
                                </p>
                                <div class="d-flex justify-content-center">
                                    <button type="button" class="btn mx-4"
                                        data-bs-dismiss="modal">Cancelar</button>
                                    <button type="button" class="mx-4 btn" id="btnEliminar${arrayComidas[i].id}">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MODAL MODIFICAR COMIDA -->
            <div>
                <a><i class="fa-solid fa-pen-to-square color-icono" data-bs-toggle="modal"
                        data-bs-target="#modalModificarComida${arrayComidas[i].id}"></i></a>

                <div class="modal fade" data-bs-backdrop="static" id="modalModificarComida${arrayComidas[i].id}"
                    tabindex="-1" aria-labelledby="modalModificarComida${arrayComidas[i].id}Label"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalModificarComida${arrayComidas[i].id}Label">
                                    Modificar comida</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex flex-column">
                                <p class="fw-bold">Comida #${arrayComidas[i].id}
                                </p>
                                <div class="d-flex flex-column">
                                    <div class="mb-3">
                                        <label class="form-label">Nombre</label>
                                        <input type="text" class="form-control" id="input-modificado-nombre${arrayComidas[i].id}"
                                            value="${arrayComidas[i].nombre}">
                                    </div>
                                    <div class="d-flex flex-column mb-3">
                                        <label class="form-label">Categoria</label>
                                        <select id="select-modificar-comida${arrayComidas[i].id}" class="form-select"
                                            aria-label="Default select example">
                                            <option selected>${arrayComidas[i].categoria} (Actual)</option>
                                            <option value="Pizza">Pizza</option>
                                            <option value="Postre">Postre</option>
                                            <option value="Plato_especial">Plato especial</option>
                                            <option value="Pastas">Pastas</option>
                                        </select>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Precio ($)</label>
                                        <input type="text" class="form-control"
                                            value="${arrayComidas[i].precio}" id="input-nuevo-precio${arrayComidas[i].id}">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Imagenes</label>
                                        <div>
                                            <!-- MODAL MODIFICAR IMAGENES -->
                                            <button data-bs-toggle="modal"
                                                data-bs-target="#modalModificarImagenes${arrayComidas[i].id}"
                                                class="btn">Modificar Imagen</button>


                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Descripción</label>

                                        <div class="d-flex flex-column">
                                            <textarea class="form-control"
                                            id="textarea-nueva-descripcion${arrayComidas[i].id}"
                                            rows="3">${arrayComidas[i].descripcion}</textarea>
                                            <div class="d-flex justify-content-between div-limite-caracteres">
                                                <h6 class="text-danger" id="alerta-limite-superado-nuevo${arrayComidas[i].id}"></h6>
                                                <h6 id="limite-caracteres-desc-nuevo${arrayComidas[i].id}"></h6>
                                            </div>
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex flex-column">
                                <div id="inyectar-alerta${arrayComidas[i].id}">
                                    
                                </div>
                                <div class="d-flex justify-content-between w-100">
                                    <button class="btn mx-4"
                                    data-bs-dismiss="modal">Cancelar</button>
                                    <button class="mx-4 btn" id="btn-guardar-cambios${arrayComidas[i].id}">Guardar
                                    Cambios</button>
                                    <p class="text-success d-none" id="mensaje-cambio${arrayComidas[i].id}">Cambios Realizados!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" data-bs-backdrop="static" id="modalModificarImagenes${arrayComidas[i].id}"
                    tabindex="-1" aria-labelledby="modalModificarImagenes${arrayComidas[i].id}Label"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalModificarImagenes${arrayComidas[i].id}Label">
                                    Modificar Imagen
                                </h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body d-flex flex-column align-items-center">
                                <div class="d-flex flex-column w-100">
                                    <div class="d-flex flex-column container-fluid">
                                        <div class="row m-0">
                                            <div class="col-12 d-flex flex-column">
                                                <p class="mx-4">
                                                    Imagen
                                                    principal: </p>
                                                <img class="img-fluid"
                                                    src="${arrayComidas[i].url}"
                                                    alt="img_principal.png">
                                                <div class="my-3">
                                                    <label class="form-label">Modificar imagen
                                                        principal</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="130.00" disabled
                                                        value="${arrayComidas[i].url}">
                                                        
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Nueva URL</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Ingrese la nueva URL" id="input-modificar-url${arrayComidas[i].id}">

                                                </div>
                                            </div>
                                            <div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex flex-column">
                                <div id="inyectar-alerta-url${arrayComidas[i].id}">
                                    
                                </div>
                                <div class="d-flex justify-content-between w-100">
                                    <button class="btn mx-4"
                                    data-bs-dismiss="modal">Cancelar</button>
                                    <button class="mx-4 btn" id="btn-modificar-img${arrayComidas[i].id}">Guardar
                                    Cambio</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </td>
        `
        tBodyInyectar.appendChild(tr);




        // DECLARO LAS VARIABLES PARA BOTONES E INPUTS PARA CADA ELEMENTO RECORRIDO DEL ARRAYCOMIDAS
        const textAreaModificar = document.getElementById("textarea-nueva-descripcion" + arrayComidas[i].id);
        const divAlertaLimiteNuevo = document.getElementById("alerta-limite-superado-nuevo" + arrayComidas[i].id)
        const divLimitesNuevo = document.getElementById("limite-caracteres-desc-nuevo" + arrayComidas[i].id)
        divLimitesNuevo.innerHTML = `
            ${textAreaModificar.value.length}/100`
        textAreaModificar.addEventListener("keyup", () => {
            if (textAreaModificar.value.length > 100) {
                console.log("apa");
                divAlertaLimiteNuevo.innerHTML = `
                Limite de caracteres superados!!
                `
                divLimitesNuevo.style.color = "red";
                divLimitesNuevo.innerHTML = `
                ${textAreaModificar.value.length}/100
                `
            } else if (textAreaModificar.value.length === 0) {
                // console.log(
                divAlertaLimiteNuevo.innerHTML = "";
                divLimitesNuevo.style.color = "black";
                divLimitesNuevo.innerHTML = `
                0/100
                `
            } else {
                console.log("tranca")
                divAlertaLimiteNuevo.innerHTML = "";
                divLimitesNuevo.style.color = "black";
                divLimitesNuevo.innerHTML = `
                ${textAreaModificar.value.length}/100
                `
            }
        })

        const btnEliminar = document.getElementById("btnEliminar" + arrayComidas[i].id);
        btnEliminar.addEventListener("click", () => eliminarComida(arrayComidas[i].id));

        const btnGuardar = document.getElementById("btn-guardar-cambios" + arrayComidas[i].id);
        btnGuardar.addEventListener("click", () => modificarComida(arrayComidas[i].id));

        const btnDestacado = document.getElementById("btn-destacado" + arrayComidas[i].id);
        btnDestacado.addEventListener("click", () => destacarComida(arrayComidas[i].id));

        const btnModificarIMG = document.getElementById("btn-modificar-img" + arrayComidas[i].id);
        btnModificarIMG.addEventListener("click", () => modificarIMGurl(arrayComidas[i].id));
    }
    arrayComidasAux = JSON.parse(localStorage.getItem("Comidas")) || [];
}

btnGuardar.disabled = true;
actualizarPagina();

// VERIFICA QUE LAS INPUTS ESTEN LLENAS
// "keyup" ES UN EVENTO COMO EL CLICK, QUE FUNCIONA CUANDO UNO PRESIONA UNA TECLA.
// EN ESTE CASO USE "keyup" PARA CONTROLAR LAS INPUTS CADA VEZ QUE PRESIONO UNA TECLA
// VERIFICO LAS INPUT UNA POR UNA

inputNuevoNombre.addEventListener("keyup", () => {
    if (inputNuevoNombre.value.trim() === "" || textareaNuevaDesc.value.trim() === "" || inputNuevoPrecio.value.trim() === "" || inputNuevaImgUrl.value.trim() === "") {
        btnGuardar.disabled = true;
    } else {
        btnGuardar.disabled = false;
    }
})
textareaNuevaDesc.addEventListener("keyup", () => {

    if (textareaNuevaDesc.value.length > 100) {
        divAlertaCaracteres.innerHTML = `
        Limite de caracteres superados!!
        `
        limiteCaracteres.style.color = "red";
        limiteCaracteres.innerHTML = `
        ${textareaNuevaDesc.value.length}/100
        `
        btnGuardar.disabled = true;
    } else if (textareaNuevaDesc.value.length === 0) {
        divAlertaCaracteres.innerHTML = "";
        limiteCaracteres.style.color = "black";
        limiteCaracteres.innerHTML = `
        0/100
        `
        btnGuardar.disabled = true;
    } else {
        divAlertaCaracteres.innerHTML = "";
        limiteCaracteres.style.color = "black";
        limiteCaracteres.innerHTML = `
        ${textareaNuevaDesc.value.length}/100
        `
        if (inputNuevoNombre.value.trim() === "" || inputNuevoPrecio.value.trim() === "" || inputNuevaImgUrl.value.trim() === "") {
            btnGuardar.disabled = true;
        } else {
            btnGuardar.disabled = false;
        }
    }
})
inputNuevoPrecio.addEventListener("keyup", () => {
    if (inputNuevoNombre.value.trim() === "" || textareaNuevaDesc.value.trim() === "" || inputNuevoPrecio.value.trim() === "" || inputNuevaImgUrl.value.trim() === "") {
        btnGuardar.disabled = true;
    } else {
        btnGuardar.disabled = false;
    }
})
inputNuevaImgUrl.addEventListener("keyup", () => {
    if (inputNuevoNombre.value.trim() === "" || textareaNuevaDesc.value.trim() === "" || inputNuevoPrecio.value.trim() === "" || inputNuevaImgUrl.value.trim() === "") {
        btnGuardar.disabled = true;
    } else {
        btnGuardar.disabled = false;
    }
})



// GUARDO EN LOCAL STORAGE
btnGuardar.addEventListener("click", () => {
    let contadorID;
    if (arrayComidasAux.length === 0) {
        contadorID = 0;
    } else {
        contadorID = arrayComidas[arrayComidasAux.length - 1].id + 1;
    }
    arrayComidasAux.push(new Comida(contadorID, inputNuevoNombre.value.trim(), textareaNuevaDesc.value.trim(), selectNuevoCat.value, inputNuevoPrecio.value.trim(), inputNuevaImgUrl.value.trim(), false));
    localStorage.setItem("Comidas", JSON.stringify(arrayComidasAux));
    arrayComidas = arrayComidasAux;
    actualizarPagina();
    inputNuevoNombre.value = "";
    textareaNuevaDesc.value = "";
    inputNuevoPrecio.value = "";
    inputNuevaImgUrl.value = "";
    btnGuardar.disabled = true;
})

// BUSCAR COMIDA VERIFICANDO CADA CARACTER EN LA INPUT CORRESPONDIENTE
inputBuscar.addEventListener("keyup", () => {
    arrayComidas = arrayComidasAux.filter(comida => comida.nombre.toLowerCase().includes(inputBuscar.value.toLowerCase()))
    actualizarPagina();
});