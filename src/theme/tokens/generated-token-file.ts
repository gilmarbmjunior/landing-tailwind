import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

export type TokenPrimitive = string | number | boolean | null;
export type TokenValue =
    | TokenPrimitive
    | TokenValue[]
    | { [key: string]: TokenValue };

export type GeneratedTokenDefinition<TValue extends TokenValue> = {
    exportName: string;
    outputFileName: string;
    value: TValue;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const TOKENS_DIR = __dirname;

export function stringifyTokenValue<TValue extends TokenValue>(
    value: TValue,
    indent = 2,
): string {
    return JSON.stringify(value, null, indent);
}

export function createTokenFileContent<TValue extends TokenValue>(
    definition: GeneratedTokenDefinition<TValue>,
): string {
    return `export const ${definition.exportName} = ${stringifyTokenValue(definition.value, 2)};\n`;
}

export function resolveTokenOutputPath(outputFileName: string): string {
    return path.resolve(TOKENS_DIR, outputFileName);
}

export function writeGeneratedTextFile(
    outputFileName: string,
    fileContent: string,
): string {
    const outputPath = resolveTokenOutputPath(outputFileName);

    fs.writeFileSync(outputPath, fileContent, 'utf8');

    return outputPath;
}

export function writeGeneratedTokenFile<TValue extends TokenValue>(
    definition: GeneratedTokenDefinition<TValue>,
): string {
    const fileContent = createTokenFileContent(definition);

    return writeGeneratedTextFile(definition.outputFileName, fileContent);
}

export function isDirectExecution(moduleUrl: string): boolean {
    const entryFilePath = process.argv[1];

    if (!entryFilePath) {
        return false;
    }

    return pathToFileURL(entryFilePath).href === moduleUrl;
}
