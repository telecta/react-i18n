# react-i18n
This module integrates with [rails-i18n](https://github.com/svenfuchs/rails-i18n) gem, and built as a wrapper on top of [i18n-js](https://github.com/fnando/i18n-js).

## Basic Setup
### Install module

	$ npm install --save i18n-js react-i18n
	

### Setting up i18n-js

In Gemfile
	
	gem 'i18n-js'
	
In your view *.haml

	:javascript
    	I18n.defaultLocale = "#{I18n.default_locale}";
    	I18n.locale = "#{I18n.locale}";
    	I18n.fallbacks = true;
    
    = javascript_include_tag "i18n"
	= javascript_include_tag "translations"
	
For more options/details, please refer to the documentation at [i18n-js](https://github.com/fnando/i18n-js).
	
## Usage
### React Mixin

	import ReactI18n from 'react-i18n'
	
	let OrderFormButton = React.createClass({
		mixins: [ReactI18n.Mixin],
		render () => {
			let t = this.getIntlMessage; // ReactI18n method
			
			console.log(I18n.locale);
			// "en"
			
			console.log(I18n.translations); 
			// {en: {order_form: { btn_cancel: 'Cancel Order #%{order_id}'}} 
						
			let tOptions = {scope: 'order_form', order_id: this.props.orderId};
			return (
				<button>
					{t('btn_cancel', tOptions)}
				</button>);
		}
	});