import React, {ButtonHTMLAttributes, FC} from 'react';
import {ReactComponent as PlusIcon} from '../../images/Plus.svg';
import styles from './styled-button.module.css';

interface IStyledButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    styleType: string;
}

const StyledButton: FC<IStyledButtonProps> =
    ({styleType, type, onClick, children}) => {

    return (
        <button type={type} onClick={onClick} className={styles.button + ' ' + styles[styleType]}>
            {styleType === 'plus' && <PlusIcon/>}
            {children}
        </button>
    );
};

export default StyledButton;
