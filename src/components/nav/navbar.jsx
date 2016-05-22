var React = require('react');
var NavItem = require('./navitem.jsx');

var NavBar = React.createClass({
	render: function(){
		return <div>
			<nav className="navbar navbar-default">
				<div className="nabar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
					  <span className="sr-only">Toggle navigation</span>
			          <span className="icon-bar"></span>
			          <span className="icon-bar"></span>
			          <span className="icon-bar"></span>
			       </button>
			       <a className="navbar-brand" href="#">Product Shop</a>
				</div>

				<div className="collapse navbar-collapse" id="nav-collapse">
					<ul className="nav navbar-nav">
						{ <NavItem /> }
					</ul>
				</div>
			</nav>
		</div>
	}
});

module.exports = NavBar;