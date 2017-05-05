$(document).ready(function(){

    var construction = $(".construction");
    var heading = $(".heading");
    var footer = $("#footer");

    construction.hide();
    footer.addClass("bottomOfScreen");

    $("#tab1").click(function(){
        construction.show();
        heading.hide();
        footer.removeClass("bottomOfScreen");
        footer.addClass("afterElements");
    });

    $("#tab2").click(function(){
        construction.show();
        heading.hide();
        footer.removeClass("bottomOfScreen");
        footer.addClass("afterElements");
    });

    $("#home").click(function(){
        construction.hide();
        heading.show();
        footer.removeClass("afterElements");
        footer.addClass("bottomOfScreen");
    });
});
