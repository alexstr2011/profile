import React from 'react';
import {useTypedSelector} from "../../store/hooks";

const Preview = () => {
    const {person, children} = useTypedSelector(state => state.profileServer);

    return (
        <div>
            <p>{`${person.name}, ${person.age} years`}</p>
            <ul>
                {
                    children.map(item => (
                        <li key={item.id}>{`${item.name}, ${item.age} years`}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Preview;
