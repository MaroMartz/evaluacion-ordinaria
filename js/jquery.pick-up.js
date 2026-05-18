$(function(){

    this.precio = 0;
    
    for (let i = 0; i < sessionStorage.length; i++) {
        this.preSplit = sessionStorage.getItem(sessionStorage.key(i));

        this.numero = sessionStorage.key(i).replace("articulo", "");

        if (this.preSplit) {
            this.articulo = this.preSplit.split(',');
        }
        
        if (this.articulo) {
            this.tr = ["<tr id=\"articulo" + this.numero + "\">",
                                "<td class=\"pt-2 pb-2\">",
                                    "<div class=\"d-flex align-items-center\" style=\"gap: 18px;\">",
                                        "<img class=\"productimg\" src=\"" + this.articulo[0] + "\">",
                                        "<div class=\"cantidad\">",
                                            "<h4>" + this.articulo[1] + "</h4>",
                                            "<div class=\"cantidadContent\">",
                                                "<div>",
                                                    "<p class=\"mb-1\">Cantidad:</p>",
                                                    "<p class=\"mb-0\">" + this.articulo[2] + "</p>",
                                                "</div>",
                                                "<div>",
                                                    "<p  class=\"mb-1\">Precio a pagar:</p>",
                                                    "<p class=\"mb-0\">$" + this.articulo[3] + "</p>",
                                                "</div>",
                                            "</div>",
                                        "</div>",
                                        "<div class=\"cantidadDelete\">",
                                            "<span data-articulo=\"articulo" + this.numero + "\" class=\"material-symbols-outlined\"\>",
                                            "delete",
                                            "</span>",
                                        "</div>",
                                    "</div>",
                                "</td>",
                            "</tr>"];
            
            $("#tableHeader").after(this.tr.join(''));
            this.precio += Number(this.articulo[3]);
        }
    }

    $("#total").text("TOTAL: $" + this.precio)

    $(".cantidadDelete span").click(function(){
        this.llaveParaBorrar = $(this).data("articulo");
        console.log(sessionStorage.getItem(this.llaveParaBorrar));
        this.paraBorrar = sessionStorage.getItem(this.llaveParaBorrar).split(',');
        this.precio = $("#total").text().replace("TOTAL: $", "");
        console.log(this.precio);
        console.log(this.paraBorrar[3]);
        this.precio = Number(this.precio) - Number(this.paraBorrar[3]);
        console.log(this.precio)
        $("#total").text("TOTAL: $" + Number(this.precio))

        sessionStorage.removeItem(this.llaveParaBorrar);
        $("#" + this.llaveParaBorrar).text("");
    });
});