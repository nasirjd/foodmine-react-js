import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { getAll, toggleBlock } from '../../services/userService';
import classes from './usersPage.module.css';
import Title from '../../components/Title/Title';
import Search from '../../components/Search/Search';

export default function UsersPage() {
  const [users, setUsers] = useState();
  const { searchTerm } = useParams();
  const auth = useAuth();

  useEffect(() => {
    loadUsers();
  }, [searchTerm]);

  const loadUsers = async () => {
    const users = await getAll(searchTerm);
    setUsers(users);
  };

  const handleToggleBlock = async userId => {
    const isBlocked = await toggleBlock(userId);

    setUsers(oldUsers =>
      oldUsers.map(user => (user.id === userId ? { ...user, isBlocked } : user))
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        <Title title="Manage Users" />
        <Search
          searchRoute="/admin/users/"
          defaultRoute="/admin/users"
          placeholder="Search Users"
          margin="1rem 0"
        />
        <div className={classes.list_item}>
          <h3>Name</h3>
          <h3>Email</h3>
          <h3>Address</h3>
          <h3>Admin</h3>
          <h3>Actions</h3>
        </div>
        {users &&
          users.map(user => (
            <div key={user.id} className={classes.list_item}>
              <span>{user.name}</span>
              <span>{user.email}</span>
              <span>{user.address}</span>
              <span>{user.isAdmin ? '✅' : '❌'}</span>
              <span className={classes.actions}>
                <Link to={'/admin/editUser/' + user.id}>Edit</Link>
                {auth.user.id !== user.id && (
                  <Link onClick={() => handleToggleBlock(user.id)}>
                    {user.isBlocked ? 'Unblock' : 'Block'}
                  </Link>
                )}
              </span>
            </div>
          ))}
      </div>
    </div>
  );
}
