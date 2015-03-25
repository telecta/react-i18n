var React = require('react'),
    assign = require('object.assign');

var FormattedMessage = React.createClass({
    displayName: 'FormattedMessage',
    propTypes: {
        message: React.PropTypes.string.isRequired
    },
    render: function(){
        var i18n = (typeof I18n === 'undefined') ? require('i18n-js') : I18n;
        var props = assign({}, this.props);
        
        var message = props.message;
        delete props['message'];
        var options = props;
            
        return React.createElement(
            "span", null, i18n.translate(message, options))
    }
});

module.exports = FormattedMessage;
