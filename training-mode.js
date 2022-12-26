jQuery(function() {
    //     jQuery('#showall').click(function(){

    jQuery('.targetReason').hide();
    jQuery('.a-reason').show();

    //    });
    jQuery('.reason').click(function() {
        jQuery('.targetReason').hide();

        jQuery('#div' + $(this).attr('target')).show();
    });
});