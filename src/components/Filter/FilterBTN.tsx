
const FilterBTN = ({input, index, name, task, updatePage, refetch}:{
  input: string
  index: number,
  name:string,
  task: (value: string)=> void,
  updatePage: (value: number)=> void,
  refetch: ()=> void}) => {
  
  return (
  <div>
    <style jsx="true">
      {`
        .x:checked + label {
          background-color: red;
          color: white }
        input[type="radio"] { display: none; }
      `}
    </style>
    
    <div className="form-check">
      <input
        className="form-check-input x"
        type = "radio"
        name={name}
        id={`${name}-${index}`}
        />
      
      <label
        onClick={()=>{
          task(input)
          updatePage(1)
          refetch()
        }}
        className="btn btn-outline-primary"
        >
        {input}
      </label>
    </div>
  </div>
  )
}

export default FilterBTN