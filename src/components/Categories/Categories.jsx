import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Categories() {
  const [categories, setCategories] = useState([
    'Action',
    'Science Fiction',
    'Economy',
    'Music',
  ]);

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
