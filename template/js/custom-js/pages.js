// Add your custom JavaScript for storefront pages here.

const isMobile = window.innerWidth < 990 ? true : false;
if(isMobile){
    $('#search-bar').appendTo('#search-mobile');
    $('#top-user').appendTo('#user-mobile')
}
if(ecomPassport.getCustomerName() != ""){
    $('#username_').text(ecomPassport.getCustomerName())
    $('#functions_').html('Acesse sua <a href="/app/#/account/">conta</a> ou veja seus <a href="href="/app/#/account/orders">pedidos</a>.')
}
