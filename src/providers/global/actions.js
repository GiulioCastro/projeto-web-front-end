import contextTypes from './contextTypes';

const createAction = (type, payload) => ({ type, payload });

const signInAction = (token) => createAction(contextTypes.SIGN_IN, { token });
const signOutAction = () => createAction(contextTypes.SIGN_OUT);

export {
  signInAction,
  signOutAction
};