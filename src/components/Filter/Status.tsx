import FilterBTN from './FilterBTN'

const Status = ({updateStatus, updatePage, refetch}:{
  updateStatus: (value: string)=> void
  updatePage: (value: number)=> void
  refetch: ()=> void
  }) => {
    const status = ["Alive", "Dead", "Unknown"];
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id="headingOne">
          <button
            className="accordion-button" type="button"
            data-bs-toggle="collapse" data-bs-target="#collapseOne"
            aria-expanded="true" aria-controls="collapseOne"
          >
            Status 
          </button>
        </h2>
        <div
          id="collapseOne" 
          className="accordion-collapse collapse show"
          aria-labelledby="headingOne" 
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body d-flex flex-wrap gap-3">
            {status.map((item, index) => (
              <FilterBTN
                key={index}
                index={index}
                name="status"
                task={updateStatus}
                updatePage={updatePage}
                input={item}
                refetch = {refetch}
              />
            ))}
          </div>
        </div>
      </div>
    )
}

export default Status