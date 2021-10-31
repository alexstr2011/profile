import React, {FC} from 'react';
import PersonInput from "../person-input/person-input";
import {IPerson} from "../../model";
import StyledButton from "../styled-button/styled-button";
import styles from './child-list-item-form.module.css';

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
        <li className={styles.listItem}>
            <PersonInput
                type='text'
                setValue={updateNameHandler}
                value={child.name}
                title='Имя'
                required={true}
            />
            <PersonInput
                type='number'
                setValue={updateAgeHandler}
                value={String(child.age ? child.age : '')}
                title='Возраст'
                min={0}
                max={150}
                step={1}
                required={true}
            />
            <StyledButton type='button' onClick={deleteHandler} styleType='borderless'>Удалить</StyledButton>
        </li>
    );
};

export default ChildListItemForm;
