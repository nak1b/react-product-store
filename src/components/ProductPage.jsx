var React = require('react');

var ProductPage = React.createClass({
	render: function(){
		return (
			<div>Product Page Id : {this.props.params.productId}</div>
		);
	}
});

module.exports = ProductPage;