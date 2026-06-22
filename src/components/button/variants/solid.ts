import type { ColorPalletType } from '../../../types/color_pallets';
import { cn } from '../../../util/cn';

const color: Record<ColorPalletType, string> = {
    red: cn(
        'active:bg-red-700',
        'bg-red-500',
        'disabled:bg-red-100',
        'hover:bg-red-600',
        'hover:disabled:bg-red-100',
        'text-white',
    ),
    orange: cn(
        'active:bg-orange-700',
        'bg-orange-500',
        'disabled:bg-orange-100',
        'hover:bg-orange-600',
        'hover:disabled:bg-orange-100',
        'text-white',
    ),
    yellow: cn(
        'active:bg-yellow-700',
        'bg-yellow-500',
        'disabled:bg-yellow-100',
        'hover:bg-yellow-600',
        'hover:disabled:bg-yellow-100',
        'text-white',
    ),
    lime: cn(
        'active:bg-lime-700',
        'bg-lime-500',
        'disabled:bg-lime-100',
        'hover:bg-lime-600',
        'hover:disabled:bg-lime-100',
        'text-white',
    ),
    green: cn(
        'active:bg-green-700',
        'bg-green-500',
        'disabled:bg-green-100',
        'hover:bg-green-600',
        'hover:disabled:bg-green-100',
        'text-white',
    ),
    teal: cn(
        'active:bg-teal-700',
        'bg-teal-500',
        'disabled:bg-teal-100',
        'hover:bg-teal-600',
        'hover:disabled:bg-teal-100',
        'text-white',
    ),
    cyan: cn(
        'active:bg-cyan-700',
        'bg-cyan-500',
        'disabled:bg-cyan-100',
        'hover:bg-cyan-600',
        'hover:disabled:bg-cyan-100',
        'text-white',
    ),
    blue: cn(
        'active:bg-blue-700',
        'bg-blue-500',
        'disabled:bg-blue-100',
        'hover:bg-blue-600',
        'hover:disabled:bg-blue-100',
        'text-white',
    ),
    purple: cn(
        'active:bg-purple-700',
        'bg-purple-500',
        'disabled:bg-purple-100',
        'hover:bg-purple-600',
        'hover:disabled:bg-purple-100',
        'text-white',
    ),
    fuchsia: cn(
        'active:bg-fuchsia-700',
        'bg-fuchsia-500',
        'disabled:bg-fuchsia-100',
        'hover:bg-fuchsia-600',
        'hover:disabled:bg-fuchsia-100',
        'text-white',
    ),
    pink: cn(
        'active:bg-pink-700',
        'bg-pink-500',
        'disabled:bg-pink-100',
        'hover:bg-pink-600',
        'hover:disabled:bg-pink-100',
        'text-white',
    ),
    gray: cn(
        'active:bg-gray-700',
        'bg-gray-500',
        'disabled:bg-gray-100',
        'hover:bg-gray-600',
        'hover:disabled:bg-gray-100',
        'text-white',
    ),
};

export const btnRed = color.red;
export const btnOrange = color.orange;
export const btnYellow = color.yellow;
export const btnLime = color.lime;
export const btnGreen = color.green;
export const btnTeal = color.teal;
export const btnCyan = color.cyan;
export const btnBlue = color.blue;
export const btnPurple = color.purple;
export const btnFuchsia = color.fuchsia;
export const btnPink = color.pink;
export const btnGray = color.gray;
