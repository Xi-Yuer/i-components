import React from 'react';

export interface IButtonProps {
    className?: string;
    disabled?: boolean;
    render?: Function;
    size?: 'large' | 'small';
    btnType?: 'primary' | 'default' | 'warning' | 'danger';
    children?: React.ReactNode;
}

export type NavtiveButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
export type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NavtiveButtonProps & AnchorButtonProps>;

