// INYECTO NAVBAR EN FUNCION DEL USUARIO AUTENTICADO O NO

// Declaro las variables necesarias para la inyección del NAVBAR
const divInyectarNavbar = document.getElementById("inyectar-navbar");
let idEnLocalSTG = localStorage.getItem('id');
let localSTGusuarios = JSON.parse(localStorage.getItem('Usuarios')) || [];
let usuarioExistente = localSTGusuarios.filter(local => local.id === Number(idEnLocalSTG))

const inyectarNavbar = () => {

    if (idEnLocalSTG === null) {
        divInyectarNavbar.innerHTML = `
        <div class="container-fluid">
            <a class="navbar-brand text-light" href="/index.html">
                <img src="/img/logosolo.png" class="img-fluid rounded-circle me-1" width="50vh" height="50vh"
                alt="Logo.png">
                <img src="/img/letraslogo.png" width="120vh" height="50vh" alt="Letras.png">
            </a>
            <button class="navbar-toggler btn-navbar-toggle" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-burger"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav w-100 justify-content-end mb-2 mb-lg-0 mx-md-2">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/contacto.HTML">CONTACTO</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/nosotros.HTML">NOSOTROS</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/login.html">INICIAR SESIÓN</a>
                </li>
                <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/register.html">REGISTRARSE</a>
                </li>

                </ul>
            </div>
        </div>
      `
    } else if (usuarioExistente[0].role === "admin") {
        divInyectarNavbar.innerHTML = `
        <div class="container-fluid">
                <a class="navbar-brand text-light" href="/index.html">
                    <img src="/img/logosolo.png" class="img-fluid rounded-circle me-1" width="50vh" height="50vh"
                        alt="Logo.png">
                    <img src="/img/letraslogo.png" width="120vh" height="50vh" alt="Letras.png">
                </a>
                <button class="navbar-toggler btn-navbar-toggle" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-burger"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav w-100 justify-content-end mb-2 mb-lg-0 mx-md-2">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/usuariosABM.html">ABM USUARIOS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/comidasABM.html">ABM COMIDAS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/contacto.HTML">CONTACTO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/nosotros.HTML">NOSOTROS</a>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link active" aria-current="page" onclick="logout()">CERRAR SESIÓN</button>
                        </li>
                    </ul>
                </div>
            </div>
        `
    } else {
        divInyectarNavbar.innerHTML = `
        <div class="container-fluid">
                <a class="navbar-brand text-light" href="/index.html">
                    <img src="/img/logosolo.png" class="img-fluid rounded-circle me-1" width="50vh" height="50vh"
                        alt="Logo.png">
                    <img src="/img/letraslogo.png" width="120vh" height="50vh" alt="Letras.png">
                </a>
                <button class="navbar-toggler btn-navbar-toggle" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-burger"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav w-100 justify-content-end mb-2 mb-lg-0 mx-md-2">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/contacto.HTML">CONTACTO</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/nosotros.HTML">NOSOTROS</a>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link active" aria-current="page" onclick="logout()">CERRAR SESIÓN</button>
                        </li>
                    </ul>
                </div>
            </div>
        `
    }
}

inyectarNavbar();


// Selecciono los elementos necesarios
const divInyectarComidaHeader = document.getElementById("inyectar-comida-header");
const divInyectarDetallesComida = document.getElementById("inyectar-detalles-comida");

let captarID = Number(location.search.replace("?id=", ""));

const localSTG = JSON.parse(localStorage.getItem('Comidas'))

let id = window.location.search.split('=').pop();

let producto = localSTG.filter(producto => producto.id === Number(id))

// Inyecto header de comida

