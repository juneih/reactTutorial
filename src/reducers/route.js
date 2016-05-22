function routeReducer (state='', action) {
	if (action.type === 'ROUTE_CHANGED'){
		state = action.route;
	}

	return state;

}
export default routeReducer;
