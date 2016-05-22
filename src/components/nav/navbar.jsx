var React = require('react');
var NavItem = require('./navitem.jsx');

var NavBar = React.createClass({
	createNavItems: function(){
		var items = this.props.navItems.map(function(item, index){
			return <NavItem 
						key={item.title + index}
						href={item.href} 
						title={item.title} />
		});

		return items;
	},
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
						{ this.createNavItems() }
					</ul>
				</div>
			</nav>
		</div>
	}
});

module.exports = NavBar;