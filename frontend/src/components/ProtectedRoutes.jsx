
import { useAuth } from '../context/AuthContext';
import { Navigate,Outlet } from 'react-router-dom';
import Loading from './Loading';
import { api } from '../services/api';

function ProtectedRoutes() {
    const {isAuthenticated, isLoading, token} = useAuth()

    if(isLoading){
        return (
            <div>Checking Authentication</div>
        )
    }
    async function checkVarified() {
        const checkAuth = await api.get("/check-auth")
    }
  return isAuthenticated ? (
    <Outlet/> ) : (
        // <Navigate to="/login" replace/>
        <Loading/>
    )
}

export default ProtectedRoutes