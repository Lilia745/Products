import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CardContext } from '../Contexts/CardContext'

function Header() {
  const {itemAmout} = useContext(CardContext)
  return (
    <header>
      <Link to='/'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmQCizCTFVzXud-XjvVZjXtSAltycbywAitw&usqp=CAU" alt="" />
      </Link>
        <Link to='/Sidebar'>
            <div className='ionIcon'>
              <ion-icon name="bag-outline"></ion-icon>
              <div className='num'>{itemAmout}</div>
            </div>
        </Link>
    </header>
  )
}

export default Header