if (JSON.parse(localStorage.getItem("Usuarios")) === null) {
    localStorage.setItem("Usuarios", JSON.stringify([{ id: 1, usuario: "Administrador", contraseña: "admin", role: 'admin', habilitado: true }]))
}

function login() {
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || [];
    let usuarioExistente = localSTG.filter(local => local.usuario.toLowerCase().trim() === usuario.toLowerCase().trim());

    if (usuario.trim() === '' || contraseña.trim() === '') {
        Swal.fire({
            title: 'CAMPOS INCOMPLETOS',
            icon: 'warning',
            confirmButtonText: 'ACEPTAR'
        })
    } else {

        //corroboro que el usuario ingresado exista
        if (usuarioExistente.length > 0) {
            if (usuarioExistente[0].contraseña === contraseña) {
                if (usuarioExistente[0].habilitado === true) {
                    if (usuarioExistente[0].role === 'admin') {
                        localStorage.setItem('id', JSON.stringify(usuarioExistente[0].id));
                        location.href = '/usuariosABM.html';
                    } else {
                        localStorage.setItem('id', JSON.stringify(usuarioExistente[0].id));
                        location.href = '/paginaUsuario.html';
                    }
                } else {
                    Swal.fire({
                        title: "El usuario EXISTE pero esta INHABILITADO.",
                        icon: 'warning',
                        html: "Espera a ser dado de <b>ALTA</b> por el <b>ADMINISTRADOR</b>.",
                        confirmButtonText: 'ACEPTAR'
                    })
                }
            } else {
                Swal.fire({
                    title: 'El usuario o contraseñas son invalidas',
                    icon: 'warning',
                    confirmButtonText: 'ACEPTAR'
                })
            }
        } else {
            Swal.fire({
                title: 'El usuario o contraseñas son invalidas',
                icon: 'warning',
                confirmButtonText: 'ACEPTAR'
            })
        }
    }
}

// Permitir funcionalidad para visualizar o no la contraseña haciendo click en el icono del "ojo"
const btnVisualizar = document.getElementById("div-visualizar-contraseña");
const iconoEye = document.getElementById("icono-eye");
const contraseña = document.getElementById('contraseña');

btnVisualizar.addEventListener("click", () => {
    if (contraseña.type === "password") {
        contraseña.type = "text";
    } else {
        contraseña.type = "password";
    }
    iconoEye.classList.toggle("fa-eye");
    iconoEye.classList.toggle("fa-eye-slash");
})
