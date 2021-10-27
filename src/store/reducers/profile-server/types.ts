import {IProfileState} from "../../../model";

export enum ProfileActionsEnum {
    UPDATE_ON_SERVER = 'UPDATE_ON_SERVER'
}

export interface IUpdateOnServerAction {
    type: ProfileActionsEnum.UPDATE_ON_SERVER,
    payload: IProfileState
}

export type ProfileActions = IUpdateOnServerAction;