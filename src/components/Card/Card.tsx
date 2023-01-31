import Result from "../../interface/Result"
import CardDisplay from "./CardDisplay";


const Card = ({data}: {data:Result[]}) => {

  if (data.length !== undefined ){
    console.log(typeof data)
    return <div>
    { data.map((result: Result, key: number) => {
      return <CardDisplay data={result}/>
  })}
    </div>
  } else {
    console.log(data)
    return <div> No characters found </div>
  }
}


  
export default Card

/*
    return
      { data.map((result: Result) => {
        return <CardDisplay {...result}/>
    })}
    */