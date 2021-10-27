export interface IPerson {
    id: number;
    name: string;
    age: number;
}

export interface IProfileState {
    person: IPerson;
    children: Array<IPerson>;
}
