import React from 'react'
import ProductList from './ProductList'

function Home({data}) {
  return (
    <div>
      <ProductList data = {data}></ProductList>
    </div>
  )
}

export default Home