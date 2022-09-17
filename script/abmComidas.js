const inputNuevoNombre = document.getElementById("input-nuevo-nombre");
const textareaNuevaDesc = document.getElementById("textarea-nueva-desc");
const selectNuevoCat = document.getElementById("select-nuevo-cat");
const inputNuevoPrecio = document.getElementById("input-nuevo-precio");
const inputNuevaImgUrl = document.getElementById("input-nueva-img-url");
const btnGuardar = document.getElementById("btn-guardar");
const tBodyInyectar = document.getElementById("tbody-inyectar");
let arrayComidas = JSON.parse(localStorage.getItem("Comidas")) || [];

// CREO LA CLASE (PLANTILLA) COMIDA PARA NO USAR {} EN EL PROCESO
class Comida {
    constructor(nombre, desc, cat, precio, url, publicado) {
        this.nombre = nombre;
        this.descripcion = desc;
        this.categoria = cat;
        this.precio = precio;
        this.url = url;
        this.publicado = publicado;
    }
}

function eliminarComida(index) {
    arrayComidas.splice(index, 1);
    localStorage.setItem("Comidas", JSON.stringify(arrayComidas));
    location.reload();
}

function modificarComida(index) {
    const inputModificadoNombre = document.getElementById("input-modificado-nombre" + index);
    const inputNuevoPrecio = document.getElementById("input-nuevo-precio" + index);
    const nuevaDesc = document.getElementById("textarea-nueva-descripcion" + index);

    arrayComidas[index].nombre = inputModificadoNombre.value;
    arrayComidas[index].precio = inputNuevoPrecio.value;
    arrayComidas[index].descripcion = nuevaDesc.value; 

    localStorage.setItem("Comidas", JSON.stringify(arrayComidas));
    location.reload();
}

function publicarComida(index) {
    console.log(arrayComidas[index].publicado)
    const btnPublicado = document.getElementById("btn-publicado" + index);
    if(btnPublicado.checked) {
        arrayComidas[index].publicado = true;
    }else {
        arrayComidas[index].publicado = false;
    }
    console.log(arrayComidas[index].publicado)
    localStorage.setItem("Comidas", JSON.stringify(arrayComidas));
}

const modificarIMGurl = (index) => {
    const inputModificarUrl = document.getElementById("input-modificar-url" + index);
    console.log(inputModificarUrl.value);
    console.log(arrayComidas[index].url);
    arrayComidas[index].url = inputModificarUrl.value;
    localStorage.setItem("Comidas", JSON.stringify(arrayComidas));
    location.reload();
}

