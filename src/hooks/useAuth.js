import { useGlobalDispatch, useGlobalState } from 'providers/global';
import { signInAction, signOutAction } from 'providers/global/actions';

function useAuth() {
	const { isAuthenticated, token } = useGlobalState();
	const globalDispatch = useGlobalDispatch();

	const setToken = (token) => {;
		globalDispatch(signInAction(token));
	};

	const getToken = () => {
		return token;
	};

	const signIn = (token) => {
		setToken(token);
	};

	const signOut = () => {
		globalDispatch(signOutAction());
	};

	return {
		isAuthenticated,
		setToken,
		getToken,
		signIn,
		signOut,
	};
}

export default useAuth;