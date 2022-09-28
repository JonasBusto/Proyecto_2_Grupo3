// Declaro las variables necesarias y la impresión de forma descendente de los usuarios registrados
let listausuario = JSON.parse(localStorage.getItem("Usuarios")) || [];
listausuario.reverse()
let selecfila = document.getElementById("filas");

// Imprime los usuarios en la tabla del ABM usuario
selecfila.innerHTML = listausuario.map((usuario) =>
    `
    <tr>
      <th scope="row">${usuario.id}</th>
      <td>${usuario.usuario}</td>
      <td>
        <div>
          <div class="w-100 d-flex justify-content-center">
            <a class="mx-auto anchor-btn-habilitar desactivar ${usuario.habilitado === false ? " " : this.class = "d-none"} onclick="habilitarUsuario(${usuario.id}" data-bs-toggle="modal"
            data-bs-target="#modalHabilitarUsuario${usuario.id}">HABILITAR</a>
          </div>
          <div class="modal fade" data-bs-backdrop="static" id="modalHabilitarUsuario${usuario.id}"
            tabindex="-1" aria-labelledby="modalHabilitarUsuario1Label" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalHabilitarUsuario1Label">
                    Habilitar usuario
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <div class="modal-body container d-flex flex-column align-items-center">
                  <p class="fw-bold">
                    ¿Esta seguro de dar de alta al usuario?
                  </p>
                  <div class="d-flex justify-content-center">
                    <button type="button" class="btn mx-4" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="mx-4 btn" id="btnDarAltaUsuario${usuario.id}" onclick="habilitarUsuario(${usuario.id})">Habilitar</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
      <td class="td-col-opciones">
        <!-- MODAL ELIMINAR USUARIO -->
        <div>
          <a class="">
            <i class="fa-solid fa-trash color-icono ${usuario.role === "admin" ? "btn-eliminar-desactivado" : " "}" data-bs-toggle="modal" data-bs-target="#modalEliminarUsuario${usuario.id}">
            </i>
          </a>
          <div class="modal fade" data-bs-backdrop="static" id="modalEliminarUsuario${usuario.id}" tabindex="-1"
           aria-labelledby="modalEliminarUsuario1Label" aria-hidden="true">
           <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalEliminarUsuario${usuario.id}Label">
                    Eliminar usuario
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <div class="modal-body container d-flex flex-column align-items-center">
                  <p class="fw-bold">
                    ¿Esta seguro de eliminar al usuario ${usuario.usuario}?
                  </p>
                  <div class="d-flex justify-content-center">
                    <button type="button" class="btn mx-4" data-bs-dismiss="modal">
                      Cancelar
                    </button>
                    <button type="button" class="mx-4 btn" id="btnEliminarUsuario1" onclick="eliminarUsuario(${usuario.id})">
                      Eliminar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <!-- MODAL MODIFICAR USUARIO -->
        <div>
          <a class=${usuario.role === "admin" ? "deshabilitado" : " "}>
            <i class="fa-solid fa-pen-to-square color-icono ${usuario.role === "admin" ? "btn-eliminar-desactivado" : " "}" data-bs-toggle="modal" data-bs-target="#modalModificarusuario${usuario.id}">
            </i>
          </a>
          <div class="modal fade" data-bs-backdrop="static" id="modalModificarusuario${usuario.id}" tabindex="-1"
            aria-labelledby="modalModificarusuario1Label" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalModificarusuario1Label">
                    Modificar Usuario
                  </h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                  </button>
                </div>
                <div class="modal-body d-flex flex-column">
                  <p class="fw-bold">
                    Usuario ${usuario.usuario}
                  </p>
                  <div class="d-flex flex-column">
                    <div class="mb-3">
                      <label class="form-label fw-bold">Nombre de Usuario</label>
                      <input type="text" class="form-control" id="modif_usuario${usuario.id}" value="${usuario.usuario}">
                    </div>
                    <div class="mb-3">
                      <label class="form-label fw-bold">Contraseña</label>
                      <input type="text" class="form-control" id="modif_contraseña${usuario.id}" value="${usuario.contraseña}">
                    </div>
                  </div>
                </div>
                <div class="modal-footer d-flex flex-column">
                  <div id="inyectar-alerta${usuario.id}">

                  </div>
                  <div class="d-flex justify-content-between w-100">
                    <button class="btn mx-4" data-bs-dismiss="modal">
                      Cancelar
                    </button>
                    <button class="mx-4 btn" onclick="modificarUsuario(${usuario.id})">
                      Guardar Cambios
                    </button>
                    <p class="text-success d-none" id="">
                      Cambios Realizados!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
   `
).join("");


