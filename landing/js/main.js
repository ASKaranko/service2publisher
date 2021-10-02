$(function () {

    $('[data-href]').on('click', function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).data('href')).offset().top
        }, 800)
    })

})