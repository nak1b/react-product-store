var React = require('react');
var NavBar = require('./nav/navbar.jsx');

var navLinks = [
	{ title: "Home", href: "/"},
	{ title: "Iphone", href: "/product/54"},
	{ title: "Samsung", href: "/product/12"},
	{ title: "Home", href: "/product/1"}
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