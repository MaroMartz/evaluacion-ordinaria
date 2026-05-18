$(function(){
    
    $("select").change(function(){
        this.card = $(this).parents(".card");
        this.precio = this.card.data("precio");
        this.cantidad = this.card.find("select").val();
        this.card.find(".precio").text("$" + this.precio * this.cantidad);
    });
    
    $(".card-footer").click(function(){
        this.storage = sessionStorage;
        this.card = $(this).parents(".card");

        this.precio = this.card.data("precio");
        this.precioElemento = this.card.find(".precio");
        this.nombreDeProducto = this.card.find(".card-title").text();

        this.cantidad = this.card.find("select").val();
        this.cantidadTexto = this.card.find("select option:selected").text();
        this.precioElemento.text("$" + this.precio * this.cantidad);
        this.img = this.card.find(".card-img-top").attr("src");

        console.log(this.nombreDeProducto);
        console.log(this.img);
        console.log(this.cantidadTexto);
        console.log(this.precioElemento.text());

        this.articulo = [this.img, this.nombreDeProducto, this.cantidadTexto, this.precio * this.cantidad]
        if (this.storage.length) {
            this.max = 1;
            for (let i = 0; i < sessionStorage.length; i++) {
                this.numero = sessionStorage.key(i).replace("articulo", "");
                console.log(this.numero)
                if (this.numero > this.max) {
                    this.max = this.numero;
                }
            }
            this.llave = "articulo" + (Number(this.max) + 1).toString();
            this.storage.setItem(this.llave, this.articulo);
            console.log(this.storage.getItem(this.llave));
        } else {
            this.storage.setItem("articulo1", this.articulo);
            console.log(this.storage.getItem("articulo1"));
        }
    });

    
});