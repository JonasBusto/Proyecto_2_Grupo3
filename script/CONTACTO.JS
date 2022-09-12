function validarContacto(){
   let contactoNombre = document.getElementById("contactoNombre").value;
   let contactoEmail = document.getElementById ("contactoEmail").value;
   let contactoComentario = document.getElementById ("contactoComentario").value;
   let array = []
   
   //if (contactoNombre === ""|| contactoEmail === ""||contactoComentario === ""){
   // document.getElementById("contactoNombre").className = "form-control is invalid"
    //document.getElementById("contactoEmail").className = "form-control is-invalid"
    //document.getElementById("contactoComentario").className = "form-control is-invalid"
   //}
   //else {
    //document.getElementById("contactoNombre").className = "form-control is valid"
    //document.getElementById("contactoEmail").className = "form-control is-valid"
    //document.getElementById("contactoComentario").className = "form-control is-valid"
   //}
//}
if (contactoNombre ===""){
    //alert("Falta completar nombre")
    document.getElementById("contactoNombre").className = "form-control is-invalid"
}
else{
   document.getElementById("contactoNombre").className = "form-control is-valid"
}
if (contactoEmail ===""){
   //alert("Falta completar nombre")
   document.getElementById("contactoEmail").className = "form-control is-invalid"
}
else{
  document.getElementById("contactoEmail").className = "form-control is-valid"
}
if (contactoComentario ===""){
   //alert("Falta completar nombre")
   document.getElementById("contactoComentario").className = "form-control is-invalid"
}
else{
  document.getElementById("contactoComentario").className = "form-control is-valid"
}
}
//falta agregar el de submit y e inicializar formulario