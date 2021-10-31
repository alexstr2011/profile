import React, {FC} from 'react';
import styles from './person-input.module.css';

interface IPersonInputProps {
    type: string;
    setValue: (value: string) => void;
    value: string;
    title: string;
    min?: number;
    max?: number;
    step?: number;
    required?: boolean;
}

const PersonInput: FC<IPersonInputProps> = (
    {
        type,
        setValue,
        value,
        title,
        min,
        max,
        step,
        required = false
    }) => {

    return (
        <div className={styles.wrapper}>
            <input
                className={styles.input}
                type={type}
                onChange={(e) => setValue(e.currentTarget.value)}
                min={min}
                max={max}
                step={step}
                value={value}
                placeholder={title}
                required={required}
            />
            <span className={styles.title}>{title}</span>
        </div>
    );
};

export default PersonInput;