// Guardar Local y Refrescar Pantalla
const GuardarLocalSTG = () => {
    localStorage.setItem('Usuarios', JSON.stringify(listausuario))
    location.href = './usuariosABM.html'
}


// Función Eliminar Usuario
const eliminarUsuario = (id) => {
    usuario = listausuario
    let i = usuario.findIndex((usuario) => usuario.id === id)
    // elimino usuario
    listausuario.splice(i, 1);

    GuardarLocalSTG();
}


// Función Modificar Usuario
const modificarUsuario = (id) => {
    let index = id
    let usuario1 = document.getElementById(`modif_usuario${id}`).value
    let constraseña1 = document.getElementById(`modif_contraseña${id}`).value
    const alerta = document.getElementById("inyectar-alerta" + index);

    // busco el índice en el LocalSTG
    let i = listausuario.findIndex((listausuario) => listausuario.id === id)

    // Guardo los nuevos valores
    if (usuario1.trim() === "" || constraseña1.trim() === "") {
        alerta.innerHTML = `
            <h6 class="text-danger">*VERIFIQUE QUE LOS CAMPOS NO ESTEN VACIOS*</h6>
            `
        setTimeout(() => {
            alerta.innerHTML = "";
        }, 1500);
    } else {
        let indexEncontrado = listausuario.findIndex(e => e.usuario.trim().toLowerCase() === usuario1.trim().toLowerCase());
        if (indexEncontrado === -1 || listausuario[indexEncontrado].id === id) {

            if (usuario1.trim().split(" ").length > 1) {
                alerta.innerHTML = `
                <h6 class="text-danger">*EL NOMBRE DE USUARIO NO DEBE TENER ESPACIOS*</h6>
                `
                setTimeout(() => {
                    alerta.innerHTML = "";
                }, 1500);
            } else if (usuario1.trim().length > 20) {
                alerta.innerHTML = `
                <h6 class="text-danger">*EL NOMBRE DE USUARIO NO DEBE SUPERAR 20 CARACTERES*</h6>
                `
                setTimeout(() => {
                    alerta.innerHTML = "";
                }, 1500);
            } else if (constraseña1.trim().length > 20) {
                alerta.innerHTML = `
                <h6 class="text-danger">*LA CONTRASEÑA NO DEBE SUPERAR 20 CARACTERES*</h6>
                `
                setTimeout(() => {
                    alerta.innerHTML = "";
                }, 1500);
            } else {
                listausuario[i].id = index;
                listausuario[i].usuario = usuario1.trim();
                listausuario[i].contraseña = constraseña1.trim();

                GuardarLocalSTG();
            }
        } else {
            if (listausuario[indexEncontrado].role === "admin") {
                alerta.innerHTML = `
                <h6 class="text-danger">*RECUERDE, NO SE PUEDE LLAMAR 'ADMINISTRADOR'*</h6>
                `
                setTimeout(() => {
                    alerta.innerHTML = "";
                }, 1500);
            } else {
                alerta.innerHTML = `
                <h6 class="text-danger">*EL NOMBRE QUE INTENTA CARGAR YA EXISTE*</h6>
                `
                setTimeout(() => {
                    alerta.innerHTML = "";
                }, 1500);
            }
        }
    }

}

// Función Habilitar Usuario
const habilitarUsuario = (id) => {
    let i = listausuario.findIndex((listausuario) => listausuario.id === id)
    listausuario[i].habilitado = true

    GuardarLocalSTG();

}

// Mostrar primero los nuevos usuarios
listausuario.reverse()