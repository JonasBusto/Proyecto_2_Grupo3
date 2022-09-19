const inputNuevoNombre = document.getElementById("input-nuevo-nombre");
const textareaNuevaDesc = document.getElementById("textarea-nueva-desc");
const selectNuevoCat = document.getElementById("select-nuevo-cat");
const inputNuevoPrecio = document.getElementById("input-nuevo-precio");
const inputNuevaImgUrl = document.getElementById("input-nueva-img-url");
const btnGuardar = document.getElementById("btn-guardar");
const tBodyInyectar = document.getElementById("tbody-inyectar");
const inputBuscar = document.getElementById("input-buscar");
const divAlertaDestacadoRepetido = document.getElementById("div-alerta-destacado");

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
// let arrayComidasInicial = [];
// arrayComidasInicial.push(new Comida("100", "pizza", "desc1", "pizza", "190", "url", false));
// localStorage.setItem("Comidas", JSON.stringify(arrayComidasInicial));

// arrayComidasAux --> Contendra siempre lo del localStorage
let arrayComidasAux = JSON.parse(localStorage.getItem("Comidas")) || [];

// arrayComidas --> Solo contendra el/los elemento/s que busque, es un array de apoyo unicamente
let arrayComidas = arrayComidasAux;



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

function eliminarComida(index) {
    arrayComidas = JSON.parse(localStorage.getItem("Comidas")).filter(comida => comida.id !== index);
    localStorage.setItem("Comidas", JSON.stringify(arrayComidas));
    location.reload();
}

