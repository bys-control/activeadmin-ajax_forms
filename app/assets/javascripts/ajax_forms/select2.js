function addslashes( str ) {
    return (str + '').replace(/[\\"']/g, '\\$&').replace(/\u0000/g, '\\0');
}

function setSelectResult(destinationField, key, value) {
    $(destinationField).select2('data', {id: key, text: value});
}

/**
 * init Select2 over specific selectors
 * If you pass specificSelector, only apply select2 over that selector elsewhere apply to all that has class select2-autocomplete => $('.select2-autocomplete');
 *
 * @param specificSelector
 */
function initSelect2Autocomplete(specificSelector) {
    var onlySpecificSelector = $(specificSelector).find('.select2-autocomplete');
    var selectorWhereInitSelect2 = '';
    if (onlySpecificSelector.length == 1) {
        selectorWhereInitSelect2 = onlySpecificSelector;
    }
    else {
        selectorWhereInitSelect2 = $('.select2-autocomplete');
    }
    selectorWhereInitSelect2.each(function (i, e) {
        var select = $(e);
        var defaultValue = select.val();
        var sourcePath = select.data('source');
        var dependent = select.data("dependent");

        options = {};
        options.width = 'auto';
        options.allowClear = true;
        options.placeholder = "Seleccione una opción";

        var initSelectionForSingle = function (select, callback) {
            if (defaultValue !== "") {
                $.ajax(sourcePath, {
                    data: {
                        q_id: defaultValue
                    },
                    dataType: "json"
                }).done(function (data) {
                    data = {id: data[0].id, text: data[0].text};
                    callback(data);
                });
            }
        };

        var initSelectionForMultiple = function (select, callback) {
            select.val().split(",").each(function () {
                data.push({id: this, text: this});
            });
            callback(data);
        };

        var data = [];
        if (typeof select.data('multiple') !== 'undefined') { //multiple select with multiple=>true option
            options.multiple = select.data('multiple');
            if (options.multiple == true) {
                options.initSelection = initSelectionForMultiple;
            } else { //single select with multiple=>false option
                options.initSelection = initSelectionForSingle;
            }
        }
        else { // undefined -> single select by default
            options.initSelection = initSelectionForSingle;
        }

        //options.minimumInputLength=3;
        if (select.hasClass('ajax')) {
            options.ajax = {
                quietMillis: 1500,
                url: sourcePath,
                dataType: 'json',
                data: function (term, page) {
                    selectorValue="";
                    ransackFilter="";
                    dependentField=select.data("dependent");
                    dependentSelectHash={}
                    if (dependentField) {
                        selectorValue=$("#"+dependentField.selectorId).val();
                        ransackFilter=dependentField.ransackFilter;
                        dependentSelectHash={"ransackFilter": ransackFilter, "selectorValue": selectorValue};
                    }
                    return {
                        q: term,
                        page_limit: page,
                        page: page,
                        dependentSelect: dependentSelectHash
                    }
                },
                results: function (data, page) {
                    return {
                        results: data
                    }
                }
            };
        }

        options.formatNoMatches = function (term) {
            var destinationSelectorId=select.attr('id');
            var modalPath = "'" + select.data('modal') + "/" + btoa(term)+"/"+encodeURI(destinationSelectorId) +"'";
            return '<a href="#" class="btn btn-xs btn-primary add-item-button pull-right" onclick="return fancybox(' + modalPath + ');">Agregar y editar: "' + term + '"</a>';
        };
        options.escapeMarkup = function (m) {
            return m;
        };
        select.select2(options);
    });
}