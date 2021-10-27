import {IPerson} from "../../../model";

export enum ProfileActionsEnum {
    UPDATE_PERSON = 'UPDATE_PERSON',
    UPDATE_CHILD = 'UPDATE_CHILD',
    DELETE_CHILD = 'DELETE_CHILD'
}

export interface IUpdatePersonAction {
    type: ProfileActionsEnum.UPDATE_PERSON,
    payload: IPerson
}

export interface IUpdateChildAction {
    type: ProfileActionsEnum.UPDATE_CHILD,
    payload: {
        child: IPerson,
        id: number
    }
}

export interface IDeleteChildAction {
    type: ProfileActionsEnum.DELETE_CHILD,
    payload: number
}

export type ProfileActions =
    IUpdatePersonAction |
    IUpdateChildAction |
    IDeleteChildAction;
