const divInyectarNavbar = document.getElementById("inyectar-navbar");
let id = localStorage.getItem('id');
let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || [];
let usuarioExistente = localSTG.filter(local => local.id === Number(id))

const inyectarNavbar = () => {

    if (id === null) {
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
    } else if(usuarioExistente[0].role === "admin"){
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

const logout = () => {
    localStorage.removeItem('id')
    location.href = './contacto.html'
}

function validarContacto() {
    let contactoNombre = document.getElementById("contactoNombre").value;
    let contactoEmail = document.getElementById("contactoEmail").value;
    let contactoComentario = document.getElementById("contactoComentario").value;
    let array = []

    //if (contactoNombre === ""|| contactoEmail === ""||contactoComentario === ""){
    // document.getElementById("contactoNombre").className = "form-control is invalid"
    //document.getElementById("contactoEmail").className = "form-control is-invalid"
    //document.getElementById("contactoComentario").className = "form-control is-invalid"
    //}
    //else {
    //document.getElementById("contactoNombre").className = "form-control is valid"
    //document.getElementById("contactoEmail").className = "form-control is-valid"
    //document.getElementById("contactoComentario").className = "form-control is-valid"
    //}
    //}
    if (contactoNombre === "") {
        //alert("Falta completar nombre")
        document.getElementById("contactoNombre").className = "form-control is-invalid"
    }
    else {
        document.getElementById("contactoNombre").className = "form-control is-valid"
    }
    if (contactoEmail === "") {
        //alert("Falta completar nombre")
        document.getElementById("contactoEmail").className = "form-control is-invalid"
    }
    else {
        document.getElementById("contactoEmail").className = "form-control is-valid"
    }
    if (contactoComentario === "") {
        //alert("Falta completar nombre")
        document.getElementById("contactoComentario").className = "form-control is-invalid"
    }
    else {
        document.getElementById("contactoComentario").className = "form-control is-valid"
    }
}
//falta agregar el de submit y e inicializar formulario