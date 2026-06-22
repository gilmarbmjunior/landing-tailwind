import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';

function PublicGuard() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) return <Navigate replace to="/home" />;

    return <Outlet />;
}

export default PublicGuard;
