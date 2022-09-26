(
    function validarDato() {
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || [];
        let usuarioExistente = localSTG.filter(local => local.id === Number(id))

        console.log(id)
       

        if(usuarioExistente[0].role === 'usuario') {
            location.href = '/paginaUsuario.html'
        } else {
            location.href = '/usuariosABM.html'
        }

    }
)()
