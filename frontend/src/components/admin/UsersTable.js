import React from 'react'
import { Table } from 'react-materialize'
import { Button } from 'react-materialize'

export default function UsersTable ({users, onBlock, onMakeAdmin}) {
  return (
    <Table>
      <thead>
      <tr>
        <th data-field="email">Email</th>
        <th data-field="name">Name</th>
        <th data-field="roles">Roles</th>
        <th data-field="actions">Actions</th>
      </tr>
      </thead>

      <tbody>
      {users.map(u => (
        <tr key={u._id}>
          <td>{u.email}</td>
          <td>{u.name}</td>
          <td>{u.roles.join(', ')}</td>
          <td>
            <Button
              onClick={onMakeAdmin(u._id, u.roles.indexOf('Admin') >= 0)}
            >
              {u.roles.indexOf('Admin') < 0 ? 'Make admin' : 'Remove admin'}
            </Button>
            <Button
              className='red darken-3'
              onClick={onBlock(u._id, u.isBlocked)}
            >
              {u.isBlocked ? 'Unblock' : 'block'}
            </Button>
          </td>
        </tr>))}
      </tbody>
    </Table>
  )
}
