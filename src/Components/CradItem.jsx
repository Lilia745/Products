import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../Contexts/CardContext'

function CradItem({item}) { 
    const {removeCard} = useContext(CardContext)
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
                        <h4 className='title'>{title}</h4>
                    </Link>
                    <div className='delet' onClick={()=>removeCard(id)}>
                        X
                    </div>
                </div>
                <div className='priceDiv'>
                    <div className='plus-minus'>
                        <div className='minus'>-</div>
                        <div className='num'>{amout}</div>
                        <div className='plus'>+</div>
                    </div>
                    <div>${price}</div>
                    <div className='finalPrice'>Total:   {`$ ${price * amout}`}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CradItem