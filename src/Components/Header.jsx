import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
        <Link to='/Sidebar'>
            <div className='ionIcon'><ion-icon name="bag-outline"></ion-icon></div>
        </Link>
    </header>
  )
}

export default Header