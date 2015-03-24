var i18n = (typeof I18n === 'undefined') ? require('i18n-js') : I18n,
    assign = require('object.assign');

module.exports = {
    FormattedMessage: require('./formatted-message'),
    Mixin: {
        getIntlMessage: function(message, options){
            return (I18n || i18n).translate(
                    message, options);
        }
    }
}
