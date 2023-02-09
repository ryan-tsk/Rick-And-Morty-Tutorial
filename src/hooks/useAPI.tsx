import {useQuery} from '@tanstack/react-query'
import Result from '../interface/Result'
import ResultArray from '../interface/Result'
import {useState, useEffect} from 'react'
import axios from 'axios'

function useAPI() {
  const [page, setPage] = useState<number>(1)
  const [name, setName] = useState<string>("")
  const [fetch, setFetch] = useState<boolean>(false)

  useEffect(() => {
    setFetch(true)
  }, [page, name])

  const {data, isLoading, isError} = useQuery(['data'], async() => getData(), {enabled:fetch})

  const getData = async () => {
    const API = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
    const queryData = await axios.get(API).then(res => {return res.data})
    const {info, results} =  queryData
    console.log(info)
    return {info, results}
  }

  const updateName = (inputName: string) => {
    setName(inputName)
  }

  const updatePage = (inputPage: number) => {
    setPage(inputPage)
  }

  return {data, isLoading, isError, updateName, updatePage}

}

export default useAPI

//    const queryData = await axios.get(API).then(res => {return res.data.results})