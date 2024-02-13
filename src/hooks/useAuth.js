import { useMemo } from 'react'
import { useSelector } from 'react-redux'

export const useAuth = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    return useMemo(() => ({ isAuth }), [isAuth])
}
