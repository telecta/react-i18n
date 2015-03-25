var assign = require('object.assign');

module.exports = {
    FormattedMessage: require('./formatted-message'),
    Mixin: {
        getIntlMessage: function(message, options){
            var i18n = (typeof I18n === 'undefined') ? require('i18n-js') : I18n;
            var t = i18n.translate(message, options);
             
            if(t.indexOf('[missing') == 0){
                return i18n.lookup(message)
            }else{
                return t;
            }
        }
    }
}
