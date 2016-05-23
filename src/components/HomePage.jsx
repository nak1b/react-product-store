var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var HomePage = React.createClass({
	render: function(){
		return (
			<div>
				<ul>
					<li><Link to="/product/54">Iphone</Link></li>
					<li><Link to="/product/12">Samsung</Link></li>
					<li><Link to="/product/1">LG</Link></li>
				</ul>
			</div>
		)
	}
});

module.exports = HomePage;