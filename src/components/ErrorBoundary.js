import React from 'react';

class ErrorBoundary extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		};
	}
	componentDidCatch(){
		this.setState({hasError:true});
	}

	render(){
		if(this.state.hasError){
			return <h1>Something went wrong.</h1>;
		}
		// If no error, render the children components
		// passed to this ErrorBoundary
		// This allows the ErrorBoundary to wrap around
		// other components and catch errors in them
		// while still rendering them if no error occurs
		// This is useful for debugging and user experience
		// as it prevents the entire app from crashing
		// and allows for graceful error handling
		// and fallback UI
		return this.props.children;
	}
}

export default ErrorBoundary;