import React from 'react'

function FilterBTN() {
  return (
  <div>
    <style jsx>
      {`
        .x:checked + label {
          background-color: #0b5ed7;
          color: white }
        input[type="radio"] { display: none; }
      `}
    </style>
  </div>
  )
}

export default FilterBTN