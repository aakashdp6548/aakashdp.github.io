$(document).ready(function(){

    var construction = $(".construction");
    var heading = $(".heading");
    var footer = $("#footer");

    function moveFooter() {

        if ($("body").height() > $(window).height()) {
            footer.removeClass("bottomOfScreen");
            footer.addClass("afterElements");
            console.log("scroll" + footer.attr("class"));
        }
        else {
            footer.removeClass("afterElements");
            footer.addClass("bottomOfScreen");
            console.log("no scroll" + footer.attr("class"));
        }
    }

    construction.hide();
    footer.addClass("bottomOfScreen");

    $("#tab1").click(function(){
        construction.show();
        heading.hide();
        moveFooter();
    });

    $("#tab2").click(function(){
        construction.show();
        heading.hide();
        moveFooter();
    });

    $("#home").click(function(){
        construction.hide();
        heading.show();
        moveFooter();
    });
});
