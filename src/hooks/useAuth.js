import { useContext } from 'react'
import { AuthContext } from '../context/ProvideAuth'

const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth