const divInyectarNavbar = document.getElementById("inyectar-nav");
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
    } else {
        if (usuarioExistente[0].role === "admin") {
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
        }
    }
}

inyectarNavbar();

const logout = () => {
    localStorage.removeItem('id')
    location.href = './index.html'
}

(
    function validarDato() {
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || [];
        let usuarioExistente = localSTG.filter(local => local.id === Number(id))
       
        if(id !== null) {
            if(usuarioExistente[0].role === 'usuario') {
                location.href = '/paginaUsuario.html'
            } 
        }
    }
)()
