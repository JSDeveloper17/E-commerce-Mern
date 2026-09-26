
import { useAuth } from '../context/AuthContext';
import { Navigate,Outlet } from 'react-router-dom';

function ProtectedRoutes() {
    const {isAuthenticated, isLoading} = useAuth()

    if(isLoading){
        return (
            <div>Checking Authentication</div>
        )
    }
  return isAuthenticated ? (
    <Outlet/> ) : (
        <Navigate to="/login" replace/>
    )
}

export default ProtectedRoutes