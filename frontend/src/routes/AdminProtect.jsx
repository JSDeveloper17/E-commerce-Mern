import { useEffect, useState } from 'react'
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Loading from '../components/Loading';
import { toast } from "react-toastify"

function AdminProtect() {
    const [ok, setOk] = useState(false)
    const [isChecking, setIsChecking] = useState(true)
    const { isLoading, token } = useAuth()
    const location = useLocation()

    useEffect(() => {
        let cancelled = false

        const checkAdmin = async () => {
            if (isLoading) return

            if (!token) {
                setOk(false)
                setIsChecking(false)
                return
            }

            setIsChecking(true)
            try {
                const { data } = await api.get("/check-admin")
                if (!cancelled) setOk(data.ok === true)
            } catch (error) {
                if (!cancelled) {
                    setOk(false)
                    if (error.response?.status === 403) {
                        toast.warning("You are not an admin")
                    }
                }
            } finally {
                if (!cancelled) setIsChecking(false)
            }
        }

        checkAdmin()
        return () => {
            cancelled = true
        }
    }, [isLoading, token])

    if (isLoading || isChecking) return <Loading />

    return token && ok ? (
        <Outlet />
    ) : (
        <Navigate to="/" state={`${location.pathname}${location.search}${location.hash}`} replace />
    )
}

export default AdminProtect