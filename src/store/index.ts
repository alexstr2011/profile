import {combineReducers, createStore} from 'redux';
import profileClientReducer from "./reducers/profile-client";
import profileServerReducer from "./reducers/profile-server";
import {ProfileActionCreatorsClient} from "./reducers/profile-client/action-creators";
import {ProfileActionCreatorsServer} from "./reducers/profile-server/action-creators";

const rootReducer = combineReducers({
    profileClient: profileClientReducer,
    profileServer: profileServerReducer
});

export const store = createStore(rootReducer);
export type TState = ReturnType<typeof store.getState>;

export const profileActionCreators = {
    client: ProfileActionCreatorsClient,
    server: ProfileActionCreatorsServer
}