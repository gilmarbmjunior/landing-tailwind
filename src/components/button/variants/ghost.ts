import type { ColorPalletType } from '../../../types/color_pallets';
import { cn } from '../../../util/cn';

const color: Record<ColorPalletType, string> = {
    red: cn(
        'active:bg-red-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-red-150',
        'hover:bg-red-0',
        'hover:disabled:bg-transparent',
        'text-red-500',
    ),
    orange: cn(
        'active:bg-orange-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-orange-150',
        'hover:bg-orange-0',
        'hover:disabled:bg-transparent',
        'text-orange-500',
    ),
    yellow: cn(
        'active:bg-yellow-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-yellow-150',
        'hover:bg-yellow-0',
        'hover:disabled:bg-transparent',
        'text-yellow-500',
    ),
    lime: cn(
        'active:bg-lime-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-lime-150',
        'hover:bg-lime-0',
        'hover:disabled:bg-transparent',
        'text-lime-500',
    ),
    green: cn(
        'active:bg-green-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-green-150',
        'hover:bg-green-0',
        'hover:disabled:bg-transparent',
        'text-green-500',
    ),
    teal: cn(
        'active:bg-teal-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-teal-150',
        'hover:bg-teal-0',
        'hover:disabled:bg-transparent',
        'text-teal-500',
    ),
    cyan: cn(
        'active:bg-cyan-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-cyan-150',
        'hover:bg-cyan-0',
        'hover:disabled:bg-transparent',
        'text-cyan-500',
    ),
    blue: cn(
        'active:bg-blue-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-blue-150',
        'hover:bg-blue-0',
        'hover:disabled:bg-transparent',
        'text-blue-500',
    ),
    purple: cn(
        'active:bg-purple-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-purple-150',
        'hover:bg-purple-0',
        'hover:disabled:bg-transparent',
        'text-purple-500',
    ),
    fuchsia: cn(
        'active:bg-fuchsia-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-fuchsia-150',
        'hover:bg-fuchsia-0',
        'hover:disabled:bg-transparent',
        'text-fuchsia-500',
    ),
    pink: cn(
        'active:bg-pink-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-pink-150',
        'hover:bg-pink-0',
        'hover:disabled:bg-transparent',
        'text-pink-500',
    ),
    gray: cn(
        'active:bg-gray-50',
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-gray-150',
        'hover:bg-gray-0',
        'hover:disabled:bg-transparent',
        'text-gray-500',
    ),
};

export const btnRedGhost = color.red;
export const btnOrangeGhost = color.orange;
export const btnYellowGhost = color.yellow;
export const btnLimeGhost = color.lime;
export const btnGreenGhost = color.green;
export const btnTealGhost = color.teal;
export const btnCyanGhost = color.cyan;
export const btnBlueGhost = color.blue;
export const btnPurpleGhost = color.purple;
export const btnFuchsiaGhost = color.fuchsia;
export const btnPinkGhost = color.pink;
export const btnGrayGhost = color.gray;
