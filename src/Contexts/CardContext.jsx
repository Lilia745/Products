import React, { createContext, useState } from 'react'

export const CardContext = createContext()

function CardProvider({children}) {
    const [card,setCard] = useState([])
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
  return (
    <CardContext.Provider value={{card,addToCard}}>
        {children}
    </CardContext.Provider>
  )
}

export default CardProvider