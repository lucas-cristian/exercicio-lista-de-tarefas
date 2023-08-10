$(document).ready(function () {

    let novaAtividade = [];

    $('form').on('submit', function (e) {
        e.preventDefault();

        const nomeAtividade = $('.nome-lista').val();
        novaAtividade = $('<li>' + nomeAtividade + '</li>');
        $(novaAtividade).appendTo('ul');

        $('.nome-lista').val('');
    });

    $('ul').on('click', 'li', function () {
        $(this).toggleClass('riscado');
    });
});


