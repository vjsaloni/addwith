jQuery(function() {
    //     jQuery('#showall').click(function(){

    jQuery('.targetReason').show();
    jQuery('.a-reason').show();

    //    });
    jQuery('.reason').click(function() {
        jQuery('.targetReason').hide();
        // jQuery('.active').css({'background-color':'white'});

        jQuery('.reason' + $(this).attr('target')).css({ 'background-color': 'white' });
        jQuery('.reason' + $(this).attr('target')).prevAll().css({ 'background-color': 'rgb(240, 239, 239)' });
        jQuery('.reason' + $(this).attr('target')).nextAll().css({ 'background-color': 'rgb(240, 239, 239)' });
        // jQuery('#div'+$(this).attr('target')).nextAll().css({'background-color':'black'});
        jQuery('#div' + $(this).attr('target')).show();
    });

});