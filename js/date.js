//Obtenemos una fecha
const date = new Date();
console.log('La fecha es:', date);

// Obtengo el elemento contenedor
const container = document.getElementById('task-container');
//console.log('elemento HTML: ', container);

//imprimo la fecha en el contenedor
console.log('<p>' + date  + '</p>');
container.innerHTML = '<p>' + date  + '</p>' ;


// BOTON WHATSAPP
$('#myDiv').floatingWhatsApp({
    phone: '56993443055',
    popupMessage: '¿Hola, cómo podemos ayudarte?',
    showPopup: true,
    position:'right',
});

// Funcion para hora
setInterval(() => {
    // console.log('ejecucion setTimeOut',new Date())
    $('#date').html(new Date())    
  }, 1000)