type HSL = {
    h: number;
    s: number;
    l: number;
};

function parseHex(hex: string) {
    hex = hex.replace(/^#/, '');

    if (hex.length === 3) {
        hex = hex
            .split('')
            .map((x) => x + x)
            .join('');
    }

    const r: number = parseInt(hex.substring(0, 2), 16);
    const g: number = parseInt(hex.substring(2, 4), 16);
    const b: number = parseInt(hex.substring(4, 6), 16);

    let a: number = 255;

    if (hex.length === 8) a = parseInt(hex.substring(6, 8), 16);

    return { r, g, b, a: a / 255 };
}

function hexToHSL(hex: string): HSL {
    const { r, g, b } = parseHex(hex);

    const rn = r / 255;
    const gn = g / 255;
    const bn = b / 255;

    const max: number = Math.max(rn, gn, bn);
    const min: number = Math.min(rn, gn, bn);

    let h: number = 0;
    let s: number = 0;
    const l: number = (max + min) / 2;

    if (max !== min) {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

        switch (max) {
            case rn:
                h = (gn - bn) / d + (gn < bn ? 6 : 0);
                break;
            case gn:
                h = (bn - rn) / d + 2;
                break;
            case bn:
                h = (rn - gn) / d + 4;
                break;
        }

        h /= 6;
    }

    return { h, s, l };
}

function hslToHexWithAlpha(
    h: number,
    s: number,
    l: number,
    alpha: number = 1,
): string {
    function f(n: number) {
        const k: number = (n + h * 12) % 12;
        const a: number = s * Math.min(l, 1 - l);
        const c: number =
            l - a * Math.max(-1, Math.min(k - 3, Math.min(9 - k, 1)));
        return Math.round(255 * c)
            .toString(16)
            .padStart(2, '0');
    }

    const r = f(0);
    const g = f(8);
    const b = f(4);
    const a = Math.round(alpha * 255)
        .toString(16)
        .padStart(2, '0');

    return `#${r}${g}${b}${a}`;
}

function hexToRGBA(hex: string) {
    const { r, g, b, a } = parseHex(hex);
    return `rgba(${r}, ${g}, ${b}, ${a.toFixed(2)})`;
}

function colorScale(baseHex: string, steps: number) {
    const { r, g, b, a } = parseHex(baseHex);
    const { h, s, l }: HSL = hexToHSL(baseHex);
    const scale: string[] = [];

    const isExtremeColor =
        (r === 0 && g === 0 && b === 0) ||
        (r === 255 && g === 255 && b === 255);

    if (isExtremeColor) {
        const minAlpha = 0.1;
        const maxAlpha = 1;
        const alphaSteps = Array.from({ length: steps * 2 + 1 }, (_, i) => {
            return minAlpha + ((maxAlpha - minAlpha) / (steps * 2)) * i;
        });

        const middleIndex = steps;
        const adjustedAlphaSteps = alphaSteps.map((_, index) => {
            if (index < middleIndex) {
                return minAlpha + ((a - minAlpha) / middleIndex) * index;
            } else if (index > middleIndex) {
                return (
                    a + ((maxAlpha - a) / middleIndex) * (index - middleIndex)
                );
            } else {
                return a;
            }
        });

        adjustedAlphaSteps.forEach((alpha) => {
            scale.push(hslToHexWithAlpha(h, s, l, alpha));
        });
    } else {
        const minL: number = 0.05;
        const maxL: number = 0.95;

        const stepDark: number = (l - minL) / steps;
        for (let i: number = steps; i > 0; i--) {
            scale.push(hslToHexWithAlpha(h, s, l - stepDark * i, a));
        }

        scale.push(hslToHexWithAlpha(h, s, l, a));

        const stepLight: number = (maxL - l) / steps;
        for (let i: number = 1; i <= steps; i++) {
            scale.push(hslToHexWithAlpha(h, s, l + stepLight * i, a));
        }
    }

    return scale;
}

type ColorScale = {
    hex: string;
    name: string;
};

export type GeneratedColorScale = Record<string, Record<number, string>>;
export type ColorValueFormat = 'hex' | 'rgb';

export function generateColorScale(
    baseHexList: ColorScale[],
    type: ColorValueFormat,
    steps: number,
): GeneratedColorScale {
    const colorSteps: number[] = Array.from(
        { length: steps * 2 + 1 },
        (_, i) => {
            return 1000 - i * Math.floor(1000 / (steps * 2));
        },
    );

    const obj: GeneratedColorScale = {};

    baseHexList.forEach(({ hex, name }) => {
        const scale = colorScale(hex, steps);
        obj[name] = {};

        colorSteps.forEach((step, index) => {
            const colorHex = scale[index] || scale[scale.length - 1];
            obj[name][step] =
                type === 'hex'
                    ? colorHex.toLowerCase()
                    : hexToRGBA(colorHex.toLowerCase());
        });
    });

    return obj;
}
