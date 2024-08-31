import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../Contexts/CardContext'

function Product({product}) {
    const {addToCard}=useContext(CardContext);
    const {id,image,category,title,price} = product
  return (
    <div className='productDiv'>
        <div className='divs'>
            <div className='img'>
                <div className='imgDiv'>
                    <img src={image} alt="" />
                </div>
            </div>
            <div className='buttonDiv'>
                <button onClick={()=> addToCard(product,id)}><div><ion-icon name="duplicate-outline"></ion-icon></div></button>
                <Link to={`/product/${id}`} className='icon'>
                    <ion-icon name="search-outline"></ion-icon>
                </Link>
            </div>
        </div>
        <div className='div'>
            <div>Category:  {category}</div>
            <Link to={`/product/${id}`}>
                <h4>{title}</h4>
            </Link>
            <h4>{price}$</h4>
        </div>
    </div>
  )
}

export default Product