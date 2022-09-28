//Funcion autoejecutable que evalua al usuario autenticado, y en función de eso re-dirige o 
// no a la pagina correspondiente
(
    function validarDato() {
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || [];
        let usuarioExistente = localSTG.filter(local => local.id === Number(id))

        if (id !== null) {
            if (usuarioExistente[0].role === 'usuario') {
                location.href = '/paginaUsuario.html'
            } else {
                location.href = '/usuariosABM.html'
            }
        }

    }
)()
