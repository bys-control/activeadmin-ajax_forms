/**
 * display fancybox by ajax (load href as url)
 * @param href
 */
function fancybox(href) {
    $('#select2-drop').select2("close");
    $.fancybox({
            'width': "600px", // set the width
            'height': "600px", // set the height
            'href': href,
            'type': 'ajax',
            'transitionIn': 'elastic',
            'ajax': {
                complete: function(jqXHR, textStatus) {
                    initSelect2($('div.fancybox-skin'))
                }
            }
        }
    );
}
