import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const SuccessMessage = styled.div`
  color: green;
  text-align: center;
`

Success.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func
}

export default function Success ({message, onClick}) {
  return <SuccessMessage onClick={onClick}>{message}</SuccessMessage>
}
