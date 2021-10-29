import {IProfileState} from "../../../model";

export enum ProfileActionsEnum {
    UPDATE = 'UPDATE'
}

export interface IUpdateAction {
    type: ProfileActionsEnum.UPDATE,
    payload: IProfileState
}

export type ProfileActions = IUpdateAction;