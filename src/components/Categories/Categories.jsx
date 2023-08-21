import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'

function Categories() {
  const categories = useSelector((state) => state.categories.value);
  // const dispatch = useDispatch();

  return (
    <>
      <div>Categories</div><ul>
        {categories.map((c) => (
          <li>
            {c}
          </li>
        ))}
      </ul>
    </>
  )
}

Categories.propTypes = {}

export default Categories
