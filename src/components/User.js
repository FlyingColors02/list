import classes from './User.module.css';
import { Component } from 'react';

class User extends Component{

	render(){
	return(
		<div className={classes.user}>
			<li className={classes.user}>{this.props.name}</li>
		</div>
	)
	}
	
}

// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
