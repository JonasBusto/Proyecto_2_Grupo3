function validarRegistro(){
   
    let usuario = document.getElementById ('usuario').value;
    //let emailUsuario = document.getElementById ('emailUsuario').value;
    let contraseña = document.getElementById ('contraseña').value;
    let validarContraseña = document.getElementById ('validarContraseña').value
    //traer valor al localstg. parse transforma a objeto
    let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || []
    
    const array = []

    if (usuario.trim() === ''|| contraseña.trim() === ''|| validarContraseña.trim() ===''){        
        Swal.fire({
        title: 'CAMPOS INCOMPLETO',
        icon: 'warning',
        confirmButtonText: 'ACEPTAR'
     })
    } else {
        /*buscar usuario existente*/
        for (let i= 0; i <localSTG.length; i++){
            const usuarioEnLocalSTG = localSTG[i];
            array.push(usuarioEnLocalSTG)
        }
        //ver si hay mismos usuarios
      let usuarioExistente = localSTG.filter(local => local.usuario.trim() === usuario.trim())
       
      //preguntar si agrego sweetalert 'usuario ya existe' o alert, console log

        //crear usuario
console.log(usuarioExistente)
        if (usuarioExistente.length === 0){
            if (contraseña === validarContraseña){
            array.push({id: localSTG.length + 1, usuario: usuario.trim(), contraseña: contraseña.trim(), role: 'usuario', habilitado: false})
            localStorage.setItem('Usuarios', JSON.stringify(array))
            console.log (array)
            Swal.fire({
                title: 'REGISTRO EXITOSO',
                icon: 'success',
                html: 'Debe esperar a que el <b>Administrador</b> lo de <b>ALTA</b> en el sistema para poder <b>AUTENTICARSE</b> al mismo.',
                confirmButtonText: 'ACEPTAR',
                 })
            document.getElementById ('usuario').value=''
            document.getElementById ('contraseña').value=''
            document.getElementById ('validarContraseña').value=''
        } else {
            Swal.fire({
            title: 'LAS CONTRASEÑAS NO SON IGUALES',
            icon: 'warning',
            confirmButtonText: 'ACEPTAR',
            confrimButtonColor: '#3085d6'
             })
        }
        } else{
            Swal.fire({
            title: 'EL USUARIO YA EXISTE',
            icon: 'warning',
            confirmButtonText: 'ACEPTAR',
             })

        }
        

    }
}