export interface IPerson {
    name: string;
    age: number;
}

export interface IProfileState {
    person: IPerson;
    children: Array<IPerson>;
}

export enum ProfileActionsEnum {
    UPDATE_PERSON = 'UPDATE_PERSON',
    UPDATE_CHILDREN = 'UPDATE_CHILDREN'
}

export interface IUpdatePersonAction {
    type: ProfileActionsEnum.UPDATE_PERSON,
    payload: IPerson
}

export interface IUpdateChildrenAction {
    type: ProfileActionsEnum.UPDATE_CHILDREN,
    payload: Array<IPerson>
}

export type ProfileActions =
    IUpdatePersonAction |
    IUpdateChildrenAction;