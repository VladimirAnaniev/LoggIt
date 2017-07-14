import React from 'react'
import {Table} from 'react-materialize'

export default function WorkoutDetailsTable ({exercises}) {
  return (
    <Table>
      <thead>
        <tr>
          <th data-field='name'>Name</th>
          <th data-field='sets'>Sets</th>
          <th data-field='reps'>Reps</th>
          <th data-field='weight'>Weight</th>
        </tr>
      </thead>

      <tbody>
        {exercises.map(e => (
          <tr key={e._id}>
            <td>{e.name}</td>
            <td>{e.sets}</td>
            <td>{e.reps}</td>
            <td>{e.weight}</td>
          </tr>))}
      </tbody>
    </Table>
  )
}
