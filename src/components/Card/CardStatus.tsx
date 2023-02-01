import styles from "./Card.module.scss";

const CardStatus= ({status}: {status: string}) => {
  if (status === "Alive"){
    return <div className={`${styles.badge} position-absolute badge bg-success`}> {status} </div>
  } else if (status === "Dead") {
    return <div className={`${styles.badge} position-absolute badge bg-danger`}> {status} </div>
  } else {
    const capital = status.charAt(0).toUpperCase() + status.slice(1)
    return <div className={`${styles.badge} position-absolute badge bg-secondary`}> {capital} </div>
  }
}

export default CardStatus