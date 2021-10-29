import React from 'react';
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../store/hooks";
import PersonInput from "../person-input";
import {ActionCreators} from "../../store";
import ChildListItemForm from "../child-list-item-form";
import {IPerson} from "../../model";

const ProfileForm = () => {
    const {person, children} = useTypedSelector(state => state.profileClient);
    const dispatch = useDispatch();

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(ActionCreators.profile.Update({
            person: person,
            children: children
        }));
    };

    const updateNameHandler = (value: string) => dispatch(ActionCreators.form.UpdatePerson({
        ...person, name: value
    }));

    const updateAgeHandler = (value: string) => dispatch(ActionCreators.form.UpdatePerson({
        ...person, age: (value ? parseInt(value) : 0)
    }));

    const addChildHandler = () => dispatch(ActionCreators.form.AddChild({
        id: Date.now(),
        name: '',
        age: 0
    }));

    const updateChildHandler = (child: IPerson, id: number) =>
        dispatch(ActionCreators.form.UpdateChild(child, id));

    const removeChildHandler = (id: number) => dispatch(ActionCreators.form.RemoveChild(id));

    return (
        <form onSubmit={submitHandler}>
            ProfileForm
            <PersonInput
                type='text'
                setValue={updateNameHandler}
                value={person.name}
                title='Name'
            />
            <PersonInput
                type='number'
                setValue={updateAgeHandler}
                value={String(person.age)}
                title='Age'
                min={0}
                max={150}
                step={1}
            />
            <button type='button' onClick={addChildHandler}>Add child</button>
            <ul>
                {
                    children.map(item =>
                        <ChildListItemForm
                            key={item.id}
                            id={item.id}
                            child={item}
                            updateChild={updateChildHandler}
                            removeChild={removeChildHandler}/>
                    )
                }
            </ul>
            <button type='submit'>Save</button>
        </form>
    );
};

export default ProfileForm;
