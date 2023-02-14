import Status from "./Status"
import Species from "./Species"
import Gender from "./Gender"

function Filter({page, updatePage, updateStatus, updateGender, updateSpecies, refetch}:
  {page: number, 
   updatePage: (value: number)=> void, 
   updateStatus: (value: string) => void, 
   updateGender: (value: string) => void, 
   updateSpecies: (value: string) => void
   refetch: ()=> void}) {

  const clear = () => {
    updateStatus("")
    updateGender("")
    updateSpecies("")
    updatePage(1)
    refetch()
  }

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2"> Filters </div>
      <div
        style={{cursor:"pointer"}} 
        onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3">
          Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status 
          updateStatus = {updateStatus}
          updatePage = {updatePage}
          refetch = {refetch}
        />
        <Species
          updateSpecies = {updateSpecies}
          updatePage = {updatePage}
          refetch = {refetch}
        />
        <Gender
          updateGender={updateGender}
          updatePage={updatePage}
          refetch={refetch}
        />
      </div>
    </div>
  )
}

export default Filter