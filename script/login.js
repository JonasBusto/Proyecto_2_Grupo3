// Obtengo los elementos que necesito
//Esto lo hizo fernanda
//const nombre = document.getElementById('nombre');
//const pass = document.getElementById('pass');
//const pass1 = document.getElementById('validarPass');
//nombre.addEventListener("blur", ()=> validar());
//pass.addEventListener("blur", ()=> validar());
//pass1.addEventListener("blur", ()=> validar());
//const validar = () => {
//    if (nombre.value === '') {
//        const errorNombre = document.getElementById('errorNombre');
//        errorNombre.innerText = 'Ingrese nombre';
 //       } else {
  //           errorNombre.innerText = '';
 //       }

  //  if (pass.value === '') {
    //    const errorPass = document.getElementById('errorPass');
      //  errorPass.innerText = 'Ingrese contraseña';
        //} else {
        //     errorPass.innerText = '';
        //}
        
        //if (pass1.value === '') {
        //    const errorPass1 = document.getElementById('errorPass1');
         //   errorPass1.innerText = 'Ingrese contraseña';
         //   } else {
         //       errorPass1.innerText = '';
        //}
    //}

  function iniciarSesion(){
     let usuario = document.getElementById('usuario').value
     let contraseña = document.getElementById ('contraseña').value
     let localSTG = JSON.parse(localStorage.getItem ('usuario')) || []
     let usuarioExiste = localSTG.filter(local => local.usuario === usuario)
    
    //corroboro que el usuario ingresado exista
     if(usuarioExiste.length > 0){
        if (usuarioExiste[0].contraseña === contraseña) {
             localStorage.setItem('id', JSON.stringify(usuarioExiste[0].id))
             //ternario para redirigiar si son admin o usuario
             usuarioExiste[0].rol === 'admin'
              ?
             location.href = './usuariosABM.html'
              :
             //location.href = agregar html vista de usuario
         }
     }
 }    
             //preguntar si se agregar alert con sweet alert o con inner cuando  los campos no estan lleno
   
     