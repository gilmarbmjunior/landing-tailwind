import type { ColorPalletType } from '../../../types/color_pallets';
import { cn } from '../../../util/cn';

const color: Record<ColorPalletType, string> = {
    red: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-red-150',
        'text-red-500',
    ),
    orange: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-orange-150',
        'text-orange-500',
    ),
    yellow: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-yellow-150',
        'text-yellow-500',
    ),
    lime: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-lime-150',
        'text-lime-500',
    ),
    green: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-green-150',
        'text-green-500',
    ),
    teal: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-teal-150',
        'text-teal-500',
    ),
    cyan: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-cyan-150',
        'text-cyan-500',
    ),
    blue: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-blue-150',
        'text-blue-500',
    ),
    purple: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-purple-150',
        'text-purple-500',
    ),
    fuchsia: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-fuchsia-150',
        'text-fuchsia-500',
    ),
    pink: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-pink-150',
        'text-pink-500',
    ),
    gray: cn(
        'bg-transparent',
        'disabled:bg-transparent',
        'disabled:text-gray-150',
        'text-gray-500',
    ),
};

export const btnRedPlain = color.red;
export const btnOrangePlain = color.orange;
export const btnYellowPlain = color.yellow;
export const btnLimePlain = color.lime;
export const btnGreenPlain = color.green;
export const btnTealPlain = color.teal;
export const btnCyanPlain = color.cyan;
export const btnBluePlain = color.blue;
export const btnPurplePlain = color.purple;
export const btnFuchsiaPlain = color.fuchsia;
export const btnPinkPlain = color.pink;
export const btnGrayPlain = color.gray;
