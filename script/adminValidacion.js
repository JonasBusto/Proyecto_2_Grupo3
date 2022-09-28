//Funcion autoejecutable que evalua al usuario autenticado, y en función de eso re-dirige o 
// no a la pagina correspondiente
(
    function validarDato() {
        /*buscar id en localstg*/
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || [];
        let usuarioExistente = localSTG.filter(local => local.id === Number(id))

        if (id === null) {
            location.href = './login.html'
        } else if (usuarioExistente[0].role === 'usuario') {
            location.href = './paginaUsuario.html'
        }

    }
)()

// Permite vaciar el localStorage cuya key este asociada al usuario autenticado
const logout = () => {
    localStorage.removeItem('id')
    location.href = './login.html'
}