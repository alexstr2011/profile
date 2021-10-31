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

const profileFormReducer = (state = initialState, action: ProfileActions): IProfileState => {
    switch (action.type) {
        case ProfileActionsEnum.UPDATE_PERSON:
            return {
                ...state, person: action.payload
            }
        case ProfileActionsEnum.ADD_CHILD: {
            return {
                ...state, children: [...state.children, action.payload]
            }
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
        case ProfileActionsEnum.REMOVE_CHILD:
            return {
                ...state,
                children: state.children.filter(item => item.id !== action.payload)
            }
        case ProfileActionsEnum.UPDATE_CHILDREN:
            return {
                ...state,
                children: action.payload
            }
        default:
            return state;
    }
};

export default profileFormReducer;