var React = require('react');
var ReactDOM = require('react-dom');
var NavBar = require('./components/nav/navbar.jsx');

var navLinks = [
	{ title: "Home", href: "#"},
	{ title: "About", href: "#"},
	{ title: "Blog", href: "#"},
	{ title: "Contact", href: "#"},
];

ReactDOM.render(<NavBar navItems={navLinks} />, document.getElementById('main'));