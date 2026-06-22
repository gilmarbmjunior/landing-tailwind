import type { ColorPalletType } from '../../../types/color_pallets';
import { cn } from '../../../util/cn';

const color: Record<ColorPalletType, string> = {
    red: cn(
        'active:bg-red-100',
        'bg-red-0',
        'disabled:bg-red-0',
        'disabled:bg-red-0',
        'disabled:hover:bg-red-0',
        'disabled:text-red-150',
        'hover:bg-red-50',
        'hover:disabled:bg-red-0',
        'text-red-500',
    ),
    orange: cn(
        'active:bg-orange-100',
        'bg-orange-0',
        'disabled:bg-orange-0',
        'disabled:bg-orange-0',
        'disabled:hover:bg-orange-0',
        'disabled:text-orange-150',
        'hover:bg-orange-50',
        'hover:disabled:bg-orange-0',
        'text-orange-500',
    ),
    yellow: cn(
        'active:bg-yellow-100',
        'bg-yellow-0',
        'disabled:bg-yellow-0',
        'disabled:bg-yellow-0',
        'disabled:hover:bg-yellow-0',
        'disabled:text-yellow-150',
        'hover:bg-yellow-50',
        'hover:disabled:bg-yellow-0',
        'text-yellow-500',
    ),
    lime: cn(
        'active:bg-lime-100',
        'bg-lime-0',
        'disabled:bg-lime-0',
        'disabled:bg-lime-0',
        'disabled:hover:bg-lime-0',
        'disabled:text-lime-150',
        'hover:bg-lime-50',
        'hover:disabled:bg-lime-0',
        'text-lime-500',
    ),
    green: cn(
        'active:bg-green-100',
        'bg-green-0',
        'disabled:bg-green-0',
        'disabled:bg-green-0',
        'disabled:hover:bg-green-0',
        'disabled:text-green-150',
        'hover:bg-green-50',
        'hover:disabled:bg-green-0',
        'text-green-500',
    ),
    teal: cn(
        'active:bg-teal-100',
        'bg-teal-0',
        'disabled:bg-teal-0',
        'disabled:bg-teal-0',
        'disabled:hover:bg-teal-0',
        'disabled:text-teal-150',
        'hover:bg-teal-50',
        'hover:disabled:bg-teal-0',
        'text-teal-500',
    ),
    cyan: cn(
        'active:bg-cyan-100',
        'bg-cyan-0',
        'disabled:bg-cyan-0',
        'disabled:bg-cyan-0',
        'disabled:hover:bg-cyan-0',
        'disabled:text-cyan-150',
        'hover:bg-cyan-50',
        'hover:disabled:bg-cyan-0',
        'text-cyan-500',
    ),
    blue: cn(
        'active:bg-blue-100',
        'bg-blue-0',
        'disabled:bg-blue-0',
        'disabled:bg-blue-0',
        'disabled:hover:bg-blue-0',
        'disabled:text-blue-150',
        'hover:bg-blue-50',
        'hover:disabled:bg-blue-0',
        'text-blue-500',
    ),
    purple: cn(
        'active:bg-purple-100',
        'bg-purple-0',
        'disabled:bg-purple-0',
        'disabled:bg-purple-0',
        'disabled:hover:bg-purple-0',
        'disabled:text-purple-150',
        'hover:bg-purple-50',
        'hover:disabled:bg-purple-0',
        'text-purple-500',
    ),
    fuchsia: cn(
        'active:bg-fuchsia-100',
        'bg-fuchsia-0',
        'disabled:bg-fuchsia-0',
        'disabled:bg-fuchsia-0',
        'disabled:hover:bg-fuchsia-0',
        'disabled:text-fuchsia-150',
        'hover:bg-fuchsia-50',
        'hover:disabled:bg-fuchsia-0',
        'text-fuchsia-500',
    ),
    pink: cn(
        'active:bg-pink-100',
        'bg-pink-0',
        'disabled:bg-pink-0',
        'disabled:bg-pink-0',
        'disabled:hover:bg-pink-0',
        'disabled:text-pink-150',
        'hover:bg-pink-50',
        'hover:disabled:bg-pink-0',
        'text-pink-500',
    ),
    gray: cn(
        'active:bg-gray-100',
        'bg-gray-0',
        'disabled:bg-gray-0',
        'disabled:bg-gray-0',
        'disabled:hover:bg-gray-0',
        'disabled:text-gray-150',
        'hover:bg-gray-50',
        'hover:disabled:bg-gray-0',
        'text-gray-500',
    ),
};

export const btnRedSubtle = color.red;
export const btnOrangeSubtle = color.orange;
export const btnYellowSubtle = color.yellow;
export const btnLimeSubtle = color.lime;
export const btnGreenSubtle = color.green;
export const btnTealSubtle = color.teal;
export const btnCyanSubtle = color.cyan;
export const btnBlueSubtle = color.blue;
export const btnPurpleSubtle = color.purple;
export const btnFuchsiaSubtle = color.fuchsia;
export const btnPinkSubtle = color.pink;
export const btnGraySubtle = color.gray;
