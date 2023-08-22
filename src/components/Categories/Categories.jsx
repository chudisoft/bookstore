import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'

function Categories() {
  const status = useSelector((state) => state.categories.status);
  // const dispatch = useDispatch();

  return (
    <div>
      <h2>Categories</h2>
      <div>{status}</div>
    </div>
  )
}

Categories.propTypes = {}

export default Categories
