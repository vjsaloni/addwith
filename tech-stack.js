jQuery(function() {
    //     jQuery('#showall').click(function(){

    jQuery('.img-plat').hide();
    jQuery('.active-tech').show();

    //    });
    jQuery('.tech').click(function() {
        jQuery('.img-plat').hide();

        jQuery('.abc' + $(this).attr('target')).prevAll().css({ 'color': 'black' });
        jQuery('.abc' + $(this).attr('target')).nextAll().css({ 'color': 'black' });
        jQuery('#tech' + $(this).attr('target')).show();
        jQuery('.abc' + $(this).attr('target')).css({ 'color': 'blue' });
    });

    jQuery('.tech').click(function() {

        console.log("hekk");
        jQuery('.tech:after').css({
            'transform': `translateX(30px)`
        });
        jQuery('.tech:after').css({
            'color': 'blue'
        });
    });
});


// $('.img-plat').hide(); //hide all the reason text
// $('.active-tech').show(); //hide all the reason text


// $('.reason').on('click', function() {
//   $(this).next('.reasonText').slideToggle('slow');
// });