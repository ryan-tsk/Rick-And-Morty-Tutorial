import Result from "../../interface/Result"
import styles from "./Card.module.scss";

const CardDisplay= ({data}: {data: Result}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark">
      <div className={`${styles.card} d-flex flex-column justify-content-center`}>
        <img className={`${styles.img} img-fluid`} src={data?.image} alt="" />
        <div className={`${styles.content}`}>
         <div className="fs-5 fw-bold mb-4"> {data?.name}</div>
         <div className="fs-6 fw-normal"> Last Location: </div>
         <div className="fs-5">{data.location?.name}</div>
        </div>
      </div>
    </div>
  )
}

export default CardDisplay