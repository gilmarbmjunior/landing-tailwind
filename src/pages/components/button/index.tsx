import Button, { type VariantButtonType } from '../../../components/button';
import type { ColorPalletType } from '../../../types/color_pallets';
import { cn } from '../../../util/cn';

const ComponentButtonPage = () => {
    const variants: VariantButtonType[] = [
        'solid',
        'subtle',
        'surface',
        'outline',
        'ghost',
        'plain',
    ];

    const colors: ColorPalletType[] = [
        'red',
        'orange',
        'yellow',
        'lime',
        'green',
        'teal',
        'cyan',
        'blue',
        'purple',
        'fuchsia',
        'pink',
        'gray',
    ];

    return (
        <div className={cn('flex', 'flex-col', 'gap-0', 'p-4')}>
            {variants.map((variant) => (
                <div className={cn('flex', 'flex-col', 'gap-0')} key={variant}>
                    <div
                        className={cn(
                            'flex',
                            'flex-row',
                            'gap-4',
                            'items-center',
                        )}
                    >
                        <span className={cn('font-bold', 'text-lg')}>
                            {variant.charAt(0).toUpperCase() + variant.slice(1)}
                        </span>

                        <hr
                            className={cn(
                                'border-gray-300',
                                'border-t',
                                'flex-1',
                            )}
                        />
                    </div>

                    <div className={cn('flex', 'flex-row', 'gap-4', 'p-4')}>
                        {colors.map((color) => (
                            <div
                                className={cn(
                                    'flex',
                                    'flex-col',
                                    'gap-4',
                                    'items-center',
                                )}
                            >
                                <span>
                                    {color.charAt(0).toUpperCase() +
                                        color.slice(1)}
                                </span>

                                <Button
                                    className={cn('w-full')}
                                    key={color}
                                    pallet={color}
                                    variant={variant}
                                >
                                    Button
                                </Button>

                                <Button
                                    className={cn('w-full')}
                                    disabled
                                    key={color}
                                    pallet={color}
                                    variant={variant}
                                >
                                    Button
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ComponentButtonPage;
