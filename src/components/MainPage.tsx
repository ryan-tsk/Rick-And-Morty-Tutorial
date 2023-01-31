import Card from './Card/Card'
import useAPI from '../hooks/useAPI'


function MainPage() {
  const {data, isLoading, updateName} = useAPI()

  if (isLoading){
    return <div> Loading </div>
  }

  if (data.length > 0){
    return(
      <Card data={data}/>
    )


  } else {
    return <div>
      Bye
    </div>
  }
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
