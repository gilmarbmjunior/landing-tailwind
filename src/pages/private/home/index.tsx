import { cn } from '../../../util/cn';
import { useAuth } from '../../../contexts/auth-context';
import { useNavigate } from 'react-router-dom';

type SessionUser = {
    id: number;
    name: string;
    email: string;
};

type SessionData = {
    permissions: string[];
    source: string;
};

function HomePage() {
    const { data, signOut, user } = useAuth<SessionUser, SessionData>();
    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut();
        navigate('/login', { replace: true });
    };

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
            <span>Home Page</span>
            <span>{user?.name ?? 'Sem usuário autenticado'}</span>
            <span>{data.permissions?.join(', ') ?? 'Sem permissões'}</span>
            <button
                className={cn(
                    'bg-black',
                    'px-4',
                    'py-2',
                    'rounded-md',
                    'text-white',
                )}
                onClick={handleSignOut}
                type="button"
            >
                Sair
            </button>
        </div>
    );
}

export default HomePage;
