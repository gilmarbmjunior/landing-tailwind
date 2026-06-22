import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../contexts/auth-context';
import type { AuthData, AuthUser } from '../../../types/auth';

const useLogin = () => {
    const { signIn } = useAuth<AuthUser, AuthData>();
    const navigate = useNavigate();

    const handleSignIn = () => {
        signIn({
            user: {
                id: 1,
                name: 'NOME DO USUARIO',
                email: 'USUARIO@DOMINIO.COM.BR',
            },
            data: {
                permissions: ['dashboard:read', 'profile:read'],
                source: 'local-demo',
            },
        });

        navigate('/home', { replace: true });
    };

    return {
        handleSignIn,
    };
};

export default useLogin;
