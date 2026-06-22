/// <reference types="node" />

import { generateColorScale } from './generated-colors-scale.ts';
import {
    isDirectExecution,
    writeGeneratedTextFile,
    writeGeneratedTokenFile,
    type GeneratedTokenDefinition,
} from './generated-token-file.ts';

const TAILWIND_THEME_OUTPUT_FILE_NAME = 'colors.css';

const exactColors = { white: '#ffffffff', black: '#000000ff' } as const;

const scaledColors = generateColorScale(
    [
        { hex: '#ef4444ff', name: 'red' },
        { hex: '#f97416ff', name: 'orange' },
        { hex: '#f59f0bff', name: 'amber' },
        { hex: '#eab208ff', name: 'yellow' },
        { hex: '#83cc16ff', name: 'lime' },
        { hex: '#22c55eff', name: 'green' },
        { hex: '#10b981ff', name: 'emerald' },
        { hex: '#14b8a5ff', name: 'teal' },
        { hex: '#06b5d4ff', name: 'cyan' },
        { hex: '#0ea4e9ff', name: 'sky' },
        { hex: '#3b83f6ff', name: 'blue' },
        { hex: '#6365f1ff', name: 'indigo' },
        { hex: '#8a5cf6ff', name: 'violet' },
        { hex: '#a955f7ff', name: 'purple' },
        { hex: '#d846efff', name: 'fuchsia' },
        { hex: '#ec489aff', name: 'pink' },
        { hex: '#f43f5dff', name: 'rose' },
        { hex: '#7c7c67ff', name: 'olive' },
        { hex: '#7c6d67ff', name: 'taupe' },
        { hex: '#78716cff', name: 'stone' },
        { hex: '#79697bff', name: 'mauve' },
        { hex: '#67787cff', name: 'mist' },
        { hex: '#62748eff', name: 'slate' },
        { hex: '#6b7280ff', name: 'gray' },
        { hex: '#71717aff', name: 'zinc' },
        { hex: '#737373ff', name: 'neutral' },

        { hex: '#ef444480', name: 'red_alpha' },
        { hex: '#f9741680', name: 'orange_alpha' },
        { hex: '#f59f0b80', name: 'amber_alpha' },
        { hex: '#eab20880', name: 'yellow_alpha' },
        { hex: '#83cc1680', name: 'lime_alpha' },
        { hex: '#22c55e80', name: 'green_alpha' },
        { hex: '#10b98180', name: 'emerald_alpha' },
        { hex: '#14b8a580', name: 'teal_alpha' },
        { hex: '#06b5d480', name: 'cyan_alpha' },
        { hex: '#0ea4e980', name: 'sky_alpha' },
        { hex: '#3b83f680', name: 'blue_alpha' },
        { hex: '#6365f180', name: 'indigo_alpha' },
        { hex: '#8a5cf680', name: 'violet_alpha' },
        { hex: '#a955f780', name: 'purple_alpha' },
        { hex: '#d846ef80', name: 'fuchsia_alpha' },
        { hex: '#ec489a80', name: 'pink_alpha' },
        { hex: '#f43f5d80', name: 'rose_alpha' },
        { hex: '#7c7c6780', name: 'olive_alpha' },
        { hex: '#7c6d6780', name: 'taupe_alpha' },
        { hex: '#78716c80', name: 'stone_alpha' },
        { hex: '#79697b80', name: 'mauve_alpha' },
        { hex: '#67787c80', name: 'mist_alpha' },
        { hex: '#62748e80', name: 'slate_alpha' },
        { hex: '#6b728080', name: 'gray_alpha' },
        { hex: '#71717a80', name: 'zinc_alpha' },
        { hex: '#73737380', name: 'neutral_alpha' },
    ],
    'hex',
    10,
);

const colors = {
    ...exactColors,
    ...scaledColors,
};

export const colorsTokenDefinition: GeneratedTokenDefinition<typeof colors> = {
    exportName: 'COLORS',
    outputFileName: 'colors.ts',
    value: colors,
};

function normalizeColorTokenName(name: string): string {
    return name
        .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        .replace(/[\s_]+/g, '-')
        .toLowerCase();
}

function createTailwindThemeCssContent(colorsValue: typeof colors): string {
    const colorVariables = Object.entries(colorsValue)
        .flatMap(([colorName, scale]) => {
            const normalizedColorName = normalizeColorTokenName(colorName);

            if (typeof scale === 'string') {
                return [`  --color-${normalizedColorName}: ${scale};`];
            }

            return Object.entries(scale).map(
                ([scaleName, colorValue]) =>
                    `  --color-${normalizedColorName}-${scaleName}: ${colorValue};`,
            );
        })
        .join('\n');

    return `@theme {\n  --color-*: initial;\n${colorVariables ? `\n${colorVariables}\n` : ''}}\n\n:root {\n${colorVariables ? `${colorVariables}\n` : ''}}\n`;
}

if (isDirectExecution(import.meta.url)) {
    writeGeneratedTokenFile(colorsTokenDefinition);
    writeGeneratedTextFile(
        TAILWIND_THEME_OUTPUT_FILE_NAME,
        createTailwindThemeCssContent(colors),
    );
}
