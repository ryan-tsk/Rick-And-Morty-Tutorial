import Card from './Card/Card'
import useAPI from '../hooks/useAPI'
import Search from './Search/Search'
import Pagination from './Pagination'


function MainPage() {
  const {data, isLoading, updateName, updatePage, refetch} = useAPI()
  
  if (isLoading){
    return <div> Loading </div>
  }

  return(
    <>
      <Search updateName={updateName} updatePage={updatePage} refetch={refetch}></Search>
      <Card data={data?.results}/>
      <Pagination 
        pageNumber={data?.info.pages}
        info = {data?.info}
        updatePageNumber = {updatePage}
      ></Pagination>
    </>
  )
}

export default MainPage

/*
    return
      { data.map((result: Result) => {
        return <CardDisplay {...result}/>
    })}


      if (data.length > 0){
    return(
      data.map((item: Result) => {
        console.log(item.name)
      })
    )
    */
