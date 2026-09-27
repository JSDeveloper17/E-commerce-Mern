
import { useAuth } from '../context/AuthContext';
import { Navigate,Outlet } from 'react-router-dom';
import Loading from './Loading';
import { api } from '../services/api';
import { useEffect, useState } from 'react';

function ProtectedRoutes() {
    const [isVerified, setIsVerified] = useState(false)
    const [isChecking, setIsChecking] = useState(true)
    const { isLoading, token} = useAuth()

    useEffect(() => {
        let cancelled = false

        const authCheck = async () => {
            if (isLoading) return

            if (!token) {
                setIsVerified(false)
                setIsChecking(false)
                return
            }

            setIsChecking(true)
            try {
                const { data } = await api.get("/check-auth")
                if (!cancelled) setIsVerified(data.isAuthenticated === true)
            } catch {
                if (!cancelled) setIsVerified(false)
            } finally {
                if (!cancelled) setIsChecking(false)
            }
        }

        authCheck()
        return () => {
            cancelled = true
        }
    }, [isLoading, token])

    if (isLoading || isChecking) return <Loading />

    return token && isVerified ? 
      <Outlet /> : <Navigate to="/login" replace />
}

export default ProtectedRoutes