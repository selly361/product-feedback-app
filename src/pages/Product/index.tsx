import { Comments, Product, ProductHeader } from 'components'

import AddComment from 'components/PageTemplates/Product/AddComment'
import { StyledProduct } from "./Product.styles"
import { useAppSelector } from 'app/hooks'
import { useParams } from 'react-router-dom'

const ProductPage = () => {
  
  const { id } = useParams<{ id: string }>()
  
    const { suggestions, roadmap } = useAppSelector(state => state)
  
    const productReq = [...suggestions, ...roadmap].find(product => product.id === id)
  
  return (
    <StyledProduct>
      <ProductHeader />
      {productReq ? <Product productReq={productReq} /> : null}
      <Comments comments={productReq?.comments} />
      <AddComment />
    </StyledProduct>
  )
}

export default ProductPage




