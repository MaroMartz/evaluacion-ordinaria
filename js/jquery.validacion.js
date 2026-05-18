(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
        } else {
            this.containerContenido = [
                "<div class=\"col\">",
                    "<h4>¡Gracias por tu compra!</h4>",
                    "<p>Estamos preparando tu pedido, puede pasar a recogerlo a apartir de las 4:00 p.m.</p>",
                    "<a href=\"productos.html\"><button class=\"btn btn-primary px-5\" >Volver</button> </a>",
                "</div>"
            ];
            $("#sec1Container").html(this.containerContenido.join(''));
            $("#sec1Container").addClass("pt-4");
            sessionStorage.clear();
            updateCanastaCounter();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

$(function(){

});

// $(function(){
//     this.forms = $(".needs-validation");
//     // Loop over them and prevent submission
//     this.validation = Array.prototype.filter.call(forms, function(form) {
//         $(this).on( "submit", function( event ) {
//             if (form.checkValidity() === false) {
//                 event.preventDefault();
//                 event.stopPropagation();
//             }
//             $(this).addClass( "was-validated" );
//         }, false);
//     });
// });