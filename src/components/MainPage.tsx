import Card from './Card/Card'
import useAPI from '../hooks/useAPI'
import Search from './Search/Search'
import Pagination from './Pagination/Pagination'
import Filter from './Filter/Filter'


function MainPage() {
  const {data, page, isLoading, updateName, updatePage, updateGender, updateStatus, updateSpecies, refetch} = useAPI()
  
  if (isLoading){
    return <div> Loading </div>
  }

  return(
  <div>
    <h1 className='text-center mb-3 text-primary'> Characters </h1>
    <Search updateName={updateName} updatePage={updatePage} refetch={refetch}/>
    <div className='container'>
      <div className='row'>
      <Filter 
          page={page}
          updatePage = {updatePage}
          updateStatus = {updateStatus}
          updateGender = {updateGender}
          updateSpecies = {updateSpecies}
          refetch = {refetch}
        />
      <div className="col-lg-8 col-12">
        <div className='row'>
        <Card data={data?.results}/>
        </div>
      </div>
      </div>
    </div>
        <Pagination 
          pageNumber={page}
          info = {data?.info}
          updatePageNumber = {updatePage}
          refetch = {refetch}
        />
  </div>
  )
}

export default MainPage
