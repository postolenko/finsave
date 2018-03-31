var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

var parentBlock;
var popupName;
var popupBlock;

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


       $(function() {

        $(".show_popup").click(function(e) {

            e.preventDefault();

            popupName = $(this).attr("data-popup-name");
            popupBlock = $("[data-popup = '"+ popupName +"']");

            popupBlock.fadeIn(400);

        });

         $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                if ( popupBlock.is(":visible") ) {

                    popupBlock.fadeOut(300);

                }

            }

        });

        $(".close-popup, .close-popup_2").click(function() {

            popupBlock = $(this).closest(".popup_wrapp");

            popupBlock.fadeOut(300);

        });


        $(document).mouseup(function (e){

            var hide_element = $('.popup');

            if (!hide_element.is(e.target)

                && hide_element.has(e.target).length === 0) {

                hide_element.closest(".popup_wrapp").fadeOut(300);
            }

        });

    });

    $(function() {

      $("input[type='tel']").mask("+7 (999) 999-99-99");

    });


});