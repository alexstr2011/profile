import React, {ButtonHTMLAttributes, FC} from 'react';
import styles from './styled-button.module.css';

interface IStyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType: string;
}

const StyledButton: FC<IStyledButtonProps> =
    ({type, onClick, children}) => {

    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
};

export default StyledButton;
