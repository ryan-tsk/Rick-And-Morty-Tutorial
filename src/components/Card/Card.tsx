import Result from "../../interface/Result"
import CardDisplay from "./CardDisplay";


const Card = ({data}: {data:Result[]}) => {

  if (data.length !== undefined ){
    return <>
    { data.map((result: Result) => {
      return (
        <div  key={result.id} className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
          <CardDisplay data={result}></CardDisplay>
        </div>
      )
  })}
    </>
  } else {
    return <div> No characters found </div>
  }
}

export default Card