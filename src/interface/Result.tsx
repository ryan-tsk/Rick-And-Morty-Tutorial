interface Result {
  id: number
  name: string
  status: string
  species: string 
  location: {
    name: string 
    url: string 
  }
  image?: string
}

export default Result