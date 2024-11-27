
import React, { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute: React.FC<PropsWithChildren> = ({children}) => {
	const token = localStorage.getItem('token');
	if(!token) {
		return <Navigate to={'/'} replace />
	}
	return children;
};

export default ProtectedRoute;