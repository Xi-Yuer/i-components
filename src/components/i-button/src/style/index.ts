export const IButtonSize = {
    'large': 'px-5 py-3',
    'small': 'px-3 py-2',
    'default': 'px-3 py-3',
}
const baseClass = 'leading text-center rounded-[6px] rounded-sm border text-sm dark:bg-zinc-800 dark:text-white-200 dark:border-zinc-600 dark:hover:bg-zinc-700';
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