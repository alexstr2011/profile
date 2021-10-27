import React, {useState} from 'react';
import {useTypedSelector} from "../../store/hooks";
import PersonInput from "../person-input";
import {useDispatch} from "react-redux";
import {profileActionCreators} from "../../store";

const ProfileForm = () => {
    const {person, children} = useTypedSelector(state => state.profileClient);
    const dispatch = useDispatch();
    const [name, setName] = useState(person.name);
    const [age, setAge] = useState(person.age);

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(profileActionCreators.client.UpdatePerson({
            id: 1,
            name: name,
            age: age
        }));
    }

    console.log(name, age);

    return (
        <form onSubmit={submitHandler}>
            ProfileForm
            <PersonInput
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
            <button type='submit'>Save</button>
        </form>
    );
};

export default ProfileForm;
