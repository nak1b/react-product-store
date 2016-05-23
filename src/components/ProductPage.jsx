var React = require('react');

var ProductPage = React.createClass({
	getInitialState: function(){
		return {
			pid: ""
		}
	},
	componentDidMount: function(){
		this.setState({pid: this.props.params.productId});
	},
	componentWillReceiveProps: function(nextProp){
		this.setState({pid: nextProp.params.productId});
	},
	render: function(){
		return (
			<div>Product Page Id : {this.state.pid}</div>
		);
	}
});

module.exports = ProductPage;