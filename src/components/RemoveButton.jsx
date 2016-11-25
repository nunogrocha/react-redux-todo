import React, { PropTypes } from 'react'

const RemoveButton = ({ onClickRemove }) => (
  <button onClick={onClickRemove} >
    x
  </button>
)

RemoveButton.propTypes = {
  onClickRemove: PropTypes.func.isRequired
}

export default RemoveButton