import React, { useState } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../components/collection-preview/collection-preview.component'

const ShopPage = () => {
  const [shopData] = useState(SHOP_DATA)
  return (
    <div className='shop-page'>
      {shopData.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps}>
          title
        </CollectionPreview>
      ))}
    </div>
  )
}

export default ShopPage
