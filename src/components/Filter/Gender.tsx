import FilterBTN from './FilterBTN'

function Gender({updateGender, updatePage, refetch}: {
  updateGender: (value: string) => void
  updatePage: (value: number) => void
  refetch: () => void
}) {
  const gender=["female", "male", "genderless", "unknown"]
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingThree">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          Gender
        </button>
      </h2>
      <div
        id="collapseThree"
        className="accordion-collapse collapse show"
        aria-labelledby='headingThree'
        data-bs-parent="#accordionExample"
        >
        <div className="accordion-body d-flex flex-wrap gap-3">
          {gender.map((item, index)=> {
            return(
              <FilterBTN
                input={item}
                index={index}
                key={index}
                name="gender"
                task={updateGender}
                updatePage={updatePage}
                refetch={refetch} 
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Gender