const actualizarPagina = () => {
    tBodyInyectar.innerHTML = "";
    for (let i = 0; i < arrayComidas.length; i++) {
        const tr = document.createElement("tr");
        tr.innerHTML = `
        <th scope="row">${i}</th>
        <td>${arrayComidas[i].nombre}</td>
        <td>${arrayComidas[i].precio}$</td>
        <td>${arrayComidas[i].categoria}</td>
        <td>
            <div>
                <a data-bs-toggle="modal" data-bs-target="#modalVerDesc${i}">Ver Mas...</a>

                <div class="modal fade" data-bs-backdrop="static" id="modalVerDesc${i}"
                    tabindex="-1" aria-labelledby="modalVerDesc${i}Label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalVerDesc${i}Label">Descripción</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                    aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h5>Comida #${i}: ${arrayComidas[i].nombre}</h5>
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
                <a data-bs-toggle="modal" data-bs-target="#modalVerImagenes${i}"
                    class="text-decoration-none">Ver</a>

                <div class="modal fade" data-bs-backdrop="static" id="modalVerImagenes${i}"
                    tabindex="-1" aria-labelledby="modalVerImagenes${i}Label" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalVerImagenes${i}Label">Imagenes
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
        <td class="form-switch">
            <div class="d-flex justify-content-center">
                <input class="mx-auto form-check-input w-50" type="checkbox" role="switch"
                    id="btn-publicado${i}">
            </div>
        </td>
        <td class="td-col-opciones-comida">
            <!-- MODAL ELIMINAR COMIDA -->
            <div>
                <a><i class="fa-solid fa-trash-can color-icono" data-bs-toggle="modal"
                        data-bs-target="#modalEliminarComida${i}"></i></a>

                <div class="modal fade" data-bs-backdrop="static" id="modalEliminarComida${i}"
                    tabindex="-1" aria-labelledby="modalEliminarComida${i}Label"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalEliminarComida${i}Label">Eliminar
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
                                    <button type="button" class="mx-4 btn" id="btnEliminar${i}">Eliminar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- MODAL MODIFICAR COMIDA -->
            <div>
                <a><i class="fa-solid fa-pen-to-square color-icono" data-bs-toggle="modal"
                        data-bs-target="#modalModificarComida${i}"></i></a>

                <div class="modal fade" data-bs-backdrop="static" id="modalModificarComida${i}"
                    tabindex="-1" aria-labelledby="modalModificarComida${i}Label"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalModificarComida${i}Label">
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
                                        <input type="text" class="form-control" id="input-modificado-nombre${i}"
                                            value="${arrayComidas[i].nombre}">
                                    </div>
                                    <div class="d-flex flex-column mb-3">
                                        <label class="form-label">Categoria</label>
                                        <select id="select-modificar-comida${i}" class="form-select"
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
                                            value="${arrayComidas[i].precio}" id="input-nuevo-precio${i}">
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Imagenes</label>
                                        <div>
                                            <!-- MODAL MODIFICAR IMAGENES -->
                                            <button data-bs-toggle="modal"
                                                data-bs-target="#modalModificarImagenes${i}"
                                                class="btn">Modificar Imagenes</button>


                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label">Descripción</label>
                                        <textarea class="form-control"
                                            id="textarea-nueva-descripcion${i}"
                                            rows="3">${arrayComidas[i].descripcion}</textarea>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer d-flex justify-content-between">
                                <button class="btn mx-4"
                                    data-bs-dismiss="modal">Cancelar</button>
                                    <button class="mx-4 btn" id="btn-guardar-cambios${i}">Guardar
                                    Cambios</button>
                                    <p class="text-success d-none" id="mensaje-cambio${i}">Cambios Realizados!</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" data-bs-backdrop="static" id="modalModificarImagenes${i}"
                    tabindex="-1" aria-labelledby="modalModificarImagenes${i}Label"
                    aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="modalModificarImagenes${i}Label">
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
                                                <div class="mb-3">
                                                    <label class="form-label">Modificar imagen
                                                        principal</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="130.00" disabled
                                                        value="${arrayComidas[i].url}">
                                                        
                                                </div>
                                                <div class="mb-3">
                                                    <label class="form-label">Nueva URL</label>
                                                    <input type="text" class="form-control"
                                                        placeholder="Ingrese la nueva URL" id="input-modificar-url${i}">

                                                </div>
                                            </div>
                                            <div class="col-12 d-flex flex-column">
                                                <p class="mx-4">Más
                                                    Imagenes</p>
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
                                <button class="btn mx-4"
                                    data-bs-dismiss="modal">Cancelar</button>
                                <button class="mx-4 btn" id="btn-modificar-img${i}">Guardar
                                    Cambio</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href=""><i class="fa-solid fa-star color-icono"></i></a>
        </td>
        `
        tBodyInyectar.appendChild(tr);

        // DECLARO LAS VARIABLES PARA BOTONES E INPUTS PARA CADA ELEMENTO RECORRIDO DEL ARRAYCOMIDAS
        const btnEliminar = document.getElementById("btnEliminar" + i);
        btnEliminar.addEventListener("click", () => eliminarComida(i));

        const btnGuardar = document.getElementById("btn-guardar-cambios" + i);
        btnGuardar.addEventListener("click", () => modificarComida(i));
   
        const btnPublicar = document.getElementById("btn-publicado" + i);
        btnPublicar.addEventListener("click", ()=> publicarComida(i));
    
        const btnModificarIMG = document.getElementById("btn-modificar-img" + i);
        btnModificarIMG.addEventListener("click", ()=>modificarIMGurl(i));
    }
}

btnGuardar.disabled = true;
actualizarPagina();


// VERIFICA QUE LAS INPUTS ESTEN LLENAS
// "keyup" ES UN EVENTO COMO EL CLICK, QUE FUNCIONA CUANDO UNO PRESIONA UNA TECLA.
// EN ESTE CASO USE "keyup" PARA CONTROLAR LAS INPUTS CADA VEZ QUE PRESIONO UNA TECLA
// VERIFICO LAS INPUT UNA POR UNA

inputNuevoNombre.addEventListener("keyup", () => {
    if (inputNuevoNombre.value === "" || textareaNuevaDesc.value === "" || inputNuevoPrecio.value === "" || inputNuevaImgUrl.value === "") {
        btnGuardar.disabled = true;
    } else {
        btnGuardar.disabled = false;
    }
})
textareaNuevaDesc.addEventListener("keyup", () => {
    if (inputNuevoNombre.value === "" || textareaNuevaDesc.value === "" || inputNuevoPrecio.value === "" || inputNuevaImgUrl.value === "") {
        btnGuardar.disabled = true;
    } else {
        btnGuardar.disabled = false;
    }
})
inputNuevoPrecio.addEventListener("keyup", () => {
    if (inputNuevoNombre.value === "" || textareaNuevaDesc.value === "" || inputNuevoPrecio.value === "" || inputNuevaImgUrl.value === "") {
        btnGuardar.disabled = true;
    } else {
        btnGuardar.disabled = false;
    }
})
inputNuevaImgUrl.addEventListener("keyup", () => {
    if (inputNuevoNombre.value === "" || textareaNuevaDesc.value === "" || inputNuevoPrecio.value === "" || inputNuevaImgUrl.value === "") {
        btnGuardar.disabled = true;
    } else {
        btnGuardar.disabled = false;
    }
})


// GUARDO EN LOCAL STORAGE
btnGuardar.addEventListener("click", () => {
    arrayComidas.push(new Comida(inputNuevoNombre.value, textareaNuevaDesc.value, selectNuevoCat.value, inputNuevoPrecio.value, inputNuevaImgUrl.value, false));
    localStorage.setItem("Comidas", JSON.stringify(arrayComidas));
    actualizarPagina();
    inputNuevoNombre.value = "";
    textareaNuevaDesc.value = "";
    inputNuevoPrecio.value = "";
    inputNuevaImgUrl.value = "";
})

