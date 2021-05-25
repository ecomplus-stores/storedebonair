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

$('.apx_form').submit(function(e){
    e.preventDefault();
    var mail = [];
    mail.form = $(this);
    mail.destination = $(this).find('[name="destination]').val() != undefined ? $(this).find('input[name="destination"]').val() : "contato@debonair.com.br";
    mail.subject = $(this).find('input[name="subject"]').val() != undefined ? $(this).find('input[name="subject"]').val() : "Formulário de Contato";
    mail.body = "";
    mail.replyTo = $(this).find('input[name="email"]').val();

    mail.form.find('input:not([type="hidden"]), textarea').each(function(){
        mail.body = mail.body + $(this).closest('div').find('label').text() + ': ' + $(this).val() + '<br>';
    });

    axios.post('https://us-central1-marketingtools-ecomplus.cloudfunctions.net/app/alpix/apx_sendmail', {
        storeId : storefront.settings.store_id,
        destination : mail.destination,
        subject : mail.subject,
        content : mail.body,
        reply_mail: mail.replyTo
    })
    .then(function(response){
        alert(response.data.msg)
        if(!response.data.error){
            mail.form.find('input[type="text"],input[type="email"],textarea,input[type="tel"]').val('')
        }
    })
    
});