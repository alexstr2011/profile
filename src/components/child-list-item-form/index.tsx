import React, {FC, useState} from 'react';
import PersonInput from "../person-input";
import {IPerson} from "../../model";

interface IChildListItemFormProps {
    child: IPerson;
    setChild: (child: IPerson) => void;
    removeChild: () => void;
}

const ChildListItemForm: FC<IChildListItemFormProps> = ({child, setChild, removeChild}) => {
    const [name, setName] = useState(child.name);
    const [age, setAge] = useState(child.age);

    const changeHandler = () => {

    };

    return (
        <li>
            {/*<PersonInput
                type='text'
                setValue={setName}
                value={name}
                title='Name'
            />
            <PersonInput
                type='number'
                setValue={(value: string) => setAge(value ? parseInt(value) : 0)}
                value={String(age)}
                title='Age'
                min={0}
                max={150}
                step={1}
            />
            <button type='button'>Delete</button>*/}
        </li>
    );
};

export default ChildListItemForm;
