import { useApolloClient } from '@apollo/react-hooks';
import { AUTH_TOKEN } from '../constants';
import { useNavigate } from 'react-router';

const useAuthUser = () => {
    const client = useApolloClient();
    const navigate = useNavigate();

    const isAuth = !!localStorage.getItem(AUTH_TOKEN);
    const userId = localStorage.getItem('user-id');

    const setAuthUser = (token, id) => {
        localStorage.setItem(AUTH_TOKEN, token);
        localStorage.setItem('user-id', id);
        navigate('/profile');
    };

    const logout = () => {
        client.cache.reset();
        localStorage.clear();
        navigate('/login');
    };

    return {
        isAuth,
        setAuthUser,
        logout,
        userId,
    };
};

export default useAuthUser;
