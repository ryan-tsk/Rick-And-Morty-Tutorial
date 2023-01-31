import {useQuery} from '@tanstack/react-query'
import Result from '../interface/Result'
import ResultArray from '../interface/Result'
import {useState, useEffect} from 'react'
import axios from 'axios'

 // const API = `https://rickandmortyapi.com/api/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`

function useAPI() {
  const [page, setPage] = useState<number>(1)
  const [name, setName] = useState<string>("")
  const [fetch, setFetch] = useState<boolean>(false)


  useEffect(() => {
    setFetch(true)
  }, [page, name])

  const {data, isLoading, isError} = useQuery(['data'], async() => getData(), {enabled: fetch})

  const getData = async () => {
    const API = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}`
    const queryData = await axios.get(API).then(res => {return res.data.results})
    return queryData
  }

  const updateName = (inputName: string) => {
    setName(inputName)
  }

  return {data, isLoading, isError, updateName}

}

export default useAPI