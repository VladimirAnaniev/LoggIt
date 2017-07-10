import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ErrorMessage = styled.div`
  color: red;
`

Error.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func
}
export default function Error ({message, onClick}) {
  return <ErrorMessage onClick={onClick}>{message}</ErrorMessage>
}
