$(document).ready(function() {

    function precoAVista(card) {
        
        var percent = parseFloat(card.find('.col-dois span').data('desconto-porcentagem'));
        var textoPreco = "";
        
        if (card.find(".head .wd-product-price-description.sale-price span").length) {
            textoPreco = card.find('.head .wd-product-price-description.sale-price span').first().text();
        }

        var vl = parseFloat(textoPreco.replace('R$', '').replace(/\./g, '').replace(',', '.').trim());

        var calc = (vl - ((vl * percent) / 100)).toFixed(2).replace('.', ',');
        
        card.find('.preco-a-vista').text("R$ " + calc);
    }

    $('.card-produto').each(function() {
        precoAVista($(this));
    });


    $('.btn-selecionar').on('click', function() {

        var card = $(this).closest('.card-produto');
        
        var nomeProduto = card.find('.nome-produto').text().trim();
        var corSelecionada = card.find('.variacao-cor').val();
        
        if (corSelecionada === "") {
            card.find('.resultado').text("Selecione uma cor antes de continuar").css("color", "#d32f2f");
        } else {
            card.find('.resultado').text("Adicionado: " + nomeProduto + " (" + corSelecionada + ")").css("color", "#2e7d32");
        }
    });

});