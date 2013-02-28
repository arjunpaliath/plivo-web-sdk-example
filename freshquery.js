setTimeout(function() {
    /*$('.symbols-ac-viewingon').click(function(e) {
        $("#custom_ticket_form").submit();
    });*/
    var pagetitle = jQuery('.subject').text();
    document.title = pagetitle;
    jQuery('#javascript_plugin_20236').hide();
    jQuery('.note-private').parent().parent().css('background-color','#FFFBC9');
    jQuery('.description a[href^="http://"]').attr('target','_blank');
    jQuery('.button-container .uiButton').removeClass('special');
    jQuery('#send_resolve_btn').addClass('special');
    jQuery("#helpdesk_ticket_group_id").change(function() { 
        changeforming('1');
    });
    var group = jQuery("#helpdesk_ticket_group_id").val();
    var agentname = jQuery('.header_links a.nav-trigger').html();
    if(group !== "68267"){
        jQuery('#helpdesk_ticket_responder_id').find('option:contains('+agentname+')').prop('selected', true);
    }
    changeforming('0');
    setInterval(checkviewing, 1500);
    checkviewing();
    function checkviewing(){
        if(jQuery("#agents_viewing, #agents_replying, #notification").hasClass('active')){
            console.log("hasclass");
            jQuery('.request-title').css('background-color','rgba(0,0,255,0.7)');
            if(jQuery("#agents_replying, #notification").hasClass('active')){
                jQuery('#ReplyButton').hide();
            }
            else{
                jQuery('#ReplyButton').show();
            }
        }
        else{
            jQuery('body .request_details').css('background-color','rgba(255,255,255,1)');
            jQuery('#ReplyButton').show();
        }
    }
},2500);
function changeforming(onchange){
    console.log("interval set");
    console.log(onchange);
    var tag = null;
    var cat = null;
    var pakket = null;
    var product = null;
    var selecting = jQuery('#helpdesk_ticket_group_id').val();
    setTimeout(function() {
        var agentname = jQuery('.header_links a.nav-trigger').html();
        console.log(agentname);
        console.log("selected"+selecting);
        if(selecting !== "68267"){
            jQuery('#helpdesk_ticket_responder_id').find('option:contains('+agentname+')').prop('selected', true);
        }
    },1500);
    if(selecting == '67958'){
        var tag = "WSM:";
        if(onchange === "1"){
            var cat = "WSM: Dispatch";
            var pakket = "Websitemaker pakket";
            var product = "16873";
        }
    }
    if(selecting == '68261'){
        //var tag = "PLUS:","HOS:","ALG:";
        if(onchange === "1"){
            var cat = "ALG: Informatief";
            var pakket = "Webhosting Plus pakket";
            var product = "17341";
        }
    }
    else{
        jQuery("#helpdesk_ticket_custom_field_categorie_20236 option").removeClass('hideselect');
    }
    jQuery("#helpdesk_ticket_custom_field_categorie_20236 option").removeClass('hideselect');
    if(tag !== null){
        jQuery("#helpdesk_ticket_custom_field_categorie_20236 option").addClass('hideselect');
        jQuery("#helpdesk_ticket_custom_field_categorie_20236").find('option[value~="'+tag+'"]').removeClass('hideselect');
    }
    if(cat !== null){
        jQuery("#helpdesk_ticket_custom_field_categorie_20236").find('option[value="'+cat+'"]').prop('selected', true);
    }
    if(pakket !== null){
        jQuery("#helpdesk_ticket_custom_field_soort_vraag_offline_20236").find('option[value="'+pakket+'"]').prop('selected', true);
    }
    if(product !== null){
        jQuery("#helpdesk_ticket_product_id").find('option[value="'+product+'"]').prop('selected', true);
    }
}
