import React from 'react';

type SelectCallBack = (index: number) => void;

export interface IMenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: 'horizontal' | 'vertical';
    style?: React.CSSProperties;
    onSelect?: SelectCallBack;
    children?: React.ReactNode;
}


export interface IMenuItemProps {
    index: number;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    children?: React.ReactNode;
}

export interface IMenuContext {
    index: number;
    onSelect?: SelectCallBack;
    mode?: 'horizontal' | 'vertical';
}