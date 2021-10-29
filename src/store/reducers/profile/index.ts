import {ProfileActions, ProfileActionsEnum} from "./types";
import {IProfileState} from "../../../model";

const initialState: IProfileState = {
    person: {
        id: 0,
        name: '',
        age: 0
    },
    children: []
}

const profileReducer = (state = initialState, action: ProfileActions): IProfileState => {
    switch (action.type) {
        case ProfileActionsEnum.UPDATE:
            return {
                ...state,
                person: action.payload.person,
                children: action.payload.children
            }
        default:
            return state;
    }
};

export default profileReducer;