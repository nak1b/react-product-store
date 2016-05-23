var React = require('react');
var NavBar = require('./nav/navbar.jsx');

var navLinks = [
	{ title: "Home", href: "/"}
];

var BasePage = React.createClass({
	render: function(){
		return (
			<div>
				<NavBar bgColor={"#FFFFFF"} 
						navItems={navLinks} 
						titleColor={"#d9534f"} 
						linkColor={"red"} />

				{this.props.children}
			</div>
		);
	}
});

module.exports = BasePage;