var React = require('react'),
    assign = require('object.assign');

var FormattedMessage = React.createClass({
    displayName: 'FormattedMessage',
    propTypes: {
        message: React.PropTypes.string.isRequired
    },
    render: function(){
        var t = require('./translate');
        var props = assign({}, this.props);
        
        var message = props.message;
        delete props['message'];
        var options = props;
            
        return React.createElement(
            "span", null, t(message, options))
    }
});

module.exports = FormattedMessage;
