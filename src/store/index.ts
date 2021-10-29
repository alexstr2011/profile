import {combineReducers, createStore} from 'redux';
import profileFormReducer from "./reducers/profile-form";
import profileReducer from "./reducers/profile";
import {ProfileFormActionCreators} from "./reducers/profile-form/action-creators";
import {ProfileActionCreators} from "./reducers/profile/action-creators";

const rootReducer = combineReducers({
    profileClient: profileFormReducer,
    profileServer: profileReducer
});

export const store = createStore(rootReducer);
export type TState = ReturnType<typeof store.getState>;

export const ActionCreators = {
    form: ProfileFormActionCreators,
    profile: ProfileActionCreators
}