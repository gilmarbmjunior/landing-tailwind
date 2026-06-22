import { cn } from '../../../util/cn';

function Error404Page() {
    return (
        <div
            className={cn(
                'flex',
                'flex-col',
                'gap-4',
                'h-screen',
                'items-center',
                'justify-center',
                'w-screen',
            )}
        >
            <span>404 Page</span>
        </div>
    );
}

export default Error404Page;
