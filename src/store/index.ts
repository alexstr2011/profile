import {createStore} from 'redux';
import profileReducer from "./profile-reducer";

export const store = createStore(profileReducer);

export type TState = ReturnType<typeof store.getState>;