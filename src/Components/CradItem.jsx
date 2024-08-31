import React from 'react'
import { Link } from 'react-router-dom'

function CradItem({item}) {
    const {id,title,image,price,amout} = item
  return (
    <div className='shops'>
        <div className='item'>
            <div className='imgDiv'>
                <Link to={`/product/${id}`}>
                    <img src={image} alt="" />
                </Link>
                <div className='div'>
                <Link to={`/product/${id}`}>
                    <h4>{title}</h4>
                </Link>
                    <h4>{price}$</h4>
        </div>
            </div>
        </div>
    </div>
  )
}

export default CradItem