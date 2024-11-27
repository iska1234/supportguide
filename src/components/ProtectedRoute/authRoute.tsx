
import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute: React.FC<PropsWithChildren> = ({children}) => {
	const token = localStorage.getItem('token');
	if(token) {
		return <Navigate to={'/home'} replace />
	}
	return children;
};

export default AuthRoute;