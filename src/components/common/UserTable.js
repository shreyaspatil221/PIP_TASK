// UserTable.js
import React from 'react';

const UserTable = ({ users, sortedColumn, sortOrder, handleSort, handleAddressClick }) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th onClick={() => handleSort('name')} className={sortedColumn === 'name' ? 'sorted' : ''}>
                        Name {sortedColumn === 'name' && <i className={`bi bi-sort-alpha-${sortOrder === 'asc' ? 'down' : 'up'}`} />}
                    </th>
                    <th onClick={() => handleSort('username')} className={sortedColumn === 'username' ? 'sorted' : ''}>
                        Username {sortedColumn === 'username' && <i className={`bi bi-sort-alpha-${sortOrder === 'asc' ? 'down' : 'up'}`} />}
                    </th>
                    <th onClick={() => handleSort('email')} className={sortedColumn === 'email' ? 'sorted' : ''}>
                        Email {sortedColumn === 'email' && <i className={`bi bi-sort-alpha-${sortOrder === 'asc' ? 'down' : 'up'}`} />}
                    </th>
                    <th className="address-header">
                        Address
                    </th>
                    <th onClick={() => handleSort('phone')} className={sortedColumn === 'phone' ? 'sorted' : ''}>
                        Phone {sortedColumn === 'phone' && <i className={`bi bi-sort-alpha-${sortOrder === 'asc' ? 'down' : 'up'}`} />}
                    </th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td onClick={() => handleAddressClick(user.address.geo)} className='pointer'>
                            {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}
                        </td>
                        <td>{user.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default UserTable;
