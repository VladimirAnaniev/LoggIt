import React from 'react'
import PropTypes from 'prop-types'
import { Row, Input, Button, Col, Icon } from 'react-materialize'

Input.propTypes = {
  name: PropTypes.string,
  sets: PropTypes.number,
  reps: PropTypes.number,
  wight: PropTypes.number,
  onDelete: PropTypes.func,
  onChange: PropTypes.func
}

export default function ExerciseForm ({name, sets, reps, weight, onDelete, onChange}) {
  return (
    <Row>
      <Input
        name='name'
        type='text'
        label='Name'
        s={4}
        value={name}
        onChange={onChange} />
      <Input
        name='sets'
        type='number'
        label='Sets'
        s={2}
        value={sets}
        onChange={onChange} />
      <Input
        name='reps'
        type='number'
        label='Reps'
        s={2}
        value={reps}
        onChange={onChange} />
      <Input
        name='weight'
        type='number'
        label='Weight'
        s={2}
        value={weight}
        onChange={onChange} />
      <Col s={2}>
        <Button className='red' waves='light' onClick={onDelete}><Icon>clear</Icon></Button>
      </Col>
    </Row>
  )
}
