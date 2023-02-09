import styles from "./Search.module.scss";
import useAPI from "../../hooks/useAPI";

const Search = ({updatePage, updateName, refetch}: {
  updatePage : (value: number) => void, 
  updateName : (value: string) => void,
  refetch : ()=> void}) => {

  return (
    <div>
      <form className={`${styles.search} d-flex flex-sm-row flex-column align-items-center justify-content-center gap-4 mb-2`}>
        <input onChange={ (event) => {
          updatePage(1)
          updateName(event.target.value)
          refetch()
        }}
        placeholder="Search for Characters.."
        className={styles.input}
        type = "text"
        ></input>
        <button
        onClick={(e)=> {e.preventDefault()}}> Search </button>
      </form>
    </div>
  )

}

export default Search