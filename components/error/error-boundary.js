import React from "react";
import Fallback from "./fallback";

export default class ErrorBoundary extends React.Component {
	state = {hasError: false};
	static getDerivedStateFromError() {
		return {hasError: true};
	}
	componentDidCatch(error, info) {
		//logErrorToService(error, info.componentStack);
	}
	render() {
		return this.state.hasError ? <Fallback/> : this.props.children;
	}
}
