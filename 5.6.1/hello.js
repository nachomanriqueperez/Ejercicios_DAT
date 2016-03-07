$( document ).ready(function() {
        $( "a" ).click(function( event ) {
            alert( "Hola!" );
            //event.preventDefault(); No realiza la accion de seguir el enlace.
        });
});
