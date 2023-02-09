import Result from "../../interface/Result"
import {useEffect} from 'react'
import styles from "./Card.module.scss";
import CardStatus from "./CardStatus"

const CardDisplay= ({data}: {data: Result}) => {

  return (
    <div className={`${styles.card} d-flex flex-column justify-content-center`}>
      <img className={`${styles.img} img-fluid`} src={data.image} alt="" />
      <div className={`${styles.content}`}>
      <div className="fs-5 fw-bold mb-4 text-start"> {data.name}</div>
        <div className="fs-6 fw-bold text-start"> Last Location: </div>
        <div className="fs-8 text-start">{data.location.name}</div>
      </div>
    <CardStatus status = {data.status}/>
    </div>
  )
}

export default CardDisplay