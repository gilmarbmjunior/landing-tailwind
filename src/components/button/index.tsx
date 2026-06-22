import type { ButtonHTMLAttributes, ReactNode } from 'react';

import type { ColorPalletType } from '../../types/color_pallets';
import { cn } from '../../util/cn';

import {
    btnBlueOutline,
    btnCyanOutline,
    btnFuchsiaOutline,
    btnGrayOutline,
    btnGreenOutline,
    btnLimeOutline,
    btnOrangeOutline,
    btnPinkOutline,
    btnPurpleOutline,
    btnRedOutline,
    btnTealOutline,
    btnYellowOutline,
} from './variants/outline';

import {
    btnBlueGhost,
    btnCyanGhost,
    btnFuchsiaGhost,
    btnGrayGhost,
    btnGreenGhost,
    btnLimeGhost,
    btnOrangeGhost,
    btnPinkGhost,
    btnPurpleGhost,
    btnRedGhost,
    btnTealGhost,
    btnYellowGhost,
} from './variants/ghost';
import {
    btnBluePlain,
    btnCyanPlain,
    btnFuchsiaPlain,
    btnGrayPlain,
    btnGreenPlain,
    btnLimePlain,
    btnOrangePlain,
    btnPinkPlain,
    btnPurplePlain,
    btnRedPlain,
    btnTealPlain,
    btnYellowPlain,
} from './variants/plain';
import {
    btnBlue,
    btnCyan,
    btnFuchsia,
    btnGray,
    btnGreen,
    btnLime,
    btnOrange,
    btnPink,
    btnPurple,
    btnRed,
    btnTeal,
    btnYellow,
} from './variants/solid';
import {
    btnBlueSubtle,
    btnCyanSubtle,
    btnFuchsiaSubtle,
    btnGraySubtle,
    btnGreenSubtle,
    btnLimeSubtle,
    btnOrangeSubtle,
    btnPinkSubtle,
    btnPurpleSubtle,
    btnRedSubtle,
    btnTealSubtle,
    btnYellowSubtle,
} from './variants/subtle';
import {
    btnBlueSurface,
    btnCyanSurface,
    btnFuchsiaSurface,
    btnGraySurface,
    btnGreenSurface,
    btnLimeSurface,
    btnOrangeSurface,
    btnPinkSurface,
    btnPurpleSurface,
    btnRedSurface,
    btnTealSurface,
    btnYellowSurface,
} from './variants/surface';

export type VariantButtonType =
    | 'ghost'
    | 'outline'
    | 'plain'
    | 'solid'
    | 'subtle'
    | 'surface';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    pallet?: ColorPalletType;
    variant?: VariantButtonType;
    children: ReactNode;
};

const variants = {
    solid: {
        red: btnRed,
        orange: btnOrange,
        yellow: btnYellow,
        lime: btnLime,
        green: btnGreen,
        teal: btnTeal,
        cyan: btnCyan,
        blue: btnBlue,
        purple: btnPurple,
        fuchsia: btnFuchsia,
        pink: btnPink,
        gray: btnGray,
    },
    subtle: {
        red: btnRedSubtle,
        orange: btnOrangeSubtle,
        yellow: btnYellowSubtle,
        lime: btnLimeSubtle,
        green: btnGreenSubtle,
        teal: btnTealSubtle,
        cyan: btnCyanSubtle,
        blue: btnBlueSubtle,
        purple: btnPurpleSubtle,
        fuchsia: btnFuchsiaSubtle,
        pink: btnPinkSubtle,
        gray: btnGraySubtle,
    },
    surface: {
        red: btnRedSurface,
        orange: btnOrangeSurface,
        yellow: btnYellowSurface,
        lime: btnLimeSurface,
        green: btnGreenSurface,
        teal: btnTealSurface,
        cyan: btnCyanSurface,
        blue: btnBlueSurface,
        purple: btnPurpleSurface,
        fuchsia: btnFuchsiaSurface,
        pink: btnPinkSurface,
        gray: btnGraySurface,
    },
    outline: {
        red: btnRedOutline,
        orange: btnOrangeOutline,
        yellow: btnYellowOutline,
        lime: btnLimeOutline,
        green: btnGreenOutline,
        teal: btnTealOutline,
        cyan: btnCyanOutline,
        blue: btnBlueOutline,
        purple: btnPurpleOutline,
        fuchsia: btnFuchsiaOutline,
        pink: btnPinkOutline,
        gray: btnGrayOutline,
    },
    ghost: {
        red: btnRedGhost,
        orange: btnOrangeGhost,
        yellow: btnYellowGhost,
        lime: btnLimeGhost,
        green: btnGreenGhost,
        teal: btnTealGhost,
        cyan: btnCyanGhost,
        blue: btnBlueGhost,
        purple: btnPurpleGhost,
        fuchsia: btnFuchsiaGhost,
        pink: btnPinkGhost,
        gray: btnGrayGhost,
    },
    plain: {
        red: btnRedPlain,
        orange: btnOrangePlain,
        yellow: btnYellowPlain,
        lime: btnLimePlain,
        green: btnGreenPlain,
        teal: btnTealPlain,
        cyan: btnCyanPlain,
        blue: btnBluePlain,
        purple: btnPurplePlain,
        fuchsia: btnFuchsiaPlain,
        pink: btnPinkPlain,
        gray: btnGrayPlain,
    },
} as const;

const Button = ({
    pallet = 'blue',
    variant = 'solid',
    className,
    children,
    ...props
}: ButtonProps) => {
    const buttonStyle = variants[variant][pallet];

    return (
        <button
            className={cn(
                buttonStyle,
                'cursor-pointer',
                'disabled:cursor-not-allowed',
                'px-4',
                'py-2',
                'rounded-md',
                className,
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
