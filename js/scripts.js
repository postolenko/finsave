var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock;

$(window).load(function() {

    $("select").each(function() {

        parentBlock = $(this).closest(".select_wrapp");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

});

$(window).resize(function() {

    $("select").each(function() {

        parentBlock = $(this).closest(".select_wrapp");

        parentBlock.find(".select2-container").css({
            "width" : parentBlock.width() + "px"
        });

    });

});

$(document).ready(function() {


   


});