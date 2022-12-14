import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'

const Signout = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.removeItem('session')
        setAuth('');
        document.location.reload();
        navigate('/')
    }, [navigate , setAuth])
}

export default Signout