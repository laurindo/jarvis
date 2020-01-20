import React from "react";
import storage from "../utils/storage";

// Context
const State = React.createContext([]);
const Dispatch = React.createContext(() => {});

// Actions
export const actions = {
	ADD_TRANSACTION: "ADD_TRANSACTION",
	MERGE_TRANSACTION: "MERGE_TRANSACTION",
	REMOVE_TRANSACTION: "REMOVE_TRANSACTION"
};

// Reducer
const reducer = (state, action) => {
	switch (action.type) {
		case "ADD_TRANSACTION":
			const transaction = {...action.payload};
			transaction.createdAt = new Date().toISOString();
			transaction.value = parseFloat(action.payload.value);
			const newState = [transaction, ...state];
			storage.saveData('TRANSACTIONS', newState);
			return newState;
		case actions.MERGE_TRANSACTION:
			return action.payload;
		case actions.REMOVE_TRANSACTION:
			return state.filter(transaction => transaction.id !== action.payload.id);
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