if (idEnLocalSTG === null || usuarioExistente[0].role === "usuario") {
    divInyectarComidaHeader.innerHTML = `
        <div class="row m-0 flex-row">
            <div class="d-flex justify-content-center align-items-center col-12 col-md-5">
                <img src="${producto[0].url}" class="img-fluid w-75 mt-2" alt="plato1.png">
            </div>
            <div class="d-flex col-12 col-md-7 flex-column text-center justify-content-center">
                <div class="d-flex flex-column align-items-center px-5">
                    <h3>EL MEJOR PLATO</h3>
                    <h1>${producto[0].nombre}</h1>
                </div>
                <h4>VALORACIÓN DEL PLATO</h4>
    
                <div class="d-flex justify-content-center">
                    <div class="d-flex flex-row justify-content-center valoracion-plato-destacado">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="d-flex align-items-center">
                        <h3 class="m-0">4 / 5</h3>
                    </div>
                </div>
                <div class="d-flex mt-3 justify-content-center div-btn-ordenar-comida">
                    <a href="/404.html" class="my-1">COMPRAR</a>
                </div>
            </div>
        </div>
        `
} else {
    divInyectarComidaHeader.innerHTML = `
        <div class="row m-0 flex-row">
            <div class="d-flex justify-content-center align-items-center col-12 col-md-5">
                <img src="${producto[0].url}" class="img-fluid w-75 mt-2" alt="plato1.png">
            </div>
            <div class="d-flex col-12 col-md-7 flex-column text-center justify-content-center">
                <div class="d-flex flex-column align-items-center px-5">
                    <h3>EL MEJOR PLATO</h3>
                    <h1>${producto[0].nombre}</h1>
                </div>
                <h4>VALORACIÓN DEL PLATO</h4>
    
                <div class="d-flex justify-content-center">
                    <div class="d-flex flex-row justify-content-center valoracion-plato-destacado">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star"></i>
                    </div>
                    <div class="d-flex align-items-center">
                        <h3 class="m-0">4 / 5</h3>
                    </div>
                </div>
                <div class="d-flex mt-3 justify-content-center div-btn-ordenar-comida">
                    <button id="btn-ordenar${localSTG[captarID].id}" aria-current="page" data-bs-toggle="offcanvas"
                    data-bs-target="#staticBackdrop" aria-controls="staticBackdrop" class="my-1">COMPRAR</button>
                </div>
            </div>
        </div>
        `
    const btnOrdenarComida = document.getElementById("btn-ordenar" + localSTG[captarID].id);
    btnOrdenarComida.addEventListener("click", () => agregarAlCarrito(localSTG[captarID]));

}


// Inyecto detalle de comida
divInyectarDetallesComida.innerHTML = `
        <div class="row m-0 justify-content-center">
            <div class="col-12">
                <div class="d-flex flex-column">
                    <div>
                        <h4 class="sub-titulos">DESCRIPCION</h4>
                        <div>
                            <p>${producto[0].descripcion}</p>
                        </div>
                    </div>
                    <div>
                        <h4 class="sub-titulos">PRECIO Y CARACTERISTICAS</h4>
                        <div class="row m-0 justify-content-center">
                            <div
                                class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column div-caracteristicas">
                                <div class="d-flex flex-column align-items-center mb-auto">
                                    <i class="fa-solid fa-sack-dollar"></i>
                                </div>
                                <div class="d-flex flex-column justify-content-between text-center">
                                    <h5>PRECIO</h5>
                                    <p>${producto[0].precio}$</p>
                                </div>
                            </div>
                            <div
                                class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex flex-column div-caracteristicas">
                                <div class="d-flex flex-column align-items-center mb-auto">
                                    <i class="fa-regular fa-credit-card"></i>
                                </div>
                                <div class="d-flex flex-column justify-content-between text-center">
                                    <h5>METODOS DE PAGOS</h5>
                                    <p>Debido y Credito</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-12 mt-3 d-flex flex-column div-reseñas">
            <h4 class="sub-titulos">RESEÑAS</h4>
            <div class="d-flex flex-column">
                <div class="d-flex flex-row">
                    <div class="d-flex flex-column w-auto mx-3 div-img-perfil">
                        <img src="/img/pizza/pizza-4-quesos-salame.png" class="img-fluid" alt="">
                    </div>
                    <div class="d-flex flex-column">
                        <div>
                            <h6>Pepe</h6>
                            <div class="d-flex flex-row valoracion">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                        </div>
                        <p class="mb-1">"Buen lugar mucha <b>variedad</b> y <b>buenos precios</b>"</p>
                        <div class="d-flex flex-row div-likes">
                            <p class="text-dark">¿Te gusta?</p>
                            <div class="mx-2 d-flex flex-row justify-content-between w-25">
                                <i class="fa-regular fa-thumbs-up"></i>
                                <i class="fa-regular fa-thumbs-down"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="my-3">
                <label for="exampleFormControlTextarea1" class="form-label label-comentario">REALIZAR
                    COMENTARIO (PROXIMAMENTE)</label>
                <h6>TU USUARIO: <b>Pepe</b></h6>
                <textarea class="form-control w-50" id="exampleFormControlTextarea1" rows="2"></textarea>
                <button id="btn-comentar" class="my-1">COMENTAR</button>
            </div>
        </div>`


const logout = () => {
    localStorage.removeItem('id')
    location.href = './entradaBlog.html?id=' + captarID;
}


// INICIO DEL JS DEL CARRITO

// DECLARACION DE LAS VARIABLES PARA EL CARRITO
let arrayCarrito = JSON.parse(localStorage.getItem("Carrito")) || [];
const divInyectarCarrito = document.getElementById("inyectar-carrito");
const totalAPagar = document.getElementById("total-a-pagar");

