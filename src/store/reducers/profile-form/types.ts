import {IPerson} from "../../../model";

export enum ProfileActionsEnum {
    UPDATE_PERSON = 'UPDATE_PERSON',
    ADD_CHILD = 'ADD_CHILD',
    UPDATE_CHILD = 'UPDATE_CHILD',
    REMOVE_CHILD = 'REMOVE_CHILD',
    UPDATE_CHILDREN = 'UPDATE_CHILDREN'
}

export interface IUpdatePersonAction {
    type: ProfileActionsEnum.UPDATE_PERSON,
    payload: IPerson
}

export interface IAddChildAction {
    type: ProfileActionsEnum.ADD_CHILD,
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
    type: ProfileActionsEnum.REMOVE_CHILD,
    payload: number
}

export interface IUpdateChildrenAction {
    type: ProfileActionsEnum.UPDATE_CHILDREN,
    payload: Array<IPerson>
}

export type ProfileActions =
    IUpdatePersonAction |
    IAddChildAction |
    IUpdateChildAction |
    IDeleteChildAction |
    IUpdateChildrenAction;
