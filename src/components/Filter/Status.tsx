import React from 'react'

const Status = ({updateStatus, updatePage}:{
  updateStatus: (value: string)=> void
  updatePage: (value: number)=> void
  }) => {
    const status = ["Alive", "Dead", "Unknown"];
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne">
            Status </button>
        </h2>
      </div>
    )

}

export default Status