import React, {FC} from 'react';

interface IPersonInputProps {
    type: string;
    setValue: (value: string) => void;
    value: string;
    title: string;
    min?: number;
    max?: number;
    step?: number;
}

const PersonInput: FC<IPersonInputProps> = (
    {
        type,
        setValue,
        value,
        title,
        min,
        max,
        step
    }) => {

    return (
        <label>
            <span>{title}</span>
            <input
                type={type}
                onChange={(e) => setValue(e.currentTarget.value)}
                min={min}
                max={max}
                step={step}
                value={value}
            />
        </label>
    );
};

export default PersonInput;
