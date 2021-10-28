import React, {FC} from 'react';
import PersonInput from "../person-input";
import {IPerson} from "../../model";

interface IChildListItemFormProps {
    id: number;
    child: IPerson;
    updateChild: (child: IPerson, id: number) => void;
    removeChild: (id: number) => void;
}

const ChildListItemForm: FC<IChildListItemFormProps> = ({id, child, updateChild, removeChild}) => {

    const updateNameHandler = (value: string) =>
        updateChild({
            ...child, name: value
        }, id);

    const updateAgeHandler = (value: string) =>
        updateChild({
            ...child, age: (value ? parseInt(value) : 0)
        }, id);

    const deleteHandler = () => removeChild(id);

    return (
        <li>
            <PersonInput
                type='text'
                setValue={updateNameHandler}
                value={child.name}
                title='Name'
            />
            <PersonInput
                type='number'
                setValue={updateAgeHandler}
                value={String(child.age)}
                title='Age'
                min={0}
                max={150}
                step={1}
            />
            <button type='button' onClick={deleteHandler}>Delete</button>
        </li>
    );
};

export default ChildListItemForm;
