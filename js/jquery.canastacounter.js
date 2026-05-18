function updateCanastaCounter() {
    this.articuloCantidad = sessionStorage.length;
    console.log(this.articuloCantidad);
    
    if (this.articuloCantidad > 0) {
        if (this.articuloCantidad > 9) {
            this.counter = "add_circle";
        } else {
            this.counter = "counter_" + this.articuloCantidad;
        }
    } else {
        this.counter = "";
    }
    $("#counter").text(this.counter);
    console.log(this.counter);
}

$(function(){
    updateCanastaCounter();

    $(".card-footer").click(function(){
        updateCanastaCounter();
    })

    $(".cantidadDelete span").click(function(){
        updateCanastaCounter();
    })
});