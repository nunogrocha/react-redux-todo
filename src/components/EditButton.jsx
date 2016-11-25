import React, { PropTypes } from 'react'

const EditButton = ({ onUpForEdit }) => (
  <button onClick={onUpForEdit} >
    Edit
  </button>
)

EditButton.propTypes = {
  onUpForEdit: PropTypes.func.isRequired
}

export default EditButton