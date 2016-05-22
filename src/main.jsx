var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/navbar.jsx');

var navLinks = [
	{ title: "Home", href: "#"},
	{ title: "About", href: "#"},
	{ title: "Blog", href: "#"},
	{ title: "Contact", href: "#"},
];

ReactDOM.render(<NavBar bgColor={"#FFFFFF"} 
						navItems={navLinks} 
						titleColor={"#d9534f"} 
						linkColor={"red"} />
				, document.getElementById('main'));