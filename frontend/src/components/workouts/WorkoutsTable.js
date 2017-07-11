import React from 'react'
import { Table } from 'react-materialize'
import { Link } from 'react-router-dom'

export default function WorkoutsTable ({workouts}) {
  return (
    <Table>
      <thead>
      <tr>
        <th data-field="name">Name</th>
        <th data-field="date">Date</th>
        <th data-field="exercises">Exercises</th>
      </tr>
      </thead>

      <tbody>
      {workouts.map(w => (
        <tr key={w._id}>
          <td><Link to={`/workout/${w._id}`}>{w.name}</Link></td>
          <td>{w.date}</td>
          <td>{w.exercises.length}</td>
        </tr>))}
      </tbody>
    </Table>
  )
}
