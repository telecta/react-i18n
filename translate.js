var assign = require('object-assign');

function fallback(i18n, message, options){
    var lookup = i18n.lookup(message);
    return lookup == undefined ?
        fallbackSearch(i18n, message, options) : lookup;
}

function fallbackSearch(i18n, message, options){
    scope = options['scope'] || "";
    var scopes = scope.split('.');

    if(scopes.length == 1){ // no more fallback
        return undefined;
    }else{
        scopes = scopes.slice(0, scopes.length-1);
        options = assign({}, options);
        options['scope'] = scopes.join('.');

        var translated = i18n.translate(message, options);
        return !translated || translated.indexOf('[missing') == 0 ?
            fallbackSearch(i18n, message, options) : translated;
    }
}


module.exports = function(message, options){
    var i18n = (typeof I18n === 'undefined') ? require('i18n-js') : I18n;
    var translated = i18n.translate(message, options);

    return !translated || translated.indexOf('[missing') == 0 ?
        fallback(i18n, message, options) || translated : translated;
}
