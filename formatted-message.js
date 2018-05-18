const createReactClass = require('create-react-class'),
  React = require('react'),
  PropTypes = require('prop-types'),
  assign = require('object-assign');

const FormattedMessage = createReactClass({
  displayName: 'FormattedMessage',
  propTypes: {
    message: PropTypes.string.isRequired
  },
  render: function() {
    var t = require('./translate');
    var props = assign({}, this.props);

    var message = props.message;
    delete props['message'];
    var options = props;

    return React.createElement('span', null, t(message, options));
  }
});

module.exports = FormattedMessage;
