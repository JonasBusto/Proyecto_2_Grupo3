// Obtengo los elementos que necesito
const nombre = document.getElementById('nombre');
const pass = document.getElementById('pass');
const pass1 = document.getElementById('validarPass');

nombre.addEventListener("blur", ()=> validar());
pass.addEventListener("blur", ()=> validar());
pass1.addEventListener("blur", ()=> validar());

const validar = () => {
    if (nombre.value === '') {
        const errorNombre = document.getElementById('errorNombre');
        errorNombre.innerText = 'Ingrese nombre';
        } else {
             errorNombre.innerText = '';
        }

    if (pass.value === '') {
        const errorPass = document.getElementById('errorPass');
        errorPass.innerText = 'Ingrese contraseña';
        } else {
             errorPass.innerText = '';
        }
        
        if (pass1.value === '') {
            const errorPass1 = document.getElementById('errorPass1');
            errorPass1.innerText = 'Ingrese contraseña';
            } else {
                errorPass1.innerText = '';
        }
    }






