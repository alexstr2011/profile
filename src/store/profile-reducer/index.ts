import {IProfileState, ProfileActions, ProfileActionsEnum} from "./types";

const initialState: IProfileState = {
    person: {
        name: '',
        age: 0
    },
    children: []
}

const profileReducer = (state = initialState, action: ProfileActions): IProfileState => {
    switch(action.type) {
        case ProfileActionsEnum.UPDATE_PERSON:
            return {
                ...state, person: action.payload
            }
        case ProfileActionsEnum.UPDATE_CHILDREN:
            return  {
                ...state, children: action.payload
            }
        default:
            return state;
    }
};

export default profileReducer;