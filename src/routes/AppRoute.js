import React from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from '../components/Login';
import Signup from '../components/Signup';
import DashBorad from '../components/Dashboard';
import PrivateRoute from './PrivateRoute';
import { connect } from 'react-redux';
import { history } from '../helpers';
import { clear } from '../actions/alertAction';

class AppRoute extends React.Component {
	constructor(props) {
		super(props);

		history.listen((location, action) => {
			this.props.clear();
		});
	}

	render() {
		const { alert } = this.props;
		return (
			<div className='jumbotron'>
				<div className='container'>
					<div className='col-sm-8 col-sm-offset-2'>
						{alert.message && (
							<div className={`alert ${alert.type}`}>
								{alert.message}
							</div>
						)}
						<Router history={history}>
							<Switch>
								<PrivateRoute exact path='/' component={DashBorad} />
								<Route path='/login' component={Login} />
								<Route path='/register' component={Signup} />
								<Redirect from='*' to='/' />
							</Switch>
						</Router>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	alert: state.alertReducer,
});

export default connect(mapStateToProps, {
	clear,
})(AppRoute);
