import Card from './Card/Card'
import Result from '../interface/Result'
import useAPI from '../hooks/useAPI'
import Search from './Search/Search'
import { useEffect, useState } from 'react'
import Pagination from './Pagination'


function MainPage() {
  const {data, isLoading, updateName, updatePage} = useAPI()
  
  if (isLoading){
    return <div> Loading </div>
  }

  return(
    <>
      <Search updateName={updateName} updatePage={updatePage}></Search>
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
