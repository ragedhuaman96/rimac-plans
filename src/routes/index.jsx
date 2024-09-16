import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../pages/Login';
import Plans from '../pages/Plans';
import Resume from '../pages/Resume';
import { createTheme, ThemeProvider } from '@mui/material';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/plans",
        element: <Plans />,
    },
    {
        path: "/resume",
        element: <Resume />,
    }
]);

function App() {
    const theme = createTheme(); // crea el tema predeterminado de MUI

    return (
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
