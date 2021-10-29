import {ProfileActionsEnum} from "./types";
import {IPerson} from "../../../model";

export const ProfileFormActionCreators = {
    UpdatePerson: (person: IPerson) => ({
        type: ProfileActionsEnum.UPDATE_PERSON,
        payload: person
    }),
    AddChild: (child: IPerson) => ({
        type: ProfileActionsEnum.ADD_CHILD,
        payload: child
    }),
    UpdateChild: (child: IPerson, id: number) => ({
        type: ProfileActionsEnum.UPDATE_CHILD,
        payload: { child, id }
    }),
    RemoveChild: (id: number) => ({
        type: ProfileActionsEnum.REMOVE_CHILD,
        payload: id
    }),
    UpdateChildren: (children: Array<IPerson>) => ({
        type: ProfileActionsEnum.UPDATE_CHILDREN,
        payload: children
    })
};