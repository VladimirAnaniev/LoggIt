import React from 'react'
import {Table} from 'react-materialize'

export default function WorkoutsTable ({workouts}) {
  return (
    <Table>
      <thead>
      <tr>
        <th data-field="name">Name</th>
        <th data-field="date">Date</th>
      </tr>
      </thead>

      <tbody>
      {workouts.map(w => (
        <tr key={w._id}>
          <td>{w.name}</td>
          <td>{w.date}</td>
        </tr>))}
      </tbody>
    </Table>
  )
}
