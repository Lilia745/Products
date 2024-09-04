import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../Contexts/CardContext'

function CradItem({item}) { 
    const {removeCard,increment,decrement} = useContext(CardContext)
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
                        <div className='minus' onClick={()=>decrement(id)}>-</div>
                        <div className='nums'>{amout}</div>
                        <div className='plus' onClick={()=>increment(id)}>+</div>
                    </div>
                    <div className='Price'>${price}</div>
                    <div className='finalPrice'>{`$ ${price * amout}`}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CradItem