function modificarComida(index) {
    const inputModificadoNombre = document.getElementById("input-modificado-nombre" + index);
    const inputNuevoPrecio = document.getElementById("input-nuevo-precio" + index);
    const nuevaDesc = document.getElementById("textarea-nueva-descripcion" + index);
    const alerta = document.getElementById("inyectar-alerta" + index)

    let encontrado = funcionVerificarExistenciaAUX(index)[0];
    let encontradoIndex = funcionVerificarExistenciaAUX(index)[1];

    if (encontrado) {
        if (inputModificadoNombre.value.trim() === "" || inputNuevoPrecio.value.trim() === "" || nuevaDesc.value.trim() === "") {
            alerta.innerHTML = `
            <p class="text-danger">*Verifique los datos que ingresa*</p>
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

    if(auxBoolMensajeDestacado){
        divAlertaDestacadoRepetido.innerHTML = `
                <h6 class="m-0">COMIDA YA DESTACADA!!</h6>
                 `
                setTimeout(() => {
                    divAlertaDestacadoRepetido.innerHTML = "";
                }, 1500);
    }else {
        localStorage.setItem("Comidas", JSON.stringify(arrayComidasAux));
        location.reload();
    }


    // Lo de abajo era para destacar unicamente una comida. Si queria destacar otra, debia quitar 
    // el destacado a la actual para recien luego destacar otra comida. No me gusto esto, asi que hice lo de arriba

    // for (let i = 0; i < arrayComidasAux.length; i++) {
    //     if (arrayComidasAux[i].destacado === true) {
    //         contadorDestacado++;
    //     }
    // }


    // if (encontrado) {
    //     if (arrayComidasAux[encontradoIndex].destacado === false) {
    //         if (contadorDestacado >= 1) {
    //             divAlertaDestacadoRepetido.innerHTML = `
    //             <h6 class="m-0">SE PUEDE DESTACAR UNA COMIDA A LA VEZ!!</h6>
    //             `
    //             setTimeout(() => {
    //                 divAlertaDestacadoRepetido.innerHTML = "";
    //             }, 1500);
    //         }else {
    //             arrayComidasAux[encontradoIndex].destacado = true;
    //             localStorage.setItem("Comidas", JSON.stringify(arrayComidasAux));
    //             location.reload();
    //         }  
    //     } else {
    //         arrayComidasAux[encontradoIndex].destacado = false;
    //         localStorage.setItem("Comidas", JSON.stringify(arrayComidasAux));
    //         location.reload();
    //     }

    // }
}

const modificarIMGurl = (index) => {
    const inputModificarUrl = document.getElementById("input-modificar-url" + index);

    let encontrado = funcionVerificarExistenciaAUX(index)[0];
    let encontradoIndex = funcionVerificarExistenciaAUX(index)[1];

    if (encontrado) {
        arrayComidasAux[encontradoIndex].url = inputModificarUrl.value;
        localStorage.setItem("Comidas", JSON.stringify(arrayComidasAux));
        location.reload();
    }

}

const actualizarPagina = () => {
    tBodyInyectar.innerHTML = "";
    for (let i = 0; i < arrayComidas.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row">${arrayComidas[i].id}</th>
        <td>${arrayComidas[i].nombre}</td>
        <td>${arrayComidas[i].precio}$</td>
        <td>${arrayComidas[i].categoria}</td>
        <td>
            <div>
                <a data-bs-toggle="modal" data-bs-target="#modalVerDesc${arrayComidas[i].id}">Ver Mas...</a>

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
                                    <button type="button" class="btn btn-primary mx-4"
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
                <a data-bs-toggle="modal" data-bs-target="#modalVerImagenes${arrayComidas[i].id}"
                    class="text-decoration-none">Ver</a>

                <div class="modal fade" data-bs-backdrop="static" id="modalVerImagenes${arrayComidas[i].id}"
                    tabindex="-1" aria-labelledby="modalVerImagenes${arrayComidas[i].id}Label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalVerImagenes${arrayComidas[i].id}Label">Imagenes
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
                                                    src="/img/pizza/pizza-barbacoa-cerdo.png"
                                                    alt="">
                                            </div>
                                            <div class="col-12 d-flex flex-column">
                                                <p class="mx-4">Más Imagenes</p>
                                                <div class="row m-0">
                                                    <div class="col-12 col-sm-4 p-0 px-1">
                                                        <img class="img-fluid"
                                                            src="/img/carousel-img1.png" alt="">
                                                    </div>
                                                    <div class="col-12 col-sm-4 p-0 px-1">
                                                        <img class="img-fluid"
                                                            src="/img/carousel-img1.png" alt="">
                                                    </div>
                                                    <div class="col-12 col-sm-4 p-0 px-1">
                                                        <img class="img-fluid"
                                                            src="/img/carousel-img1.png" alt="">
                                                    </div>
                                                </div>
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
        <td class="">
            <div class="d-flex justify-content-center">
                <a><i class="fa-solid fa-star ${arrayComidas[i].destacado ? "text-warning" : "color-icono"}" id="btn-destacado${arrayComidas[i].id}"></i></a>
            </div>
        </td>
        <td class="td-col-opciones-comida">
            <!-- MODAL ELIMINAR COMIDA -->
            <div>
                <a><i class="fa-solid fa-trash-can color-icono ${arrayComidas[i].destacado ? "btn-eliminar-desactivado" : ""}" data-bs-toggle="modal"
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
                                <p class="fw-bold">Comida #1
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
                                            <option selected>${arrayComidas[i].categoria}</option>
                                            <option value="categoria1">Categoria 1</option>
                                            <option value="categoria2">Categoria 2</option>
                                            <option value="categoria3">Categoria 3</option>
                                            <option value="otro">Otro</option>
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
                                        <textarea class="form-control"
                                            id="textarea-nueva-descripcion${arrayComidas[i].id}"
                                            rows="3">${arrayComidas[i].descripcion}</textarea>
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
                                    Modificar Imagenes
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
                            <div class="modal-footer d-flex justify-content-between">
                                <button class="btn mx-4"
                                    data-bs-dismiss="modal">Cancelar</button>
                                <button class="mx-4 btn" id="btn-modificar-img${arrayComidas[i].id}">Guardar
                                    Cambio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </td>
        `
        tBodyInyectar.appendChild(tr);


        // DECLARO LAS VARIABLES PARA BOTONES E INPUTS PARA CADA ELEMENTO RECORRIDO DEL ARRAYCOMIDAS
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
    if (inputNuevoNombre.value.trim() === "" || textareaNuevaDesc.value.trim() === "" || inputNuevoPrecio.value.trim() === "" || inputNuevaImgUrl.value.trim() === "") {
        btnGuardar.disabled = true;
    } else {
        btnGuardar.disabled = false;
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

// BUSCAR 


inputBuscar.addEventListener("keyup", () => {
    arrayComidas = arrayComidasAux.filter(comida => comida.nombre.toLowerCase().includes(inputBuscar.value.toLowerCase()))
    actualizarPagina();
});