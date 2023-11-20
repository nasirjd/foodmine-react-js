import React, { Children } from 'react';
import { useAuth } from '../../hooks/useAuth';
import NotFound from '../NotFound/NotFound';
import AuthRoute from '../AuthRoute/AuthRoute';

function AdminRoute({ children }) {
  const { user } = useAuth();
  return user.isAdmin ? (
    children
  ) : (
    <NotFound
      linkRoute="/dashboard"
      linkText="Go to Dashboard"
      message="You don't have access to this page"
    />
  );
}

const AdminRouteExport = ({ children }) => (
  <AuthRoute>
    <AdminRoute>{children}</AdminRoute>
  </AuthRoute>
);

export default AdminRouteExport;
