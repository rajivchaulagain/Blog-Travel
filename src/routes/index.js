

import { useRoutes } from 'react-router-dom';
import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

// routes

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
    const isAuthenticated = true;
    const isAuthenticatedPrivateRoutes = isAuthenticated && PrivateRoutes
    return useRoutes([PublicRoutes , isAuthenticatedPrivateRoutes]);
}