export const IButtonSize = {
    'large': 'px-5 py-3 h-[42px]',
    'small': 'px-2.5 py-3 h-[24px]',
    'default': 'px-3 py-3 h-[32px]',
}
const baseClass = 'inline-flex rounded justify-center border-[1px] text-[14px] items-center leading-1 whitespace-nowrap cursor-pointer box-border outline-none text-center duration-200 select-none align-middle border-[1px] dark:bg-zinc-800 dark:text-white-200 dark:border-zinc-600 dark:hover:bg-zinc-700';

export const IButtonType = {
    'primary': `${baseClass} text-white bg-primary hover:bg-primary-200  dark:hover:text-white-200`,
    'default': `${baseClass} dark:text-zinc-200 dark:bg-zinc-800 hover:bg-gray-200  dark:hover:text-white-200`,
    'warning': `${baseClass} text-white bg-orange-500 hover:bg-warning-200  dark:hover:text-white-200`,
    'danger': `${baseClass} text-white  bg-red-500 hover:bg-danger-200  dark:hover:text-white-200`,
}
export const IButtonDisabled = {
    'allowed': 'pointer-events-none cursor-not-allowed',
    'pointer': 'cursor-pointer',
}

export const IButtonRound = {
    'round': 'rounded-[999px]',
}