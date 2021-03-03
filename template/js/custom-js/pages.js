// Add your custom JavaScript for storefront pages here.

const isMobile = window.innerWidth < 990 ? true : false;
if(isMobile){
    $('#search-bar').appendTo('#search-mobile');
    $('#top-user').appendTo('#user-mobile');
    $('#search-bar').addClass('show');
}
if(ecomPassport.getCustomerName() != ""){
    $('#username_').text(ecomPassport.getCustomerName())
    $('#functions_').html('Acesse sua <a href="/app/#/account/">conta</a> ou veja seus <a href="href="/app/#/account/orders">pedidos</a>.')
}
$('.header__search-input').keyup(function(){
    $('body .search__input').val($(this).val()).[0].dispatchEvent(new Event('input'));
});
$('body').click(function(e){
    if($(e.target).closest('.header__search').length == 0){
        $('#instant-search .search__status .close').click();
    }
});
