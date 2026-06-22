import { cn } from '../../../util/cn';
import useLogin from './useLogin';

function LoginPage() {
    const { handleSignIn } = useLogin();

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
            <span>Login Page</span>
            <button
                className={cn(
                    'bg-black',
                    'cursor-pointer',
                    'px-4',
                    'py-2',
                    'rounded-md',
                    'text-white',
                )}
                onClick={handleSignIn}
                type="button"
            >
                Entrar
            </button>
        </div>
    );
}

export default LoginPage;
