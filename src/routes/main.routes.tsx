import { createBrowserRouter, Navigate } from 'react-router-dom';
import Error404Page from '../pages/error/404';
import Error500Page from '../pages/error/500';
import privateRoutes from './private.routes';
import publicRoutes from './public.routes';

const mainRoutes = createBrowserRouter([
    ...publicRoutes,
    ...privateRoutes,
    {
        path: '/404',
        element: <Error404Page />,
    },
    {
        path: '/500',
        element: <Error500Page />,
    },
    {
        path: '*',
        element: <Navigate replace to="/404" />,
    },
]);

export default mainRoutes;
