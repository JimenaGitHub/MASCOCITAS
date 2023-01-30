// Calling the log in function validation.

function logup(){
    if (document.getElementById("nombre").value == ""
    || document.getElementById("apellido").value == ""
    || document.getElementById("correo").value == ""
    || document.getElementById("pass").value == ""
    || document.getElementById("pass2").value == "")
    {
      alert("nombre, apellido, correo, clave y repetir clave están vacíos")
    }
}