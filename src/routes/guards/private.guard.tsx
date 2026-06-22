import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

function PrivateGuard() {
    const { isAuthenticated } = useAuth();

    if (!isAuthenticated) return <Navigate replace to="/login" />;

    return <Outlet />;
}

export default PrivateGuard;
