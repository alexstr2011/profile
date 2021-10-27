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

const profileClientReducer = (state = initialState, action: ProfileActions): IProfileState => {
    switch (action.type) {
        case ProfileActionsEnum.UPDATE_PERSON:
            return {
                ...state, person: action.payload
            }
        case ProfileActionsEnum.UPDATE_CHILD: {
            const index = state.children.findIndex(item => item.id === action.payload.id);
            return {
                ...state,
                children: [
                    ...state.children.slice(0, index),
                    action.payload.child,
                    ...state.children.slice(index + 1)
                ]
            }
        }
        case ProfileActionsEnum.DELETE_CHILD:
            return {
                ...state,
                children: state.children.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
};

export default profileClientReducer;