import Card from './Card/Card'
import useAPI from '../hooks/useAPI'


function MainPage() {
  const {data, isLoading, updateName} = useAPI()

  if (isLoading){
    return <div> Loading </div>
  }
  return(
    <Card data={data}/>
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
