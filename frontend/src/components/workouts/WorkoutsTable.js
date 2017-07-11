import React from 'react'
import { Table } from 'react-materialize'
import { Link } from 'react-router-dom'
import { Button } from 'react-materialize'

export default function WorkoutsTable ({workouts, onDelete}) {
  return (
    <Table>
      <thead>
      <tr>
        <th data-field="name">Name</th>
        <th data-field="date">Date</th>
        <th data-field="exercises">Exercises</th>
        <th data-field="actions">Actions</th>
      </tr>
      </thead>

      <tbody>
      {workouts.map(w => (
        <tr key={w._id}>
          <td><Link to={`/workout/${w._id}`}>{w.name}</Link></td>
          <td>{new Date(w.date).toLocaleString()}</td>
          <td>{w.exercises.map(e => e.name).join(', ')}</td>
          <td>
            <Link className="btn" to={`/workout/${w._id}/edit`}>Edit</Link>
            <Button className='red darken-3' onClick={onDelete(w._id)}>Delete</Button>
          </td>
        </tr>))}
      </tbody>
    </Table>
  )
}
