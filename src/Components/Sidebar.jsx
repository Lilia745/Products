import { useContext } from "react"
import { CardContext } from "../Contexts/CardContext"
import CradItem from "./CradItem"

function Sidebar() {
    const {card,clearCard,total} = useContext(CardContext)
  return (
    <div className='sideBar'>
        <div>
            <div className="roots">
                {
                    card.map((item=>{
                        return <CradItem item={item} key={item.id}/>
                    }))
                }
                <div className="total-clear">
                    <div className="total">Total:   {parseFloat (total).toFixed(2)} $</div>
                    <div className="clear" onClick={clearCard}><ion-icon name="trash-outline"></ion-icon></div>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Sidebar