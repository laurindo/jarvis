import React from "react";

// Context
const State = React.createContext([]);
const Dispatch = React.createContext(() => {});

// Reducer
const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_ENTRADA":
			return action.payload;
		case "ADD_SAIDA":
			return [];
		default:
			return state;
	}
};

// Provider
const Provider = ({children}) => {
	const [state, dispatch] = React.useReducer(reducer, []);
	return (
		<State.Provider value={state}>
			<Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
		</State.Provider>
	);
};

export const Transaction = {
	State,
	Dispatch,
	Provider
};