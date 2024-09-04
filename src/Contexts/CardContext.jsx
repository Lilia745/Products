import React, { createContext, useEffect, useState } from 'react'

export const CardContext = createContext()

function CardProvider({children}) {
    const [itemAmout,setItemAmout] = useState(0)
    const [card,setCard] = useState([])
    const [total,setTotal] = useState(0)


    useEffect(()=>{
        const total = card.reduce((accumulator,current)=>{
            return accumulator + current.price * current.amout 
        },0)
        setTotal(total)
    },[card])


    useEffect(()=>{
        if (card) {
            const amout = card.reduce((accumulator,current)=>{
                return accumulator + current.amout
            },0)
            setItemAmout(amout)
        }
    },[card])

    const addToCard = (product,id)=>{
        const newItem = {...product,amout:1}
        const cardItem = card.find(item => {
            return item.id === id
        })
        if (cardItem) {
            const newCard = [...card].map(item=>{
                if (item.id === id) {
                    return {...item, amout: cardItem.amout + 1}
                } else {
                    return item 
                }
            })
            setCard(newCard)
        } else {
            setCard([...card, newItem])
        }
    }

    const removeCard = (id)=>{
        const newCard = card.filter(item =>{
            return item.id !== id
        })
        setCard(newCard)
    }


    const clearCard = ()=>{
        setCard([])
    }

    const increment = (id)=>{
        const cardItem = card.find(item => item.id === id )
        addToCard(cardItem,id)
    }
    const decrement = (id)=>{
        const cardItem = card.find(item => item.id === id )
        if (cardItem) {
            const newItem = card.map((item)=>{
                if (item.id === id) {
                    return {...item,amout:cardItem.amout - 1}
                } else{
                    return item
                }
            })
            setCard(newItem)
        }
        if (cardItem.amout < 2 ) {
            removeCard(id)
        }
    }
  return (
    <CardContext.Provider value={{card,addToCard,removeCard,clearCard,increment,decrement,itemAmout,total}}>
        {children}
    </CardContext.Provider>
  )
}

export default CardProvider