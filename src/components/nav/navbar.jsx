var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
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
			
		var styles = {
			boxShado: "0 0 4px rgba(0, 0, 0, 0.4)",
			borderRadius: 0
		}

		var titleStyle = {};
		var linkStyle = {};

		if(this.props.bgColor){
			styles.background = this.props.bgColor;
		}

		if(this.props.titleColor){
			titleStyle.color = this.props.titleColor;
		}

		return <div>
			<nav style={styles} className="navbar navbar-default">
				<div className="nabar-header">
					<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
					  <span className="sr-only">Toggle navigation</span>
			          <span className="icon-bar"></span>
			          <span className="icon-bar"></span>
			          <span className="icon-bar"></span>
			       </button>
			       <Link style={titleStyle} className="navbar-brand" to="/">Product Shop</Link>
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