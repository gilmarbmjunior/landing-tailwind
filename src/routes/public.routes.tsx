import { Navigate, type RouteObject } from 'react-router-dom';
import ComponentButtonPage from '../pages/components/button';
import LoginPage from '../pages/public/login';
import PublicGuard from './guards/public.guard';

const publicRoutes: RouteObject[] = [
    {
        element: <PublicGuard />,
        children: [
            {
                path: '/',
                element: <Navigate replace to="/login" />,
            },
            {
                path: '/login',
                element: <LoginPage />,
            },
            {
                path: '/components',
                children: [
                    {
                        path: 'button',
                        element: <ComponentButtonPage />,
                    },
                ],
            },
        ],
    },
];

export default publicRoutes;
