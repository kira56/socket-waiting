// comando para establecer la conexion

var socket = io();
var label = $('#lblNuevoTicket')

socket.on('connect', function () {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function () {
    console.log('Desconectad del servidor')
})

// Listener que escuche el evento del estado actual , y cuando reciban el objeto e imprimir en la pagina actual
socket.on('estadoActual', function (respuesta) {
    console.log('Estado:', respuesta)
    label.text(respuesta.actual)
})

$('button').on('click', function () {

    socket.emit('siguienteTicket', null, function (siguienteTicket) {
  
            label.text(siguienteTicket)
    });    // comunicacion con el siguiente ticket

})