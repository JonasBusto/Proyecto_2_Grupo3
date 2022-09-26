let listausuario = JSON.parse(localStorage.getItem("Usuarios"));
listausuario.reverse()
let selecfila = document.getElementById("filas");
selecfila.innerHTML = listausuario.map((usuario) =>
    `
    <tr>
        <th scope="row">${usuario.id}</th>
        <td>${usuario.usuario}</td>
        <td>
            <div>
                <div class="w-100 d-flex justify-content-center">
                    <a class="mx-auto anchor-btn-habilitar desactivar ${usuario.habilitado === false ? " " : this.class = "d-none"}" data-bs-toggle="modal"
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
                                    <button type="button" class="mx-4 btn" id="btnDarAltaUsuario1">Habilitar</button>
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
            <a class=${usuario.role === "admin" ? "deshabilitado" : " "} >
                <i data-bs-toggle="modal" data-bs-target="#modalEliminarUsuario${usuario.id}">
                    <img src="/img/user_delete_icon.png" alt="icono_basurero" width="30px" height="30px"/>
                </i>
            </a>

            <div class="modal fade" data-bs-backdrop="static" id="modalEliminarUsuario${usuario.id}"
                tabindex="-1" aria-labelledby="modalEliminarUsuario1Label" aria-hidden="true">
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
            <a>
              <i class="" data-bs-toggle="modal" data-bs-target="#modalModificarusuario${usuario.id}">
                <img src="/img/user_edit_icon.png" alt="icono_editar" width="30px" height="30px"/>
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
                                <div class="d-flex flex-column mb-3 ">
                                    <label class="form-label fw-bold">Rol Actual: <b>${usuario.role}</label>
                                    <select id="modif_role${usuario.id}" class="form-select" aria-label="Default select example">
                                        <option value="usuario">usuario</option>
                                        <option value="admin">administrador</option>
                                     </select>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer d-flex flex-column">
                            <div id="">

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

// Lista Reverse
  listausuario.reverse()

// Función Eliminar Usuario
const eliminarUsuario = (id) => {
    let array = []

    for (let i = 0; i < listausuario.length; i++) {
        const usuario = listausuario[i];
        if (usuario.id !== id) {
            array.push(usuario)
        }
    }
    localStorage.setItem('Usuarios', JSON.stringify(array))
    location.href = './usuariosABM.html'
}

// Función Modificar Usuario
const modificarUsuario = (id) => {
    let usuario1 = document.getElementById(`modif_usuario${id}`).value
    let constraseña1 = document.getElementById(`modif_contraseña${id}`).value
    let role1 = document.getElementById(`modif_role${id}`).value
    let array = []

    for (let i = 0; i < listausuario.length; i++) {
        const usuario = listausuario[i];
        if (usuario.id === id) {
            array.push({ id, usuario: usuario1, contraseña: constraseña1, role: role1, habilitado: true })
        } else {
            array.push(usuario)
        }
    }

    localStorage.setItem('Usuarios', JSON.stringify(array))
    location.href = './usuariosABM.html'

}