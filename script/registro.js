function validarRegistro(){
   
    let usuario = document.getElementById ('usuario').value;
    //let emailUsuario = document.getElementById ('emailUsuario').value;
    let contraseña = document.getElementById ('contraseña').value;
    let validarContraseña = document.getElementById ('validarContraseña').value;
    let localSTG = JSON.parse (localStorage.getItem('usuario')) || []
    const array = []

    if (usuario === ''|| contraseña === ''|| validarContraseña ===''){
        Swal.fire({
        title: 'Formulario en blanco',
        icon: 'warning',
        confirmButtonText: 'Aceptar',
     })
    }
    else {
        /*buscar usuario existente*/
        for (let i= 0; i <localSTG.lenght; i++){
            const usuarioEnLocalSTG = localSTG[i];
            array.push(usuarioEnLocalSTG)
        }
        //ver si hay mismos usuarios
      let usuarioExistente = localSTG.filter(local => local.usuario === usuario)
       
      //preguntar si agrego sweetalert 'usuario ya existe' o alert, console log

        //crear usuario

        if (usuarioExistente.lenght === 0){
            if (contraseña === validarContraseña){
            array.push( {id: localSTG.length + 1, usuario, contraseña, role: 'admin'})
            localStorage.setItem('usuario', JSON.stringify(array))
            console.log (array)
        } else {
            Swal.fire({
                title: 'contraseñas no son iguales',
                icon: 'warning',
                confirmButtonText: 'Aceptar',
             })
        }
        } else{Swal.fire({
            title: 'usuario ya existe',
            icon: 'warning',
            confirmButtonText: 'Aceptar',
         })

        }
        

    }
}
