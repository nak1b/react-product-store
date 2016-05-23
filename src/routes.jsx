var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var HashHistory = ReactRouter.hashHistory;

var BasePage = require('./components/BasePage.jsx');
var HomePage = require('./components/HomePage.jsx');
var ProductPage = require('./components/ProductPage.jsx');

var Routes = (
	<Router history={HashHistory}>
		<Route path="/" component={BasePage}>
			<IndexRoute component={HomePage} />
			<Route path="/product/:productId" component={ProductPage} />
		</Route>
	</Router>
);

module.exports = Routes;
