import FilterBTN from "./FilterBTN"

const Species = ({updateSpecies, updatePage, refetch}: {
  updateSpecies: (value: string)=> void
  updatePage: (value: number) => void
  refetch: () => void
}) => {
  
  const species = ["Human", "Alien", "Humanoid", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"]

  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id="headingTwo">
        <button
          className="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          Species
        </button>
      </h2>
      <div
        id = "collapseTwo"
        className ="accordion-collapse collapse show"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body d-flex flex-wrap gap-3">
          { species.map((item, index) => {
            return (
              <FilterBTN
                name="species"
                index={index}
                key={index}
                updatePage={updatePage}
                task={updateSpecies}
                input={item}
                refetch={refetch}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Species