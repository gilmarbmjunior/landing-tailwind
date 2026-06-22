import { cn } from '../../../util/cn';

function Error500Page() {
    return (
        <div
            className={cn(
                'flex',
                'h-screen',
                'items-center',
                'justify-center',
                'w-screen',
            )}
        >
            500 Page
        </div>
    );
}

export default Error500Page;
