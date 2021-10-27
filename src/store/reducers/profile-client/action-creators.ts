import {ProfileActionsEnum} from "./types";
import {IPerson} from "../../../model";

export const ProfileActionCreatorsClient = {
    UpdatePerson: (person: IPerson) => ({
        type: ProfileActionsEnum.UPDATE_PERSON,
        payload: person
    }),
    UpdateChild: (child: IPerson, id: number) => ({
        type: ProfileActionsEnum.UPDATE_CHILD,
        payload: { child, id }
    }),
    DeleteChild: (id: number) => ({
        type: ProfileActionsEnum.DELETE_CHILD,
        payload: id
    })
};