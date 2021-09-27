import { useParams } from "react-router"

const ProductsDetails = () => {
  const params = useParams()

  return (
    <div>
      <h1>Products Details Page</h1>
      <div>product ID is {params.id}</div>
    </div>
  )
}

export default ProductsDetails