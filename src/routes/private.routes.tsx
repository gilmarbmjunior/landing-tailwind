import type { RouteObject } from 'react-router-dom';
import HomePage from '../pages/private/home';
import PrivateGuard from './guards/private.guard';

const privateRoutes: RouteObject[] = [
    {
        element: <PrivateGuard />,
        children: [
            {
                path: 'home',
                element: <HomePage />,
            },
        ],
    },
];

export default privateRoutes;
