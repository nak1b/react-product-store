var React = require('react');
var NavBar = require('./nav/navbar.jsx');
var LeadCapture = require('./forms/LeadCapture.jsx');

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

				<div className="container">
					<div className="row">
						<div className="col-sm-9">
							{this.props.children}
						</div>
						<div className="col-sm-3"> 
							<LeadCapture />
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = BasePage;