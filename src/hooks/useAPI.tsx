import {useQuery} from '@tanstack/react-query'
import Result from '../interface/Result'
import ResultArray from '../interface/Result'
import {useState, useEffect} from 'react'
import axios from 'axios'

function useAPI() {
  const [page, setPage] = useState<number>(1)
  const [name, setName] = useState<string>("")
  const [status, setStatus] = useState<string>("")
  const [gender, setGender] = useState<string>("")
  const [species, setSpecies] = useState<string>("")

  const {data, isLoading, isError, refetch} = useQuery(['data'], async() => getData())

  const getData = async () => {
    const API = `https://rickandmortyapi.com/api/character/?page=${page}
    &name=${name}
    &status=${status}
    &gender=${gender}
    &species=${species}`
    const queryData = await axios.get(API).then(res => {return res.data})
    const {info, results} =  queryData
    return {info, results}
  }

  const updateName = (inputName: string) => {
    setName(inputName)
  }

  const updatePage = (inputPage: number) => {
    setPage(inputPage)
  }

  const updateStatus = (inputStatus: string) => {
    setStatus(inputStatus)
  }

  const updateGender = (inputGender: string) => {
    setGender(inputGender)
  }

  const updateSpecies = (inputSpecies: string) => {
    setSpecies(inputSpecies)
  }

  return {data, page, isLoading, isError, updateName, updatePage, updateStatus, updateGender, updateSpecies, refetch}

}

export default useAPI
