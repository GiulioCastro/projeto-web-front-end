import React, { createContext, useContext, useReducer } from 'react';
import contextTypes from './contextTypes';
import { useLocalStorage } from 'hooks';

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
	const [authToken, setAuthToken, removeAuthToken] = useLocalStorage('authToken');

	const [state, dispatch] = useReducer((state, action) => {
		switch (action.type) {
			case contextTypes.SIGN_IN:
				const { token } = action.payload;
				setAuthToken(token);
				return { ...state, token, isAuthenticated: true };
			case contextTypes.SIGN_OUT:
				removeAuthToken();
				return { ...state, token: null, isAuthenticated: false };
			default:
				throw new Error();
		};
	}, {
		isAuthenticated: !!authToken,
		token: authToken,
	});

	return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

function useGlobalState() {
	const { state } = useContext(GlobalContext);
	return state;
}

function useGlobalDispatch() {
	const { dispatch } = useContext(GlobalContext);
	return dispatch;
}

export { GlobalContext, GlobalProvider, useGlobalState, useGlobalDispatch };