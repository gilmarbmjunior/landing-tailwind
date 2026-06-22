import { RouterProvider } from 'react-router-dom';
import mainRoutes from './routes/main.routes';

function App() {
    return <RouterProvider router={mainRoutes} />;
}

export default App;
