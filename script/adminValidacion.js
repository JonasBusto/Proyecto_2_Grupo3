//Funcion que se auto ejecuta
(
    function validarDato() {
         /*buscar id en localstg*/
        let id = localStorage.getItem('id')
        let localSTG = JSON.parse(localStorage.getItem('Usuarios')) || [];
        let usuarioExistente = localSTG.filter(local => local.id === Number(id))

        console.log(id)
       

        if (id === null) {
            location.href = './login.html'
        } else if(usuarioExistente[0].role === 'user') {
            location.href = './paginaUsuario'
        }

    }
)()

const logout = () => {
    localStorage.removeItem('id')
    location.href = './login.html'
}