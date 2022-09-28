if (JSON.parse(localStorage.getItem("Usuarios")) === null) {
    localStorage.setItem("Usuarios", JSON.stringify([{ id: 1, usuario: "Administrador", contraseña: "admin", role: 'admin', habilitado: true }]))
}

function validarRegistro() {

    let usuario = document.getElementById('usuario').value;
    //let emailUsuario = document.getElementById ('emailUsuario').value;
    let contraseña = document.getElementById('contraseña').value;
    let validarContraseña = document.getElementById('validarContraseña').value
    //traer valor al localstg. parse transforma a objeto
    let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || []

    const array = []

    if (usuario.trim() === '' || contraseña.trim() === '' || validarContraseña.trim() === '') {
        Swal.fire({
            title: 'CAMPOS INCOMPLETO',
            icon: 'warning',
            confirmButtonText: 'ACEPTAR'
        })
    } else {
        /*buscar usuario existente*/
        for (let i = 0; i < localSTG.length; i++) {
            const usuarioEnLocalSTG = localSTG[i];
            array.push(usuarioEnLocalSTG)
        }
        //ver si hay mismos usuarios
        let usuarioExistente = localSTG.filter(local => local.usuario.toLowerCase().trim() === usuario.toLowerCase().trim())

        //preguntar si agrego sweetalert 'usuario ya existe' o alert, console log

        //crear usuario
        console.log(usuarioExistente)
        if (usuarioExistente.length === 0  && usuario.toLowerCase().trim() !== "admin") {
             /*contraseña.addEventListener("keyup", () => {
                    if (contraseña.value.length > 11) {
                        Swal.fire({
                            title: 'máximo de caracteres superados',
                            text: 'introduce hasta 10 caracteres permitido',
                            icon: 'warning',
                            confirmButtonText: 'ACEPTAR',
                        })}
                    else if (contraseña.value.length <3){
                            Swal.fire({
                            title: 'contraseña demasiado corta',
                            icon: 'warning',
                            confirmButtonText: 'ACEPTAR',
                        })
                    }    
    
                    })*/
            if (contraseña === validarContraseña) {
                array.push({ id: localSTG.length + 1, usuario: usuario.trim(), contraseña: contraseña.trim(), role: 'usuario', habilitado: false })
                localStorage.setItem('Usuarios', JSON.stringify(array))
                console.log(array)
                Swal.fire({
                    title: 'REGISTRO EXITOSO',
                    icon: 'success',
                    html: 'Debe esperar a que el <b>Administrador</b> lo dé de <b>ALTA</b> en el sistema para poder <b>AUTENTICARSE</b> al mismo.',
                    confirmButtonText: 'ACEPTAR',
                })
                document.getElementById('usuario').value = ''
                document.getElementById('contraseña').value = ''
                document.getElementById('validarContraseña').value = ''
            } else {
                Swal.fire({
                    title: 'LAS CONTRASEÑAS NO SON IGUALES',
                    icon: 'warning',
                    confirmButtonText: 'ACEPTAR'
                })
            }
        } else {

            // VERIFICAR SI SE QUIERE REGISTRAR PONIENDO DE NOMBRE "Administrador"

            if (usuario.toLowerCase().trim() === "administrador" || usuario.toLowerCase().trim() === "admin") {
                console.log(usuario.toLowerCase())
                Swal.fire({
                    title: 'SOLO EL ADMINISTRADOR PUEDE LLAMARSE ASI',
                    icon: 'error',
                    confirmButtonText: 'ACEPTAR'
                })
            }
            else {
                Swal.fire({
                    title: 'EL USUARIO YA EXISTE',
                    icon: 'warning',
                    confirmButtonText: 'ACEPTAR',
                })
            }
        }


    }
}

const contraseña = document.getElementById('contraseña');
const validarContraseña = document.getElementById('validarContraseña');
const iconoPrimerCandado = document.getElementById("1er-icono-candado");
const iconoSegundoCandado = document.getElementById("2do-icono-candado");
const divPrimerCandado = document.getElementById("div-primer-candado");
const divSegundoCandado = document.getElementById("div-segundo-candado");

divPrimerCandado.addEventListener("click", ()=> {
    if(contraseña.type === "password") {
        contraseña.type = "text";
    }else {
        contraseña.type = "password";
    }
    iconoPrimerCandado.classList.toggle("fa-lock");
    iconoPrimerCandado.classList.toggle("fa-lock-open");
})

divSegundoCandado.addEventListener("click", ()=> {
    if(validarContraseña.type === "password") {
        validarContraseña.type = "text";
    }else {
        validarContraseña.type = "password";
    }
    iconoSegundoCandado.classList.toggle("fa-lock");
    iconoSegundoCandado.classList.toggle("fa-lock-open");
})
