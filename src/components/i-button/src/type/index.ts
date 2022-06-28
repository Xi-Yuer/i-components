import React from 'react';

export interface IButtonProps {
    className?: string;
    disabled?: boolean;
    render?: React.FC;
    size?: 'large' | 'small' | 'default';
    round?: boolean;
    btnType?: 'primary' | 'default' | 'warning' | 'danger';
    children?: React.ReactNode;
}

export type NavtiveButtonProps = IButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
export type AnchorButtonProps = IButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
// Partial<> 可以把某个属性设置为可选的
export type ButtonProps = Partial<NavtiveButtonProps & AnchorButtonProps>;