function inyectarCarrito() {
    divInyectarCarrito.innerHTML = "";
    for (let i = 0; i < arrayCarrito.length; i++) {

        const div = document.createElement("div");
        const hr = document.createElement("hr");
        div.classList = "col-12 row m-0 justify-content-between div-contenedor-comida-carrito2 my-3"
        hr.classList = "m-0";
        div.innerHTML = `
            <div
                class="col-3 div-img-comida-carrito2 d-flex flex-column align-items-center justify-content-center">
                <div class="d-flex div-img justify-content-center">
                    <img class="img-fluid" src="${arrayCarrito[i].url}" alt="">
                </div>
                <div class="precio-unidad-carrito">
                    <p>${arrayCarrito[i].precio} $/u</p>
                </div>
            </div>
            <div class="col-8 p-0 d-flex flex-column justify-content-center">
                <div class="row m-0">
                    <div class="col-9">
                        <p class="titulo-comida-carrito">${arrayCarrito[i].nombre}</p>
                    </div>
                    <div class="col-3">
                        <button type="" id="btn-eliminar-comida${arrayCarrito[i].id}" class="btn-eliminar-comida-carrito"><i
                                class="fa-solid fa-trash-can"></i></button>
                    </div>
                </div>
                <div class="row m-0 justify-content-center div-btn-carrito2">
                    <div class="col-8 d-flex">
                        <button class="" id="btn-quitar${arrayCarrito[i].id}">-</button>
                        <div class="d-flex flex-column">
                            <input type="text" disabled value="${arrayCarrito[i].cantidad}">
                        </div>
                        <button class="" id="btn-agregar${arrayCarrito[i].id}">+</button>
                    </div>
                    <div class="col-4 d-flex flex-column div-subtot-comida">
                        <p>Sub Total: </p>
                        <p>${arrayCarrito[i].cantidad * arrayCarrito[i].precio}$</p>
                    </div>
                </div>
            </div>
        `
        divInyectarCarrito.appendChild(div);
        divInyectarCarrito.appendChild(hr);

        const btnAgregar = document.getElementById("btn-agregar" + arrayCarrito[i].id);
        const btnQuitar = document.getElementById("btn-quitar" + arrayCarrito[i].id);
        const btnEliminarComida = document.getElementById("btn-eliminar-comida" + arrayCarrito[i].id)

        btnAgregar.addEventListener("click", () => agregarUnidadCarrito(arrayCarrito[i]))
        btnQuitar.addEventListener("click", () => quitarUnidadCarrito(arrayCarrito[i]))
        btnEliminarComida.addEventListener("click", () => eliminarComida(arrayCarrito[i]))
    }
}

// INYECTO CARRITO
inyectarCarrito();

// Permite agregar en una unidad el producto en carrito
function agregarUnidadCarrito(comida) {
    comida.cantidad++;
    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito));
    verificarTotalCarrito();
    inyectarCarrito();
}

// Permite quitar en una unidad el producto en carrito
function quitarUnidadCarrito(comida) {
    if (comida.cantidad === 1) {
        arrayCarrito = arrayCarrito.filter(comidaEnArray => comidaEnArray.id !== comida.id);
    } else {
        if (comida.cantidad > 1) {
            comida.cantidad--;
        }
    }

    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito));
    verificarTotalCarrito();
    inyectarCarrito();
}

// Permite eliminar directamente el producto en carrito sin importar la cantidad de unidades, siempre mayor a 0
function eliminarComida(comida) {
    arrayCarrito = arrayCarrito.filter(comidaEnArray => comidaEnArray.id !== comida.id);

    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito));
    verificarTotalCarrito();
    inyectarCarrito();
}

// Agrega el producto al carrito
const agregarAlCarrito = (comida) => {
    let encontrado = false;
    let indexEncontrado = 0;
    for (let i = 0; i < arrayCarrito.length; i++) {
        if (arrayCarrito[i].id === comida.id) {
            encontrado = true;
            indexEncontrado = i;
            i = arrayCarrito.length;
        } else {
            encontrado = false;
        }
    }

    if (encontrado) {
        arrayCarrito[indexEncontrado].cantidad++;
    } else {
        comida.cantidad = 1;
        arrayCarrito.push(comida);
    }


    localStorage.setItem("Carrito", JSON.stringify(arrayCarrito));
    verificarTotalCarrito();
    inyectarCarrito();
}

// Verifica el dinero total gastado
const verificarTotalCarrito = () => {
    let total = 0;
    for (let i = 0; i < arrayCarrito.length; i++) {
        total += arrayCarrito[i].precio * arrayCarrito[i].cantidad;
    }
    totalAPagar.innerHTML = `
        Total a pagar: $${total}
        `
}

// FIN DEL JS DEL CARRITO