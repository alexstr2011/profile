import React from 'react';
import {useTypedSelector} from "../../store/hooks";
import {ageToString} from "../../utils";
import styles from './preview.module.css';

const Preview = () => {
    const {person, children} = useTypedSelector(state => state.profileServer);

    return (
        <div className={styles.wrapper}>
            <h2 className={styles.title}>Персональные данные</h2>
            {person.name && (
                <p className={styles.person}>{`${person.name}, ${ageToString(person.age)}`}</p>
            )}
            <section className={styles.children}>
                <h2 className={styles.title}>Дети</h2>
                <ul className={styles.childrenList}>
                    {
                        children.map(item => (
                            <li key={item.id}>
                                <div className={styles.person + ' ' + styles.child}>
                                    {`${item.name}, ${ageToString(item.age)}`}
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </section>
        </div>
    );
};

export default Preview;
