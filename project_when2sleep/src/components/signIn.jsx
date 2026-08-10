import { useState } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from './authContext';

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const storedUser = sessionStorage.getItem('user');
        if (!storedUser) {
            return {};
        }

        try {
            return JSON.parse(storedUser);
        } catch {
            sessionStorage.removeItem('user');
            return {};
        }
    });

    return (
        <AuthContext.Provider value={{ user, setUser }}>
          {children}
        </AuthContext.Provider>
      );
};

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
