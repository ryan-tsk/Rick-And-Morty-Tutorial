import React from 'react'

function Filter({page, updatePage, updateStatus, updateGender, updateSpecies, refetch}:
  {page: number, 
   updatePage: (value: number)=> void, 
   updateStatus: (value: string) => void, 
   updateGender: (value: string) => void, 
   updateSpecies: (value: string) => void
   refetch: ()=> void}) {

  let clear = () => {
    updateStatus("")
    updateGender("")
    updateSpecies("")
    updatePage(1)
  }

  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2"> Filters </div>
      <div
        style={{cursor:"pointer"}} onClick={clear}
        className="text-primary text-decoration-underline text-center mb-3">
          Clear Filters
      </div>
    </div>
  )



}

export default Filter