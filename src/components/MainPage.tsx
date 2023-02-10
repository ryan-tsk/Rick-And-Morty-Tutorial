import Card from './Card/Card'
import useAPI from '../hooks/useAPI'
import Search from './Search/Search'
import Pagination from './Pagination/Pagination'


function MainPage() {
  const {data, page, isLoading, updateName, updatePage, refetch} = useAPI()
  
  if (isLoading){
    return <div> Loading </div>
  }

  return(
    <>
      <Search updateName={updateName} updatePage={updatePage} refetch={refetch}></Search>
      <Card data={data?.results}/>
      <Pagination 
        pageNumber={page}
        info = {data?.info}
        updatePageNumber = {updatePage}
        refetch = {refetch}
      ></Pagination>
    </>
  )
}

export default MainPage
