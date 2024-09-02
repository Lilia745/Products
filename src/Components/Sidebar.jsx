import { useContext } from "react"
import { SidebarContext } from "../Contexts/SidebarContext"
import { Link } from "react-router-dom"
import { CardContext } from "../Contexts/CardContext"
import CradItem from "./CradItem"

function Sidebar() {
    const {card} = useContext(CardContext)
  return (
    <div className='sideBar'>
        <div className="shop">
            <div>
                <div>Shoping Bag (0)</div>
            </div>
        </div>
        <div>
            <div className="roots">
                {
                    card.map((item=>{
                        return <CradItem item={item} key={item.id}/>
                    }))
                }
            </div>
            <div>A</div>
        </div>
    </div>
  )
}

export default Sidebar