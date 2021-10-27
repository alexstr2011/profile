import {IPerson, ProfileActionsEnum} from "./types";

export const ProfileActionCreators = {
    UpdatePerson: (person: IPerson) => ({
        type: ProfileActionsEnum.UPDATE_PERSON,
        payload: person
    }),
    UpdateChildren: (children: Array<IPerson>) => ({
        type: ProfileActionsEnum.UPDATE_CHILDREN,
        payload: children
    })
};